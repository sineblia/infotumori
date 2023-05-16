import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://gmail.us21.list-manage.com/subscribe/post-json?u=5dc77ec1e8676c353af843a14&id=77b64696c7&f_id=0053bbe1f0&c=?";
    const formData = new FormData();
    formData.append("EMAIL", email);

    fetch(url, {
      method: "POST",
      mode: "cors",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          alert("Iscrizione avvenuta con successo!");
        } else {
          alert("Si è verificato un errore durante l'iscrizione.");
        }
      })
      .catch((error) => {
        alert("Si è verificato un errore durante l'iscrizione.");
        console.error(error);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className="py-14 max-w-screen-xl mx-auto">
      <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-blue-600 md:px-8 md:mx-8">
        <div className="relative z-10 max-w-xl mx-auto sm:text-center">
          <div className="space-y-3">
            <h3 className="text-3xl text-white font-bold">
              Iscriviti alla newsletter per ricevere tutti i nostri
              aggiornamenti
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Per rimanere aggiornati sui progressi della roadmap di Infotumori,
              sugli annunci e sulle nuove funzionalità.
            </p>
          </div>
          <div className="mt-6">
            <form
              onSubmit={onSubmit}
              className="validate flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto"
            >
              <input
                type="email"
                name="email"
                id="mce-EMAIL"
                placeholder="Inserisci la tua email"
                className="text-gray-500 w-full p-2 outline-none"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <button
                className="p-2 px-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
                type="submit"
              >
                Iscriviti
              </button>
            </form>
            <p className="mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto">
              No spam, siamo attenti alla protezione dei dati.
            </p>
          </div>
        </div>

        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)",
          }}
        ></div>
      </div>

      <div className="mt-8 border-2 rounded-md border-amber-300 relative overflow-hidden mx-4 px-4 py-6 rounded-2xl md:px-8 md:mx-8">
        <div className="relative z-10 max-w-xl mx-auto sm:text-center">
          <p className="text-gray-600 leading-relaxed">
            I contenuti di questo articolo sono puramente informativi. Non
            sostituiscono in alcun modo il consiglio medico professionale, la
            diagnosi o il trattamento. Non esitare a consultare un
            professionista sanitario per qualsiasi domanda riguardante la tua
            salute o un&apos;eventuale condizione medica.
          </p>
        </div>
      </div>
    </section>
  );
}
