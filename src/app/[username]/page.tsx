import type { Metadata } from "next";
import { TodoListClient } from "./todo-list-client";

type UsernamePageProps = {
  params: Promise<{
    username: string;
  }>;
};

export async function generateMetadata(
  props: UsernamePageProps,
): Promise<Metadata> {
  const { username } = await props.params;

  return {
    title: `Todo List | ${username}`,
    description: `Manage your tasks for user ${username}`,
  };
}

export default async function UserTodoPage(props: UsernamePageProps) {
  const { username } = await props.params;

  return <TodoListClient username={username} />;
}
