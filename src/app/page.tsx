import Link from "next/link";
import { listUsers } from "@/api/lib";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { users } = await listUsers(0, 100);
  console.log(users);


  return (
    <main className="flex min-h-screen w-full items-start justify-center bg-zinc-100 p-6 sm:p-10">
      <section className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        <header className="mb-6 border-b border-zinc-200 pb-4">
          <h1 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Usuarios de Todo List
          </h1>
          <p className="mt-1 text-sm text-zinc-600">
            Selecciona un usuario para abrir su lista de tareas.
          </p>
        </header>

        {users.length === 0 ? (
          <p className="text-zinc-600">No hay usuarios disponibles.</p>
        ) : (
          <ul className="space-y-3">
            {users.map((user) => (
              <li
                key={user.id}
                className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 transition hover:border-zinc-400"
              >
                <Link
                  href={`/${encodeURIComponent(user.name)}`}
                  className="flex items-center justify-between"
                >
                  <span className="font-medium text-zinc-900">{user.name}</span>
                  <span className="text-sm text-zinc-600">Abrir</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
