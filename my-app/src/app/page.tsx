'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
 
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
};


export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if(users.length) return;
  fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((error) => console.error("Error fetching users:", error));

  }, [])
 


  if(!users.length) return null;

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-10 font-sans dark:bg-black">
      <main className="flex w-full max-w-5xl flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-950">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
            Usuarios
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Listado obtenido desde JSONPlaceholder.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {users.map((user) => (
            <article
              key={user.id}
              className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <div className="space-y-1">
                <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
                  {user.name}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  @{user.username}
                </p>
              </div>

              <div className="mt-4 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.company.name}</p>
              </div>

              <Link
                href={`/profile/${user.id}`}
                className="mt-4 inline-flex text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                Ver detalle
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
