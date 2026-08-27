const highlights = [
  {
    value: '3+',
    label: 'Years shaping lab systems, project work, and student-facing support',
  },
  {
    value: '2',
    label: 'Engineering roles at APU with growing responsibility and trust',
  },
  {
    value: '1',
    label: 'Industry internship focused on 3D design and IoT integration',
  },
  {
    value: '12',
    label: 'Programme outcomes reflected across academic and professional growth',
  },
];

const capabilities = [
  'Control systems',
  'Embedded systems',
  'IoT prototyping',
  'CAD and 3D design',
  'Laboratory operations',
  'Technical reporting',
];

const projects = [
  {
    title: 'EMG-Controlled Prosthetic Arm',
    summary:
      'A final year project combining signal acquisition, servo actuation, tactile sensing, and 3D-printed mechanical design to create a more intuitive assistive device.',
    tags: ['Biomedical engineering', 'Signal processing', 'Haptics'],
  },
  {
    title: 'Pick-and-Place Automation System',
    summary:
      'A pneumatic Cartesian machine designed for repeatable object transfer, with coordinated motion, sensor logic, and a production-style workflow.',
    tags: ['Automation', 'Pneumatics', 'PLC logic'],
  },
  {
    title: 'MATLAB Op-Amp Analysis Tool',
    summary:
      'An interactive App Designer tool for teaching op-amp behaviour through configurable inputs and immediate feedback on gain calculations.',
    tags: ['MATLAB', 'Education tools', 'Analog circuits'],
  },
];

const experience = [
  {
    role: 'Mechatronics Intern',
    org: 'Ambani Consortium Group',
    period: 'Mar 2025 - Aug 2025',
    text: 'Supported real-world mechatronics work through 3D modelling, prototyping, and IoT sensor integration across engineering prototypes.',
  },
  {
    role: 'Senior Engineering Technical Assistant',
    org: 'Asia Pacific University',
    period: 'Dec 2024 - Present',
    text: 'Supervise labs, maintain equipment, and mentor junior technical staff while helping keep practical sessions organized and productive.',
  },
  {
    role: 'Head of Public Relations',
    org: 'APU IMechE Student Chapter',
    period: 'Aug 2024 - May 2026',
    text: 'Led outreach, events, and communications to strengthen the chapter’s visibility and build stronger student-community connections.',
  },
];

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,174,107,0.18),_transparent_36%),linear-gradient(180deg,#f7f2ea_0%,#f4efe5_46%,#efe8db_100%)] text-stone-950"
    >
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-[#2a4b5f]/10 blur-3xl" />
          <div className="absolute right-[-7rem] top-16 h-80 w-80 rounded-full bg-[#8f5c3b]/15 blur-3xl" />
          <div className="absolute bottom-[-10rem] left-1/3 h-96 w-96 rounded-full bg-[#b88957]/12 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between rounded-full border border-white/60 bg-white/50 px-5 py-3 shadow-[0_12px_40px_rgba(73,54,32,0.08)] backdrop-blur-md">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                Isameldin Ahmed Hussein Ahmed
              </p>
              <p className="text-sm text-stone-700">Mechatronics Engineer</p>
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <a
                className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-950"
                href="mailto:eldeenisam@gmail.com"
              >
                Email
              </a>
              <a
                className="rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-800"
                href="#contact"
              >
                Let&apos;s talk
              </a>
            </div>
          </header>

          <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
            <div className="max-w-3xl">
              <p className="inline-flex items-center rounded-full border border-stone-300/80 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-600 shadow-sm">
                Control systems · IoT · CAD · Technical leadership
              </p>
              <h1 className="mt-8 text-5xl font-semibold tracking-[-0.05em] text-balance sm:text-6xl lg:text-7xl">
                Polished engineering work, delivered with discipline and care.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
                I build practical mechatronics solutions across automation,
                embedded systems, and student-led engineering environments.
                My work combines hands-on problem solving with clear thinking,
                dependable execution, and a strong eye for detail.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-[#1f2d35] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(31,45,53,0.18)] transition hover:-translate-y-0.5 hover:bg-[#162229]"
                  href="#projects"
                >
                  View selected work
                </a>
                <a
                  className="rounded-full border border-stone-300 bg-white/70 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400 hover:bg-white"
                  href="mailto:eldeenisam@gmail.com"
                >
                  Contact me
                </a>
              </div>

              <dl className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/70 bg-white/65 p-5 shadow-[0_14px_36px_rgba(73,54,32,0.06)] backdrop-blur"
                  >
                    <dt className="text-3xl font-semibold tracking-tight text-stone-950">
                      {item.value}
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-stone-600">
                      {item.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="relative">
              <div className="rounded-[2rem] border border-white/70 bg-[#111827] p-6 text-white shadow-[0_30px_80px_rgba(16,24,40,0.18)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                      Profile
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold">
                      Mechatronics with a human touch
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/8 px-3 py-2 text-right">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                      Location
                    </p>
                    <p className="mt-1 text-sm font-medium">Kuala Lumpur</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                      Degree
                    </p>
                    <p className="mt-2 text-base leading-7 text-white/90">
                      BSc (Hons) Mechatronic Engineering
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                      Strength
                    </p>
                    <p className="mt-2 text-base leading-7 text-white/90">
                      Turning complex systems into reliable results
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(217,154,87,0.25),rgba(96,124,140,0.25))] p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                    Focus
                  </p>
                  <p className="mt-2 text-base leading-7 text-white/90">
                    Control systems, electromechanical design, IoT integration,
                    and dependable lab operations.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {capabilities.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs font-medium text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-8 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_14px_50px_rgba(73,54,32,0.07)] backdrop-blur">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              A careful engineer who values clarity, teamwork, and follow-through.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Based in Kuala Lumpur, I bring together practical lab experience,
              CAD and prototyping skills, and a steady approach to technical
              leadership. I enjoy work where reliability matters: systems that
              need to function cleanly, communicate clearly, and stand up to
              real-world use.
            </p>
          </div>

          <div id="projects" className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[2rem] border border-white/70 bg-white/72 p-7 shadow-[0_14px_40px_rgba(73,54,32,0.07)] backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Selected project
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-stone-950">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-700">
                  {project.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_14px_40px_rgba(73,54,32,0.07)] backdrop-blur">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">
              Experience
            </p>
            <div className="mt-6 space-y-5">
              {experience.map((item) => (
                <div
                  key={`${item.role}-${item.org}`}
                  className="rounded-3xl border border-stone-200/70 bg-stone-50/70 p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-stone-950">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-stone-600">{item.org}</p>
                    </div>
                    <p className="text-sm font-medium text-stone-500">
                      {item.period}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-stone-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="contact"
            className="rounded-[2rem] border border-[#1f2d35] bg-[#1f2d35] p-8 text-white shadow-[0_22px_60px_rgba(31,45,53,0.18)]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Open to thoughtful work, collaboration, and strong engineering teams.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/78">
              If you need a dependable mechatronics engineer who can bridge
              practical systems, technical communication, and organized
              execution, I’d be glad to connect.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                className="rounded-3xl border border-white/10 bg-white/8 p-5 transition hover:bg-white/12"
                href="mailto:eldeenisam@gmail.com"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                  Email
                </p>
                <p className="mt-2 text-base font-medium">eldeenisam@gmail.com</p>
              </a>
              <a
                className="rounded-3xl border border-white/10 bg-white/8 p-5 transition hover:bg-white/12"
                href="#top"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                  Top
                </p>
                <p className="mt-2 text-base font-medium">Back to the start</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
