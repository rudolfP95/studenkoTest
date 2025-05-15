export default function Features() {
    return (
      <section className="bg-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Kako ti Studenko može pomoći?</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Gdje pronaći smještaj?</h3>
            <p className="text-gray-600 mt-2">
              Studenko zna sve o studentskim domovima, privatnim stanovima i savjetima za traženje povoljnog smještaja u tvom gradu.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Koji fakultet odabrati?</h3>
            <p className="text-gray-600 mt-2">
              Usporedi fakultete, saznaj više o smjerovima, uvjetima upisa, prijemnim ispitima i pronađi ono što ti najviše odgovara.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Pomoć kroz studij</h3>
            <p className="text-gray-600 mt-2">
              Studenko ti pomaže s organizacijom učenja, pronalaskom skripti, savjetima za ispite i studentskim pravima.
            </p>
          </div>
        </div>
      </section>
    );
  }
   