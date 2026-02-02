export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">&#9878;&#65039;</span>
          <span className="text-xl font-bold text-blue-900">UrteilDB</span>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Anmelden
        </button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          10.000+ Gerichtsurteile
          <br />
          <span className="text-blue-600">
            Durchsuchbar. Strukturiert. Per API.
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Rechtsprechung f&uuml;r Legal-Tech, Kanzleien und Mietervereine. Von
          BGH bis Landgericht &ndash; eine Datenbank.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700">
            Kostenlos testen
          </button>
          <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-50">
            Zur Dokumentation &rarr;
          </button>
        </div>
      </section>

      {/* Live Demo */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Live-Demo</h2>
          <input
            type="text"
            placeholder="z.B. Mietminderung Schimmel"
            className="w-full p-4 border-2 rounded-lg text-lg mb-4"
          />
          <div className="space-y-4">
            {/* Placeholder Results */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold">BGH VIII ZR 180/22</h3>
              <p className="text-sm text-gray-600">
                Bundesgerichtshof &bull; 12.10.2023
              </p>
              <p className="mt-2">
                Mietminderung bei Schimmelbefall: Verschulden des Vermieters...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">&#9889;</div>
            <h3 className="text-xl font-bold mb-2">Blitzschnell</h3>
            <p className="text-gray-600">
              Elasticsearch-basierte Suche in Millisekunden
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">&#128218;</div>
            <h3 className="text-xl font-bold mb-2">Umfassend</h3>
            <p className="text-gray-600">
              BGH, OLG und Landgerichte ab 2000
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">&#128260;</div>
            <h3 className="text-xl font-bold mb-2">Aktuell</h3>
            <p className="text-gray-600">
              W&ouml;chentliche Updates mit neuen Urteilen
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Preise</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Hobby</h3>
              <div className="text-4xl font-bold mb-4">
                &euro;0
                <span className="text-lg text-gray-500">/Monat</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li>&#10003; 10 API-Calls/Monat</li>
                <li>&#10003; Nur Leits&auml;tze</li>
                <li>&#10003; Community-Support</li>
              </ul>
              <button className="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50">
                Starten
              </button>
            </div>

            {/* Pro Tier */}
            <div className="bg-blue-600 text-white rounded-xl p-8 shadow-lg scale-105">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="text-4xl font-bold mb-4">
                &euro;49
                <span className="text-lg text-blue-200">/Monat</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li>&#10003; 1.000 API-Calls/Monat</li>
                <li>&#10003; Volltext + Leits&auml;tze</li>
                <li>&#10003; E-Mail-Support</li>
                <li>&#10003; Webhook-Benachrichtigungen</li>
              </ul>
              <button className="w-full py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50">
                Beliebteste Wahl
              </button>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold mb-4">
                Individuell
              </div>
              <ul className="space-y-3 mb-8">
                <li>&#10003; Unbegrenzte API-Calls</li>
                <li>&#10003; Dedizierte Infrastruktur</li>
                <li>&#10003; SLA &amp; Priority-Support</li>
                <li>&#10003; On-Premise m&ouml;glich</li>
              </ul>
              <button className="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50">
                Kontakt aufnehmen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-gray-500">
        <p>&copy; 2024 UrteilDB. Alle Rechte vorbehalten.</p>
      </footer>
    </main>
  );
}
