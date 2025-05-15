
import Features from '@/app/components/features/features';
import Hero from '@/app/components/hero/hero';
import Head from 'next/head';


export default function Home() {
  return (
    <div>
      <Head>
        <title>STUDENKKO – AI Asistent</title>
        <meta name="description" content="STUDENKO - koristi AI odmah, besplatno i bez registracije." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Hero/>
        <Features/>
      </main>

      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} STUDENKO. Sva prava zadržana.</p>
      </footer>
    </div>
  );
}
