import "server-only";

const TODO_API_BASE_URL = "https://playground.4geeks.com/todo";

type TodoPayload = {
  label: string;
  is_done: boolean;
};

export type TodoItem = TodoPayload & {
  id: number;
};

export type UserTodosResponse = {
  name: string;
  todos: TodoItem[];
};

export type TodoUser = {
  id: number;
  name: string;
};

export type UsersListResponse = {
  users: TodoUser[];
};

type ApiErrorPayload = {
  detail?: string;
  message?: string;
};

export class TodoApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "TodoApiError";
    this.status = status;
  }
}

async function requestTodoApi<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${TODO_API_BASE_URL}${path}`, {
    ...init,
    headers: {
      accept: "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    let errorMessage = `Todo API error (${response.status})`;

    try {
      const errorData = (await response.json()) as ApiErrorPayload;
      if (errorData.detail) {
        errorMessage = errorData.detail;
      } else if (errorData.message) {
        errorMessage = errorData.message;
      }
    } catch {
      // Keep default message if response body is not valid JSON.
    }

    throw new TodoApiError(errorMessage, response.status);
  }

  if (response.status === 204) {
    return null as T;
  }

  return (await response.json()) as T;
}

export async function createUser(username: string): Promise<UserTodosResponse> {
  return requestTodoApi<UserTodosResponse>(`/users/${encodeURIComponent(username)}`, {
    method: "POST",
  });
}

export async function listUsers(offset = 0, limit = 100): Promise<UsersListResponse> {
  const params = new URLSearchParams({
    offset: String(offset),
    limit: String(limit),
  });

  return requestTodoApi<UsersListResponse>(`/users?${params.toString()}`);
}

export async function getUserTodos(username: string): Promise<UserTodosResponse> {
  try {
    return await requestTodoApi<UserTodosResponse>(
      `/users/${encodeURIComponent(username)}`,
    );
  } catch (error) {
    if (error instanceof TodoApiError && error.status === 404) {
      await createUser(username);
      return requestTodoApi<UserTodosResponse>(
        `/users/${encodeURIComponent(username)}`,
      );
    }

    throw error;
  }
}

export async function createTodo(username: string, payload: TodoPayload): Promise<TodoItem> {
  try {
    return await requestTodoApi<TodoItem>(`/todos/${encodeURIComponent(username)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    if (error instanceof TodoApiError && error.status === 404) {
      await createUser(username);
      return requestTodoApi<TodoItem>(`/todos/${encodeURIComponent(username)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    }

    throw error;
  }
}

export async function updateTodo(todoId: number, payload: TodoPayload): Promise<TodoItem> {
  return requestTodoApi<TodoItem>(`/todos/${todoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function deleteTodo(todoId: number): Promise<void> {
  await requestTodoApi<void>(`/todos/${todoId}`, {
    method: "DELETE",
  });
}
