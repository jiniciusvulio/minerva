import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

const courses = [
  {
    name: "Next.js for Production",
    description: "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "8h 24m",
    modules: "12 modules",
    icon: "N",
    iconTone: "bg-[#1d2f2f] text-white",
  },
  {
    name: "Docker Essentials",
    description: "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: "8 modules",
    icon: "🐳",
    iconTone: "bg-[#d7f0eb] text-[#1a725a]",
  },
  {
    name: "TypeScript Deep Dive",
    description: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "34h 36m",
    modules: "10 modules",
    icon: "TS",
    iconTone: "bg-[#dbe7ff] text-[#2d5dcc]",
  },
];

function MinervaMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" aria-label="Minerva logo" className="h-7 w-7">
      <path d="M20 2.5C11.7 3.3 5.4 7.5 3.1 13.8C0.4 21.2 5.8 30.2 12.2 34.6C14.9 36.5 18 38 20 38.5C22 38 25.1 36.5 27.8 34.6C34.2 30.2 39.6 21.2 36.9 13.8C34.6 7.5 28.3 3.3 20 2.5Z" fill="#26785D" />
      <path d="M20 37C20 25.1 20 13.8 20 3.8M20 24.8C16.2 19.7 11.1 15.2 5 12.4M20 24.8C23.8 19.7 28.9 15.2 35 12.4" stroke="#F4F8F5" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-label="search" className="h-6 w-6 text-[#1d2b2a]">
      <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12.5 12.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-label="notifications" className="h-5 w-5 text-[#1d2b2a]">
      <path d="M10 2.75C7.311 2.75 5.25 4.811 5.25 7.5V9.304C5.25 10.204 4.987 11.09 4.503 11.842L3.3 13.5H16.7L15.497 11.842C15.013 11.09 14.75 10.204 14.75 9.304V7.5C14.75 4.811 12.689 2.75 10 2.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8.25 15.25C8.612 16.357 9.166 17 10 17C10.834 17 11.388 16.357 11.75 15.25H8.25Z" fill="currentColor" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-label="sparkle" className="h-4 w-4 text-[#0d5d4f]">
      <path d="M8 1.5L9.2 5.8L13.5 7L9.2 8.2L8 12.5L6.8 8.2L2.5 7L6.8 5.8L8 1.5Z" fill="currentColor" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-label="arrow" className="h-5 w-5 text-white">
      <path d="M4.75 11H16.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11.25 6L16.25 11L11.25 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-label="star" className="h-4 w-4 text-[#0d5d4f]">
      <path d="M8 1.5L9.66 5.34L13.5 7L9.66 8.66L8 12.5L6.34 8.66L2.5 7L6.34 5.34L8 1.5Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f1f3f1] px-5 py-7 text-[#242f2b] md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <header className="flex items-center justify-between border-b border-[#dfe7e2] pb-4">
          <div className="flex items-center gap-3">
            <MinervaMark />
            <div className="text-[2.2rem] font-medium tracking-[-0.08em] text-[#1d2e2d]">minerva</div>
          </div>

          <nav className="flex items-center gap-8 text-[0.98rem] text-[#4d625f]">
            <button type="button" className="relative pb-2 font-medium text-[#1b2f2e] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-[#0d5d4f]">
              Cursos
            </button>
            <button type="button" className="font-medium text-[#3e5752]">Meu Aprendizado</button>
          </nav>

          <div className="flex items-center gap-4">
            <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe7e2] bg-white/60 text-[#1d2b2a]">
              <BellIcon />
            </button>
            <Show when="signed-out">
              <div className="flex items-center gap-3 text-[0.9rem]">
                <SignInButton>
                  <button type="button" className="font-medium text-[#3e5752] hover:text-[#0d5d4f]">
                    Entre
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button type="button" className="rounded-[8px] bg-[#0d5d4f] px-4 py-2 font-medium text-white transition-colors hover:bg-[#0b4d45]">
                    Cadastre-se
                  </button>
                </SignUpButton>
              </div>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </header>

        <section className="relative mt-7 overflow-hidden rounded-[30px] border border-[#dfe7e2] bg-[#edf3ef] px-5 py-10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)] md:px-10 lg:px-12">
          <div className="absolute -left-[18%] top-[58%] h-[620px] w-[620px] rounded-full bg-[#dfece7] opacity-80" />
          <div className="absolute -right-[12%] top-[48%] h-[620px] w-[620px] rounded-full bg-[#dfece7] opacity-80" />

          <div className="relative z-10 mx-auto max-w-[880px] text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#acc8bf] bg-[#eef4f0] px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#0d5d4f]">
              <SparkleIcon />
              <span>Aprendizado Inteligente</span>
            </div>

            <h1 className="mt-6 font-[Georgia,serif] text-[3.2rem] leading-[0.98] tracking-[-0.07em] text-[#1d2f2f] md:text-[5.1rem]">
              Encontre a sua aula.
              <span className="block">No idioma que preferir.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[720px] text-[1.1rem] leading-[1.6] text-[#526d69] md:text-[1.5rem]">
              Minerva entende o que você quer aprender e encontra as aulas exatas em todos os seus cursos.
            </p>

            <button
              type="button"
              className="mt-7 inline-flex items-center justify-center gap-3 rounded-[12px] bg-[#0d5d4f] px-7 py-4 text-[1.05rem] font-medium text-white shadow-[0_6px_18px_rgba(13,93,79,0.18)] transition-colors hover:bg-[#0b4d45]"
            >
              <span>Explore Cursos</span>
              <ArrowIcon />
            </button>
          </div>

          <div className="relative z-10 mx-auto mt-10 max-w-[1000px] rounded-[18px] border border-[#dfe7e2] bg-white px-5 py-4 shadow-[0_6px_16px_rgba(16,32,30,0.03)]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-[#445d5a]">
                <SearchIcon />
                <span className="text-[1.05rem] text-[#718782]">Pergunte sobre o seu aprendizado...</span>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-[#dfe7e2] bg-[#f3f7f4] text-[0.7rem] font-medium text-[#1d2d2a]">
                ⌘ K
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-center justify-between gap-4 border-b border-[#dfe7e2] pb-4">
            <h2 className="font-[Georgia,serif] text-[2.7rem] leading-none tracking-[-0.06em] text-[#1d2e2d]">Todos os cursos</h2>
            <button type="button" className="text-[1.05rem] font-medium text-[#1d2f2f]">
              Ver todos os cursos <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-3">
            {courses.map((course) => (
              <article key={course.name} className="rounded-[18px] border border-[#dfe7e2] bg-[#f7f7f4] p-5 shadow-[0_1px_0_rgba(18,27,25,0.02)]">
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-[12px] text-[2rem] font-semibold ${course.iconTone}`}>
                  {course.icon}
                </div>

                <h3 className="font-[Georgia,serif] text-[2.2rem] leading-[1.08] tracking-[-0.05em] text-[#1d2d2d]">
                  {course.name}
                </h3>

                <p className="mt-4 text-[1rem] leading-[1.6] text-[#566d69]">{course.description}</p>

                <div className="mt-6 flex items-center gap-3 border-t border-[#dfe7e2] pt-4 text-[0.78rem] text-[#536d68]">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#edf4f1] px-2 py-1 font-medium text-[#0d5d4f]">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#0d5d4f]" />
                    {course.level}
                  </span>
                  <span>{course.duration}</span>
                  <span>{course.modules}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 border-t border-[#dfe7e2] pt-6 text-[0.92rem] text-[#536d68]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf3ef] text-[#0d5d4f]">
              <StarIcon />
            </span>
            <span>Novos cursos e aulas adicionados toda semana.</span>
          </div>

          <div className="mt-8 h-28 overflow-hidden rounded-[18px] border border-[#dfe7e2] bg-[linear-gradient(180deg,#dfece7_0%,#edf4f0_100%)]">
            <div className="flex h-full items-end justify-between px-3 pb-0">
              {[48, 98, 80, 65, 120, 90, 70, 110, 58, 94, 76, 68, 130, 96, 84, 72, 106, 88, 75, 68].map((height, index) => (
                <div
                  key={index}
                  className="w-[4.5%] rounded-t-[10px] bg-[#d1e7df] opacity-85"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
