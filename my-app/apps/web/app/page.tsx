async function getData() {
  const res = await fetch('http://localhost:3001');

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Next + Nest Monorepo
      </h1>

      <pre className="mt-6">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}