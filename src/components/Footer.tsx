import globe from '../assets/images/nrk-globe.svg';

export default function Footer() {
  return (
    <footer className="border-t border-blue-100/10 border-opacity-10 py-6 ">
      <div className="flex flex-col md:flex-row md:justify-between items-center justify-center mx-10 mb-10 pt-10 lg:flex-row-reverse">
        <div className="">
          <button className="bg-blue-900 text-lg flex font-bold items-center text-white px-4 py-2 ">
            <img className="w-5 h-5 mr-2" src={globe} alt="Globe" />
            Velg språk / Choose language
          </button>
        </div>
        <div className="text-center md:text-left lg:w-5xl md:w-2xl w-64  ">
          <ul>
            <li className="text-slate-200 text-xl">
              <a href="https://www.nrk.no/etikk/opphavsrett-pa-nrk.no-1.2843522">
                Opphavsrett NRK © 2025
              </a>
            </li>
          </ul>
          <ul className="text-slate-400 space-y-2 flex flex-col lg:flex-row">
            <li>
              <span>Nettsjef: </span>
              <span>Hildegunn Soldal</span>
            </li>
            <li>
              <span>Radiosjef: </span>
              <span>Cathinka Rondan</span>
            </li>
            <li>
              <span>TV-sjef: </span>
              <span>Jan Egil Ådland</span>
            </li>
            <li>
              <span>Ansvarlig redaktør: </span>
              <span>Vibeke Fürst Haugen</span>
            </li>
          </ul>
          <ul className="text-slate-200 space-y-1 flex flex-col lg:flex-row">
            <li>
              <a href="https://www.nrk.no/kontakt" className="hover:underline">
                Kontakt
              </a>
            </li>
            <li>
              <a
                href="https://www.nrk.no/informasjon"
                className="hover:underline"
              >
                Om NRK
              </a>
            </li>
            <li>
              <a
                href="https://www.nrk.no/retningslinjer/personvern-i-nrk-1.7765898"
                className="hover:underline"
              >
                Personvern
              </a>
            </li>
            <li>
              <a
                href="https://www.nrk.no/retningslinjer/informasjonskapsler-_cookies_-1.11109868"
                className="hover:underline"
              >
                Informasjonskapsler (cookies)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
