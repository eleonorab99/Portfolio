import React from "react";
import { FaLinkedin } from "react-icons/fa";

const AboutMe: React.FC = () => (
  <div className="bg-gradient-to-r from-[#03045e] to-[#00b4d8] rounded-lg min-h-screen flex items-center">
    <div className="flex flex-col md:flex-row w-full max-w-6xl px-4 md:px-12 py-10 md:py-20 gap-8 md:gap-16 mx-auto">
      {/* Testo a sinistra */}
<div className="flex-1 flex flex-col justify-center items-center md:items-start">
        <h1 className="text-5xl md:text-[7rem] leading-none font-serif font-bold mb-6 md:mb-8 text-[#caf0f8] text-center md:text-left">
          About me
        </h1>
        <h2 className="text-xl md:text-3xl font-serif font-light ml-5 mb-6 md:mb-8 text-[#caf0f8] text-center md:text-left">
          Sono Eleonora.
          <br />
          Front-end developer appassionata di creatività e tecnologia.
        </h2>
       <p className="text-base md:text-lg font-light text-[#caf0f8] max-w-xl mb-4 ml-7 text-center md:text-left">
          Amo trasformare idee in interfacce web moderne, funzionali e
          accessibili. Mi piace lavorare con React e TypeScript, ma sono sempre
          curiosa di imparare nuove tecnologie e strumenti.
        </p>
       <p className="text-base md:text-lg font-light text-[#caf0f8] max-w-xl mb-4 ml-5 text-center md:text-left">
          Credo nel design semplice, nell’attenzione ai dettagli e nella
          collaborazione. Ogni progetto è per me un’occasione per crescere,
          sperimentare e trovare soluzioni creative.
        </p>
       <p className="text-xl md:text-3xl font-serif font-light mb-6 md:mb-8 text-[#caf0f8] text-center md:text-left">
          Skills
        </p>
       <p className="text-base md:text-lg font-light text-[#caf0f8] max-w-xl ml-5 mb-4 text-center md:text-left">
          Problem solving e pensiero
          analitico.
          Capacità di lavorare in team
          Attenzione ai dettagli.
          Predisposizione
          all'apprendimento continuo.
          Gestione efficace del tempo e
          delle priorità.
          Capacità di utilizzo dell'intelligenza artificiale
          per ottimizzare i tempi di sviluppo.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-[#caf0f8] text-[#03045e] rounded-lg font-medium shadow-lg hover:bg-white hover:text-[#00b4d8] transition-all duration-300 border-2 border-[#caf0f8] flex items-center space-x-2"
          onClick={() => window.open('/Curriculum.pdf')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Il mio CV</span>
        </button>
        <br />
        <p
          className="text-3xl font-serif font-light"
          style={{ color: "#caf0f8" }}
        >
          Contattami
        </p>
       <p className="text-base md:text-lg font-light text-[#caf0f8] max-w-xl ml-5 mb-4 text-center md:text-left">
          Sono disponibile per collaborazioni, progetti freelance e nuove opportunità lavorative.
        </p>
       <p className="text-base md:text-lg font-light text-[#caf0f8] max-w-xl ml-5 mb-4 text-center md:text-left">
          Puoi contattarmi via email all'indirizzo
          <br />
          <a
            href="mailto:eleonorabaronidm@gmail.com"
            className="hover:text-white transition-colors"
            style={{ color: "#90e0ef" }}
          >
            eleonorabaronidm@gmail.com
          </a>
          <br />
          o tramite LinkedIn.
        </p>
        <a
          href="https://www.linkedin.com/in/eleonora-baroni-836788184/?trk=li_LOL_SPIN_global_careers_jobsgtm_conv_acq_july2022_spinv1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          style={{ color: "#90e0ef" }}
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* Foto a destra */}
      <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
        <img
          src="/foto_cv.jpg"
          alt="Eleonora Baroni"
          className="rounded-lg object-cover w-48 h-64 md:w-[400px] md:h-[600px] shadow-lg"
        />
      </div>
    </div>
  </div>
);

export default AboutMe;
