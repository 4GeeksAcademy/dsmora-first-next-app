"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type TodoItem = {
  id: number;
  label: string;
  is_done: boolean;
};

type UserTodosResponse = {
  name: string;
  todos: TodoItem[];
};

type TodoApiErrorResponse = {
  error?: string;
};

type TodoListClientProps = {
  username: string;
};

async function parseErrorMessage(response: Response, fallback: string) {
  try {
    const body = (await response.json()) as TodoApiErrorResponse;
    return body.error ?? fallback;
  } catch {
    return fallback;
  }
}

export function TodoListClient({ username }: TodoListClientProps) {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newLabel, setNewLabel] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const endpoint = useMemo(
    () => `/api/todos/${encodeURIComponent(username)}`,
    [username],
  );

  useEffect(() => {
    const controller = new AbortController();

    async function loadInitialTodos() {
      try {
        setError(null);

        const response = await fetch(endpoint, {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          const message = await parseErrorMessage(
            response,
            "No se pudieron cargar las tareas.",
          );
          throw new Error(message);
        }

        const data = (await response.json()) as UserTodosResponse;
        setTodos(data.todos);
      } catch (err) {
        if (controller.signal.aborted) {
          return;
        }

        const message =
          err instanceof Error
            ? err.message
            : "Error inesperado cargando tareas.";
        setError(message);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    void loadInitialTodos();

    return () => {
      controller.abort();
    };
  }, [endpoint]);

  async function handleCreateTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const label = newLabel.trim();
    if (!label) {
      setError("Debes escribir una tarea.");
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ label, is_done: false }),
      });

      if (!response.ok) {
        const message = await parseErrorMessage(
          response,
          "No se pudo crear la tarea.",
        );
        throw new Error(message);
      }

      const createdTodo = (await response.json()) as TodoItem;
      setTodos((currentTodos) => [...currentTodos, createdTodo]);
      setNewLabel("");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error inesperado creando tarea.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDeleteTodo(todoId: number) {
    try {
      setError(null);

      const response = await fetch(`${endpoint}/${todoId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const message = await parseErrorMessage(
          response,
          "No se pudo eliminar la tarea.",
        );
        throw new Error(message);
      }

      setTodos((currentTodos) =>
        currentTodos.filter((todo) => todo.id !== todoId),
      );
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error inesperado eliminando tarea.";
      setError(message);
    }
  }

  return (
    <main className="flex min-h-screen w-full items-start justify-center bg-zinc-100 p-6 sm:p-10">
      <section className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        <header className="mb-6 border-b border-zinc-200 pb-4">
          <h1 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Todo List de {username}
          </h1>
          <p className="mt-1 text-sm text-zinc-600">
            Crea y elimina tareas usando la API de 4Geeks.
          </p>
        </header>

        <form className="mb-6 flex gap-3" onSubmit={handleCreateTodo}>
          <input
            type="text"
            value={newLabel}
            onChange={(event) => setNewLabel(event.target.value)}
            placeholder="Escribe una nueva tarea"
            className="flex-1 rounded-lg border border-zinc-300 px-4 py-2 text-zinc-900 outline-none transition focus:border-zinc-500"
            aria-label="Nueva tarea"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-lg bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Creando..." : "Agregar"}
          </button>
        </form>

        {error ? (
          <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        ) : null}

        {isLoading ? (
          <p className="text-zinc-600">Cargando tareas...</p>
        ) : todos.length === 0 ? (
          <p className="text-zinc-600">No hay tareas todavía.</p>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3"
              >
                <span className="text-zinc-900">{todo.label}</span>
                <button
                  type="button"
                  onClick={() => void handleDeleteTodo(todo.id)}
                  className="rounded-md border border-red-300 px-3 py-1 text-sm text-red-700 transition hover:bg-red-50"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
