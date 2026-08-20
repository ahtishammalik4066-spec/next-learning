import certificates from "@/data/certificates";

function Certificates() {
  return (
    <section id="certificates">

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">

        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[0.7fr_1.3fr]">

          <div>

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
              05 / Certificates
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Continuous learning.
            </h2>

            <p className="mt-5 text-xs leading-7 text-zinc-600 sm:text-sm">
              Certifications and learning milestones supporting my
              technical development.
            </p>

          </div>

          <div className="space-y-3 sm:space-y-4">

            {certificates.map((certificate) => (

              <div
                key={certificate.number}
                className="group flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 sm:gap-5 sm:p-6 sm:flex-row sm:items-center sm:justify-between"
              >

                <div className="flex min-w-0 items-start gap-4 sm:gap-5">

                  <span className="shrink-0 font-mono text-xs text-cyan-400">
                    {certificate.number}
                  </span>

                  <div className="min-w-0">

                    <h3 className="break-words font-medium">
                      {certificate.title}
                    </h3>

                    <p className="mt-1 break-words text-xs text-zinc-600 sm:text-sm">
                      {certificate.issuer}
                    </p>

                  </div>

                </div>

                <span className="shrink-0 text-xs text-zinc-600">
                  {certificate.year}
                </span>

              </div>

            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;