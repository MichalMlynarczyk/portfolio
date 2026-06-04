import novaDermPreview from '../images/image.png'
import engineeringPreview from '../images/image copy 13.png'

const CV_FILE = '/cv-michal-mlynarczyk.pdf'
const HOME_NAME_TEXT = 'Michał Młynarczyk'
const HOME_ROLE_TEXT = 'Informatyka • AI • Embedded Systems'
const HOME_DESCRIPTION_TEXT =
    'Tworzę aplikacje webowe, eksperymentuję z rozwiązaniami AI oraz interesuję się systemami embedded i automatyką.'
const HOME_SOCIAL_LINKS = [
    {
        label: 'GitHub',
        href: 'https://github.com/',
        icon: GitHubIcon,
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/',
        icon: LinkedInIcon,
    },
    {
        label: 'Email',
        href: 'mailto:mlymichal@gmail.com',
        icon: MailIcon,
    },
]
const PROJECT_SNIPPETS = [
    {
        title: 'AI Colorization',
        description:
            'Automatyczne kolorowanie obrazów czarno-białych z wykorzystaniem sieci CNN, U-Net oraz GAN.',
        category: 'Praca inżynierska',
        href: '/engineering-work',
        icon: GraduationCapIcon,
        preview: engineeringPreview,
        tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'GAN', 'U-Net'],
    },
    {
        title: 'NovaDerm',
        description:
            'Strona internetowa dla gabinetu depilacji laserowej z panelem CMS i konfiguracją Docker.',
        category: 'Projekt klienta',
        href: '/novaderm',
        icon: CodeIcon,
        preview: novaDermPreview,
        tags: ['React', 'Django', 'Tailwind', 'Docker'],
    },
    {
        title: 'BrainLift',
        description:
            'Aplikacja do nauki angielskiego przez OCR, AI, własne słowniki, fiszki i książki PDF.',
        category: 'Projekt własny',
        href: '/brainlift',
        icon: CodeIcon,
        previewType: 'brain',
        tags: ['React', 'Flask', 'OpenCV', 'OpenAI API'],
    },
]
const CONTACT_DETAILS = [
    {
        label: 'Imię i nazwisko',
        value: HOME_NAME_TEXT,
        icon: UserIcon,
    },
    {
        label: 'Lokalizacja',
        value: 'Nowy Sącz, Polska',
        icon: PinIcon,
    },
    {
        label: 'E-mail',
        value: 'mlymichal@gmail.com',
        icon: MailLineIcon,
    },
    {
        label: 'Dostępność',
        value: 'Dostępny do współpracy',
        icon: CheckSquareIcon,
    },
]
const CONTACT_BAR_ITEMS = [
    {
        label: 'Lokalizacja',
        value: 'Nowy Sącz, Polska',
        icon: PinIcon,
    },
    {
        label: 'E-mail',
        value: 'mlymichal@gmail.com',
        icon: MailLineIcon,
    },
    {
        label: 'Telefon',
        value: '696 545 529',
        icon: PhoneIcon,
    },
]
const EXPERIENCE_ITEMS = [
    {
        role: 'Automatyk',
        company: 'PLK Nowy Sącz',
        period: '2020 - 2024',
        tasks: [
            'Diagnostyka i utrzymanie systemów technicznych',
            'Rozwiązywanie problemów w środowisku przemysłowym',
            'Praca z dokumentacją techniczną',
        ],
    },
    {
        role: 'Technik turbin wiatrowych',
        company: 'RES Energy',
        period: '2024 - 2025',
        tasks: [
            'Serwis i diagnostyka turbin wiatrowych',
            'Praca w środowisku technicznym o wysokiej odpowiedzialności',
        ],
    },
]
const SKILL_GROUPS = [
    {
        title: 'Frontend',
        icon: SlidersIcon,
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
    {
        title: 'Backend',
        icon: LinkIcon,
        skills: ['Python', 'Django', 'Flask', 'REST API'],
    },
    {
        title: 'AI / Data',
        icon: BoxesIcon,
        skills: ['TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
    },
    {
        title: 'DevOps',
        icon: TextIcon,
        skills: ['Docker', 'Linux', 'Git'],
    },
]
const ABOUT_STATS = [
    {
        value: '4+ lata',
        label: 'doświadczenia zawodowego',
        icon: CalendarIcon,
    },
    {
        value: '5+',
        label: 'projektów własnych',
        icon: CodeIcon,
    },
    {
        value: 'AI & ML',
        label: 'doświadczenie w uczeniu maszynowym',
        icon: BrainIcon,
    },
    {
        value: 'Inżynier',
        label: 'dyplom Politechniki Krakowskiej',
        icon: GraduationCapIcon,
    },
]

export function HomePage(){
    return(
        <main className="min-h-screen bg-[#061018] text-slate-100">
            <div className="relative isolate overflow-hidden">
                <BackgroundLines />
                <SiteHeader />
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </div>
        </main>
    )
}

function SiteHeader(){
    const navItems = [
        { label: 'Projekty', href: '#projects' },
        { label: 'O mnie', href: '#about' },
        { label: 'Umiejętności', href: '#skills' },
        { label: 'Kontakt', href: '#contact' },
    ]

    return(
        <header className="sticky top-0 z-30 border-b border-cyan-200/10 bg-[#061018]/88 px-5 backdrop-blur-xl sm:px-6">
            <nav className="mx-auto flex h-[4.35rem] w-full max-w-6xl items-center justify-between">
                <a
                    href="/"
                    className="group inline-flex items-center gap-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-4 focus:ring-offset-[#061018]"
                    aria-label="Strona główna"
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-cyan-300/70 bg-cyan-300/10 text-sm font-bold text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.16)]">
                        MM
                    </span>
                    <span className="text-sm font-bold text-white transition group-hover:text-cyan-200 sm:text-base">
                        {HOME_NAME_TEXT}
                    </span>
                </a>

                <div className="hidden items-center gap-10 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-semibold text-slate-300 transition hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-4 focus:ring-offset-[#061018]"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )
}

function HeroSection(){
    return(
        <section className="relative px-5 pb-8 pt-14 sm:px-6 sm:pt-20 lg:pb-10 lg:pt-24">
            <div className="mx-auto grid min-h-[36rem] w-full max-w-6xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                <div className="relative z-10 max-w-2xl">
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-300">
                        {HOME_ROLE_TEXT}
                    </p>
                    <h1 className="mt-7 text-5xl font-extrabold leading-[1.04] text-white sm:text-6xl lg:text-[4.65rem]">
                        Cześć, jestem
                        <span className="mt-2 block text-cyan-300">{HOME_NAME_TEXT}</span>
                    </h1>
                    <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                        {HOME_DESCRIPTION_TEXT}
                    </p>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#projects"
                            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-cyan-300 px-6 text-sm font-extrabold text-[#061018] shadow-[0_18px_42px_rgba(34,211,238,0.24)] transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-[#061018]"
                        >
                            Zobacz projekty
                            <ArrowRightIcon />
                        </a>
                        <a
                            href={CV_FILE}
                            download
                            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-slate-500/70 px-6 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-[#061018]"
                        >
                            Pobierz CV
                            <DownloadIcon />
                        </a>
                    </div>

                    <div className="mt-9 flex items-center gap-4">
                        {HOME_SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-900/70 text-slate-300 ring-1 ring-cyan-100/10 transition hover:-translate-y-0.5 hover:text-cyan-200 hover:ring-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-[#061018]"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                <TechLinesVisual />
            </div>
        </section>
    )
}

function TechLinesVisual(){
    return(
        <div className="relative hidden min-h-[34rem] w-full lg:block" aria-hidden="true">
            <div className="absolute left-4 top-0 h-px w-[33rem] bg-cyan-100/10" />
            <div className="absolute left-4 top-0 h-[25rem] w-px -rotate-45 origin-top bg-cyan-100/10" />
            <div className="absolute bottom-28 left-0 h-px w-[27rem] bg-cyan-100/10" />
            <div className="absolute bottom-28 left-[27rem] h-[10rem] w-px rotate-45 origin-top bg-cyan-100/10" />
            <div className="absolute right-12 top-10 h-[31rem] w-px bg-cyan-100/10" />
            <div className="absolute right-12 top-10 h-[20rem] w-px rotate-45 origin-top bg-cyan-100/10" />

            <div className="absolute right-56 top-28 h-40 w-40 border border-cyan-300/15" />
            <div className="absolute right-44 top-48 h-72 w-px rotate-45 bg-cyan-300/20" />
            <div className="absolute bottom-24 right-32 h-px w-44 bg-cyan-300/22" />
            <div className="absolute bottom-[5.85rem] right-32 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.8)]" />
        </div>
    )
}

function ProjectsSection(){
    return(
        <section id="projects" className="px-5 py-3 sm:px-6">
            <div className="mx-auto w-full max-w-6xl rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.24)] backdrop-blur sm:p-8">
                <div className="flex items-center gap-3">
                    <FolderIcon />
                    <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                        Projekty
                    </h2>
                </div>

                <div className="mt-6 grid gap-5 lg:grid-cols-3">
                    {PROJECT_SNIPPETS.map((project) => (
                        <ProjectSnippetCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ProjectSnippetCard({ project }){
    return(
        <article className="group flex min-h-[20rem] flex-col rounded-lg border border-cyan-100/10 bg-slate-950/30 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-slate-950/42">
            <ProjectPreview project={project} />

            <h3 className="mt-5 text-xl font-extrabold leading-tight text-white">
                {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
                {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-md bg-slate-800/80 px-3 py-1.5 text-xs font-bold text-slate-300 ring-1 ring-cyan-100/5"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <a
                href={project.href}
                className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-extrabold text-cyan-300 transition group-hover:gap-3 group-hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-[#061018]"
            >
                Zobacz szczegóły
                <ArrowRightIcon />
            </a>
        </article>
    )
}

function ProjectPreview({ project }){
    if (project.preview) {
        return(
            <div className="relative grid h-28 overflow-hidden rounded-md bg-slate-900 sm:h-32">
                <img
                    src={project.preview}
                    alt={`Miniatura projektu ${project.title}`}
                    className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/10 to-slate-950/35" />
                <p className="absolute right-4 top-4 max-w-24 text-right text-sm font-bold leading-5 text-white/85">
                    {project.category}
                </p>
            </div>
        )
    }

    if (project.previewType === 'brain') {
        return(
            <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-md bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.34),transparent_28%),linear-gradient(135deg,#06202b,#0b3450_52%,#061018)] sm:h-32">
                <BrainIcon sizeClassName="h-16 w-16" />
                <p className="absolute right-4 top-4 max-w-20 text-right text-sm font-bold leading-5 text-white/80">
                    {project.category}
                </p>
            </div>
        )
    }

    return(
        <div className="relative h-28 overflow-hidden rounded-md bg-[linear-gradient(135deg,#082433,#0d3442_45%,#061018)] p-4 sm:h-32">
            <div className="grid h-full grid-cols-3 gap-2">
                <div className="rounded bg-cyan-300/20" />
                <div className="rounded bg-emerald-300/20" />
                <div className="rounded bg-sky-300/20" />
                <div className="col-span-2 rounded bg-cyan-300/14" />
                <div className="rounded bg-cyan-300/28" />
            </div>
            <p className="absolute right-4 top-4 max-w-24 text-right text-sm font-bold leading-5 text-white/80">
                {project.category}
            </p>
        </div>
    )
}

function AboutSection(){
    return(
        <section id="about" className="px-5 py-3 sm:px-6">
            <div className="mx-auto w-full max-w-6xl rounded-lg border border-cyan-100/10 bg-slate-950/24 shadow-[0_28px_80px_rgba(0,0,0,0.26)] backdrop-blur">
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-9">
                    <div>
                        <div className="flex items-center gap-3">
                            <UserIcon />
                            <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                                O mnie
                            </h2>
                        </div>
                        <p className="mt-6 text-base leading-8 text-slate-300">
                            Jestem absolwentem Informatyki w Inżynierii Komputerowej
                            na Politechnice Krakowskiej. Łączę doświadczenie zdobyte
                            w automatyce przemysłowej z programowaniem aplikacji
                            webowych oraz rozwiązaniami opartymi o sztuczną
                            inteligencję.
                        </p>
                        <p className="mt-5 text-base leading-8 text-slate-300">
                            Przez ponad 4 lata pracowałem jako automatyk, dzięki
                            czemu nauczyłem się rozwiązywania problemów technicznych,
                            analitycznego myślenia i pracy z rzeczywistymi systemami.
                            Obecnie rozwijam się w kierunku full-stack developmentu,
                            systemów embedded oraz machine learningu.
                        </p>
                        <p className="mt-5 text-base leading-8 text-slate-300">
                            W pracy inżynierskiej zajmowałem się automatycznym
                            kolorowaniem obrazów przy użyciu TensorFlow i Keras,
                            porównując różne architektury głębokiego uczenia oraz ich
                            wpływ na jakość generowanych wyników.
                        </p>
                    </div>

                    <div className="grid overflow-hidden rounded-lg border border-cyan-100/10 bg-slate-950/22 sm:grid-cols-2">
                        {ABOUT_STATS.map((stat) => {
                            const Icon = stat.icon

                            return(
                                <article key={stat.value} className="border-cyan-100/10 p-6 odd:border-r even:border-r-0 sm:border-b sm:[&:nth-child(n+3)]:border-b-0">
                                    <Icon />
                                    <p className="mt-4 text-2xl font-extrabold text-white">
                                        {stat.value}
                                    </p>
                                    <p className="mt-2 text-sm leading-6 text-slate-400">
                                        {stat.label}
                                    </p>
                                </article>
                            )
                        })}
                    </div>
                </div>

                <div className="border-t border-cyan-100/10 p-6 sm:p-8 lg:p-9">
                    <ExperienceSection />
                    <EducationStrip />
                </div>
            </div>
        </section>
    )
}

function ExperienceSection(){
    return(
        <section>
            <div className="flex items-center gap-3">
                <BriefcaseIcon />
                <h3 className="text-2xl font-extrabold text-white">
                    Doświadczenie zawodowe
                </h3>
            </div>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
                {EXPERIENCE_ITEMS.map((item) => (
                    <article
                        key={`${item.role}-${item.company}`}
                        className="grid gap-5 rounded-lg border border-cyan-100/10 bg-slate-950/30 p-5 backdrop-blur sm:grid-cols-[4.5rem_1fr] sm:p-6"
                    >
                        <p className="whitespace-pre-line text-lg font-extrabold leading-7 text-cyan-300">
                            {item.period.replace(' - ', ' -\n')}
                        </p>
                        <div>
                            <h4 className="text-lg font-extrabold text-white">
                                {item.role}
                            </h4>
                            <p className="mt-1 text-sm font-bold text-cyan-300">
                                {item.company}
                            </p>
                            <ul className="mt-4 space-y-2.5">
                                {item.tasks.map((task) => (
                                    <li key={task} className="flex gap-3 text-sm leading-6 text-slate-300">
                                        <CheckIcon />
                                        <span>{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

function EducationStrip(){
    return(
        <article className="mt-5 grid gap-5 rounded-lg border border-cyan-100/10 bg-slate-950/30 p-5 backdrop-blur sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10">
                <GraduationCapIcon />
            </div>
            <div>
                <p className="text-sm font-extrabold leading-6 text-cyan-300">
                    2020 - 2025
                </p>
                <h3 className="mt-1 text-lg font-extrabold text-white">
                    Inżynier: Informatyka w inżynierii komputerowej
                </h3>
                <p className="mt-1 text-sm font-bold text-cyan-300">
                    Politechnika Krakowska
                </p>
            </div>
            <p className="w-fit rounded-md bg-slate-800/80 px-3 py-1.5 text-xs font-extrabold text-slate-300 ring-1 ring-cyan-100/5">
                Specjalizacja: Inżynieria oprogramowania
            </p>
        </article>
    )
}

function SkillsSection(){
    return(
        <section id="skills" className="px-5 py-3 sm:px-6">
            <div className="mx-auto w-full max-w-6xl rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur sm:p-8">
                <div className="flex items-center gap-3">
                    <CodeIcon />
                    <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                        Umiejętności
                    </h2>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {SKILL_GROUPS.map((group) => (
                        <SkillCard key={group.title} group={group} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function SkillCard({ group }){
    const Icon = group.icon

    return(
        <article className="rounded-lg border border-cyan-100/10 bg-slate-950/30 p-5 backdrop-blur">
            <Icon />
            <h4 className="mt-5 text-sm font-extrabold text-cyan-300">
                {group.title}
            </h4>
            <ul className="mt-4 space-y-3">
                {group.skills.map((skill) => (
                    <li key={skill} className="flex gap-3 text-sm font-semibold text-slate-300">
                        <CheckIcon />
                        <span>{skill}</span>
                    </li>
                ))}
            </ul>
        </article>
    )
}

function ContactSection(){
    return(
        <section id="contact" className="px-5 pb-10 pt-3 sm:px-6">
            <div className="mx-auto grid w-full max-w-6xl gap-6 rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.24)] backdrop-blur sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10">
                        <SendIcon />
                    </div>
                    <div>
                        <h2 className="text-xl font-extrabold text-white">
                            Masz pomysł na projekt?
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-cyan-300">
                            Chętnie nawiążę współpracę.
                        </p>
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    {CONTACT_BAR_ITEMS.map((item) => {
                        const Icon = item.icon

                        return(
                            <div key={item.label} className="flex gap-3">
                                <Icon />
                                <div>
                                    <p className="text-xs font-bold text-slate-400">
                                        {item.label}
                                    </p>
                                    <p className="mt-1 text-sm font-bold text-cyan-300">
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function BackgroundLines(){
    return(
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#05101a_0%,#07131d_48%,#05101a_100%)]" />
            <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(103,232,249,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.10)_1px,transparent_1px)] [background-size:96px_96px]" />
            <div className="absolute left-0 top-[4.35rem] h-px w-full bg-cyan-200/10" />
            <div className="absolute left-[31%] top-[4.35rem] h-[25rem] w-px -rotate-45 origin-top bg-cyan-200/10" />
            <div className="absolute left-[42%] top-[30rem] h-px w-[29rem] bg-cyan-200/10" />
            <div className="absolute right-[5%] top-[7.5rem] h-[42rem] w-px bg-cyan-200/10" />
        </div>
    )
}

function GitHubIcon(){
    return(
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.78 0 .27.18.59.69.49A10.19 10.19 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
        </svg>
    )
}

function LinkedInIcon(){
    return(
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.94 8.9H3.65v10.47h3.29V8.9ZM5.3 4a1.91 1.91 0 1 0 0 3.82A1.91 1.91 0 0 0 5.3 4Zm13.42 4.66c-1.57 0-2.55.86-2.97 1.46V8.9h-3.15v10.47h3.29v-5.18c0-1.37.26-2.69 1.96-2.69 1.66 0 1.68 1.56 1.68 2.78v5.09h3.29v-5.74c0-2.82-.61-4.97-3.89-4.97h-.21ZM10.74 8.9H7.45v10.47h3.29V8.9Z" />
        </svg>
    )
}

function MailIcon(){
    return(
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
            <path d="m22 8-10 6L2 8" />
        </svg>
    )
}

function ArrowRightIcon(){
    return(
        <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}

function DownloadIcon(){
    return(
        <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v12" />
            <path d="m7 10 5 5 5-5" />
            <path d="M5 21h14" />
        </svg>
    )
}

function CodeIcon(){
    return(
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m8 9-4 3 4 3" />
            <path d="m16 9 4 3-4 3" />
        </svg>
    )
}

function CalendarIcon(){
    return(
        <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <path d="M3 10h18" />
            <path d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        </svg>
    )
}

function GraduationCapIcon(){
    return(
        <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10 12 5 2 10l10 5 10-5Z" />
            <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
        </svg>
    )
}

function BrainIcon({ sizeClassName = 'h-5 w-5' } = {}){
    return(
        <svg aria-hidden="true" className={`${sizeClassName} shrink-0 text-cyan-300`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6.5A3.5 3.5 0 0 1 11.5 3H12v18h-.5A3.5 3.5 0 0 1 8 17.5" />
            <path d="M16 6.5A3.5 3.5 0 0 0 12.5 3H12v18h.5a3.5 3.5 0 0 0 3.5-3.5" />
            <path d="M8 6.5A3.5 3.5 0 0 0 5.5 12 3.5 3.5 0 0 0 8 17.5" />
            <path d="M16 6.5A3.5 3.5 0 0 1 18.5 12 3.5 3.5 0 0 1 16 17.5" />
            <path d="M8 12h8" />
            <path d="M12 7h2" />
            <path d="M10 17h2" />
        </svg>
    )
}

function UserIcon(){
    return(
        <svg aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21a8 8 0 0 0-16 0" />
            <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        </svg>
    )
}

function BriefcaseIcon(){
    return(
        <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
            <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="M3 13h18" />
            <path d="M9 13v2h6v-2" />
        </svg>
    )
}

function FolderIcon(){
    return(
        <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
        </svg>
    )
}

function PinIcon(){
    return(
        <svg aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 4.99-5.54 10.19-7.38 11.63a1 1 0 0 1-1.24 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0Z" />
            <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
    )
}

function PhoneIcon(){
    return(
        <svg aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.8a2 2 0 0 1-.45 2.11L8.05 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.31 1.84.53 2.8.66A2 2 0 0 1 22 16.92Z" />
        </svg>
    )
}

function MailLineIcon(){
    return(
        <svg aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
            <path d="m22 8-10 6L2 8" />
        </svg>
    )
}

function SendIcon(){
    return(
        <svg aria-hidden="true" className="h-7 w-7 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 2-7 20-4-9-9-4 20-7Z" />
            <path d="M22 2 11 13" />
        </svg>
    )
}

function CheckSquareIcon(){
    return(
        <svg aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
    )
}

function SlidersIcon(){
    return(
        <svg aria-hidden="true" className="h-6 w-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 21v-7" />
            <path d="M4 10V3" />
            <path d="M12 21v-9" />
            <path d="M12 8V3" />
            <path d="M20 21v-5" />
            <path d="M20 12V3" />
            <path d="M2 14h4" />
            <path d="M10 8h4" />
            <path d="M18 16h4" />
        </svg>
    )
}

function LinkIcon(){
    return(
        <svg aria-hidden="true" className="h-6 w-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    )
}

function BoxesIcon(){
    return(
        <svg aria-hidden="true" className="h-6 w-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.97 12.92 12 17.9l9.03-4.98" />
            <path d="M2.97 17.92 12 22l9.03-4.08" />
            <path d="M12 2 2.97 7.08 12 12l9.03-4.92L12 2Z" />
        </svg>
    )
}

function TextIcon(){
    return(
        <svg aria-hidden="true" className="h-6 w-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 7V4h16v3" />
            <path d="M9 20h6" />
            <path d="M12 4v16" />
        </svg>
    )
}

function CheckIcon(){
    return(
        <svg aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}
