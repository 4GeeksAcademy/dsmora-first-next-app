import { NextResponse } from "next/server";
import { TodoApiError, createTodo, getUserTodos } from "@/api/lib";

export const dynamic = "force-dynamic";

type UsernameContext = {
  params: Promise<{
    username: string;
  }>;
};

type CreateTodoBody = {
  label?: string;
  is_done?: boolean;
};

export async function GET(_request: Request, context: UsernameContext) {
  try {
    const { username } = await context.params;
    const userTodos = await getUserTodos(username);
    return NextResponse.json(userTodos);
  } catch (error) {
    if (error instanceof TodoApiError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }

    return NextResponse.json(
      { error: "Unexpected error while fetching todos." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request, context: UsernameContext) {
  try {
    const { username } = await context.params;
    const body = (await request.json()) as CreateTodoBody;

    const label = body.label?.trim();
    if (!label) {
      return NextResponse.json(
        { error: "Label is required." },
        { status: 400 },
      );
    }

    const createdTodo = await createTodo(username, {
      label,
      is_done: body.is_done ?? false,
    });

    return NextResponse.json(createdTodo, { status: 201 });
  } catch (error) {
    if (error instanceof TodoApiError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }

    return NextResponse.json(
      { error: "Unexpected error while creating todo." },
      { status: 500 },
    );
  }
}
