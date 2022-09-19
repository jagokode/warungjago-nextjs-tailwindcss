import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Warung Jago</title>
        <meta name="description" content="ecommerce, toko, shopping, warung" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold">Warung Jago</h1>
    </div>
  );
}
