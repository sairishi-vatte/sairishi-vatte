import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Satya Sai Vatte | Live Film Editor</title>
        <meta
          name="description"
          content="Portfolio of Satya Sai Vatte, a professional live editor in the film industry."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Satya Sai Vatte</h1>
        <p className="text-lg md:text-2xl mb-6 text-gray-300">
          Live Film Editor
        </p>
        <a
          href="/work"
          className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-300 transition"
        >
          View My Work
        </a>
      </main>
    </>
  );
}
