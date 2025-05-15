import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Upoznaj Studenka
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        Tvoj pametni AI pomoćnik za studentski život. Pitaj sve – od smještaja i izbora fakulteta do studentskih prava i skripti. Brzo, jednostavno i besplatno.
      </p>
      <Link href="/chat"
       className="bg-yellow-400 hover:bg-yellow-500 transition px-6 py-3 rounded-lg text-gray-900 text-lg font-semibold">
          Pitaj Studenka
        
      </Link>
    </section>
  );
}

