import globe from '../assets/images/nrk-globe.svg';

export default function Footer() {
  return (
    <footer className="border-t border-blue-100/10 border-opacity-10 py-6 ">
      <div className="flex flex-col lg:justify-between items-center justify-center mx-10 mb-10 pt-10 lg:flex-row-reverse">
        <div className="flex flex-col justify-center flex-nowrap">
          <button className="bg-blue-900 text-lg flex font-bold cursor-pointer text-nowrap items-center text-blue-50 px-2 py-2 min-w-max">
            <img className="w-5 h-5 mr-2" src={globe} alt="Globe" />
            Velg språk / Choose language
          </button>
        </div>
        <div className="text-center lg:text-left lg:w-5xl md:w-2xl w-64  ">
          <ul>
            <li className="text-sky-100 text-lg my-4">
              <a
                className="hover:text-sky-200 "
                href="https://www.nrk.no/etikk/opphavsrett-pa-nrk.no-1.2843522"
              >
                Opphavsrett NRK © 2025
              </a>
            </li>
          </ul>
          <ul className="text-slate-400 font-medium text-base lg:text-lg  space-y-2 flex flex-col lg:flex-row">
            <li className="pr-2.5  lg:border-r-blue-100/10 lg:border-r">
              <span className="pr-2.5">Nettsjef: </span>
              <span>Hildegunn Soldal</span>
            </li>
            <li className="px-2.5  lg:border-r-blue-100/10 lg:border-r">
              <span className="px-2.5">Radiosjef: </span>
              <span>Cathinka Rondan</span>
            </li>
            <li className="px-2.5  lg:border-r-blue-100/10 lg:border-r">
              <span className="pr-2.5">TV-sjef: </span>
              <span>Jan Egil Ådland</span>
            </li>
            <li className="px-2.5  ">
              <span className="pr-2.5">Ansvarlig redaktør: </span>
              <span>Vibeke Fürst Haugen</span>
            </li>
          </ul>
          <ul className="text-sky-100 space-y-1 text-base md:text-base lg:text-lg flex flex-col lg:flex-row my-4">
            <li className="lg:pr-2.5 px-2.5 lg:border-r-blue-100/10 lg:border-r">
              <a
                href="https://www.nrk.no/kontakt"
                className="hover:underline hover:text-sky-200 "
              >
                Kontakt
              </a>
            </li>
            <li className="lg:pr-2.5 px-2.5 lg:border-r-blue-100/10 lg:border-r">
              <a
                href="https://www.nrk.no/informasjon"
                className="hover:underline hover:text-sky-200 "
              >
                Om NRK
              </a>
            </li>
            <li className="lg:pr-2.5 px-2.5 lg:border-r-blue-100/10 lg:border-r">
              <a
                href="https://www.nrk.no/retningslinjer/personvern-i-nrk-1.7765898"
                className="hover:underline hover:text-sky-200 "
              >
                Personvern
              </a>
            </li>
            <li className="lg:pr-2.5 px-2.5">
              <a
                href="https://www.nrk.no/retningslinjer/informasjonskapsler-_cookies_-1.11109868"
                className="hover:underline hover:text-sky-200 "
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
