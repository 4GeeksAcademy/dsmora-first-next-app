'use client';
import Link from "next/link";
import { use, useEffect, useState } from "react";

type UserDetail = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type ProfilePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function Profile({ params }: ProfilePageProps) {
    const { id } = use(params);
    const [user, setUser] = useState<UserDetail | null>(null);
  
    useEffect(() => {
      if(user) return;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  
    }, [id])

    if (!user) return null;

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-10 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-950">
        <div className="space-y-2">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            Volver al listado
          </Link>
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
            {user.name}
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            @{user.username}
          </p>
        </div>

        <section className="grid gap-4 rounded-xl border border-zinc-200 p-5 text-sm dark:border-zinc-800 sm:grid-cols-2">
          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">Email</p>
            <p className="text-zinc-700 dark:text-zinc-300">{user.email}</p>
          </div>
          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">Telefono</p>
            <p className="text-zinc-700 dark:text-zinc-300">{user.phone}</p>
          </div>
          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">Website</p>
            <p className="text-zinc-700 dark:text-zinc-300">{user.website}</p>
          </div>
          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">Empresa</p>
            <p className="text-zinc-700 dark:text-zinc-300">{user.company.name}</p>
          </div>
        </section>

        <section className="space-y-3 rounded-xl border border-zinc-200 p-5 text-sm dark:border-zinc-800">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Direccion
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            {user.address.street}, {user.address.suite}
          </p>
          <p className="text-zinc-700 dark:text-zinc-300">
            {user.address.city}, {user.address.zipcode}
          </p>
          <p className="text-zinc-700 dark:text-zinc-300">
            Geo: {user.address.geo.lat}, {user.address.geo.lng}
          </p>
        </section>

        <section className="space-y-2 rounded-xl border border-zinc-200 p-5 text-sm dark:border-zinc-800">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Empresa
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            {user.company.catchPhrase}
          </p>
          <p className="text-zinc-700 dark:text-zinc-300">{user.company.bs}</p>
        </section>
      </main>
    </div>
  );
}