import { NextResponse } from "next/server";
import { TodoApiError, deleteTodo, updateTodo } from "@/api/lib";

export const dynamic = "force-dynamic";

type TodoByIdContext = {
  params: Promise<{
    id: string;
    username: string;
  }>;
};

type UpdateTodoBody = {
  label?: string;
  is_done?: boolean;
};

function parseTodoId(value: string): number | null {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    return null;
  }

  return parsed;
}

export async function PUT(request: Request, context: TodoByIdContext) {
  try {
    const { id } = await context.params;
    const todoId = parseTodoId(id);

    if (!todoId) {
      return NextResponse.json({ error: "Invalid todo id." }, { status: 400 });
    }

    const body = (await request.json()) as UpdateTodoBody;
    const label = body.label?.trim();

    if (!label || typeof body.is_done !== "boolean") {
      return NextResponse.json(
        { error: "Label and is_done are required." },
        { status: 400 },
      );
    }

    const updatedTodo = await updateTodo(todoId, {
      label,
      is_done: body.is_done,
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    if (error instanceof TodoApiError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }

    return NextResponse.json(
      { error: "Unexpected error while updating todo." },
      { status: 500 },
    );
  }
}

export async function DELETE(_request: Request, context: TodoByIdContext) {
  try {
    const { id } = await context.params;
    const todoId = parseTodoId(id);

    if (!todoId) {
      return NextResponse.json({ error: "Invalid todo id." }, { status: 400 });
    }

    await deleteTodo(todoId);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    if (error instanceof TodoApiError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }

    return NextResponse.json(
      { error: "Unexpected error while deleting todo." },
      { status: 500 },
    );
  }
}
