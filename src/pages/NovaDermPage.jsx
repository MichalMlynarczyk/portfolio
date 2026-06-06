import homeScreen from '../images/image.png'
import blogScreen from '../images/image copy.png'
import contactScreen from '../images/image copy 2.png'
import reviewsScreen from '../images/image copy 3.png'
import mobileScreen from '../images/image copy 4.png'
import { LanguageSwitch } from '../components/LanguageSwitch.jsx'

const PROFILE_NAME = 'Michał Młynarczyk'
const NOVADERM_PREVIEW_URL = 'http://72.62.117.246:5173/home'
const NOVADERM_STACK = ['React', 'Vite', 'React Router', 'Tailwind CSS', 'Django', 'Docker']
const NOVADERM_STATUS_FEATURES = [
    'Dynamiczna strona główna zarządzana przez CMS',
    'Panel administracyjny do edycji treści',
    'Moduł oferty i cennika z kategoriami zabiegów',
    'Blog z kategoriami, artykułami i powiązanymi wpisami',
    'Formularz kontaktowy z zapisem zgłoszeń',
    'Widgety społecznościowe i opinie klientek',
    'Konfiguracja Docker Compose dla frontendu i backendu',
    'Mapa, dane kontaktowe oraz sekcja CTA',
]
const PROCESS_STEPS = [
    'Analiza potrzeb klienta i przygotowanie struktury strony',
    'Projekt UI/UX oraz wdrożenie responsywnego frontendu w React + Tailwind',
    'Integracja panelu CMS oraz stworzenie modeli treści',
    'Konfiguracja środowiska Docker i wdrożenie wersji podglądowej',
]
const SCREENSHOTS = [
    {
        title: 'Strona główna',
        image: homeScreen,
    },
    {
        title: 'Blog',
        image: blogScreen,
    },
    {
        title: 'Kontakt',
        image: contactScreen,
    },
    {
        title: 'Opinie klientek',
        image: reviewsScreen,
    },
]
const NOVADERM_EN = {
    nav: ['Projects', 'About', 'Skills', 'Contact'],
    homeAria: 'Home page',
    back: 'Back to projects',
    category: 'Client project',
    summary: 'Website for a laser hair removal studio with a CMS panel and Docker configuration.',
    intro: 'A responsive website/application prepared for a studio specializing in laser hair removal. The project combines an elegant user interface with a CMS backend, API, blog, pricing, and contact form.',
    preview: 'View project preview',
    statusTitle: 'Project ready as a preview version',
    statusText: 'The project has not yet been published in its final form on the client side, so below I show a working preview and selected screens from the current version.',
    features: [
        'Dynamic home page managed through a CMS',
        'Admin panel for editing content',
        'Offer and pricing module with treatment categories',
        'Blog with categories, articles, and related posts',
        'Contact form with saved submissions',
        'Social widgets and client reviews',
        'Docker Compose configuration for frontend and backend',
        'Map, contact details, and CTA section',
    ],
    technologies: 'Technologies',
    descriptionTitle: 'Project description',
    paragraphs: [
        'NovaDerm is a website for a laser hair removal studio, designed to present the offer elegantly and build trust in the brand. The home page uses beauty-industry aesthetics: a bright background, elegant photos, subtle animations, and clear CTAs leading to pricing or booking.',
        'The CMS backend makes it easy to manage content, the blog, the offer, pricing, and contact forms.',
    ],
    processTitle: 'Delivery process',
    process: [
        'Client needs analysis and preparation of the site structure',
        'UI/UX design and implementation of a responsive React + Tailwind frontend',
        'CMS integration and creation of content models',
        'Docker environment configuration and preview deployment',
    ],
    screensTitle: 'Selected screens',
    screens: ['Home page', 'Blog', 'Contact', 'Client reviews'],
    screenAlt: 'NovaDerm project screen',
    info: 'Full access to the admin panel and all subpages is available in the preview version.',
    previous: 'Previous project',
    next: 'Next project',
}

export function NovaDermPage({ language, onLanguageChange }){
    const isEnglish = language === 'en'

    return(
        <main className="min-h-screen bg-[#061018] text-slate-100">
            <div className="relative isolate overflow-hidden">
                <BackgroundLines />
                <SiteHeader language={language} onLanguageChange={onLanguageChange} isEnglish={isEnglish} />
                <HeroSection isEnglish={isEnglish} />
                <StatusSection isEnglish={isEnglish} />
                <TechnologySection isEnglish={isEnglish} />
                <DetailsSection isEnglish={isEnglish} />
                <ProjectNavigation isEnglish={isEnglish} />
            </div>
        </main>
    )
}

function SiteHeader({ language, onLanguageChange, isEnglish }){
    const labels = isEnglish ? NOVADERM_EN.nav : ['Projekty', 'O mnie', 'Umiejętności', 'Kontakt']
    const navItems = [
        { label: labels[0], href: '/#projects', isActive: true },
        { label: labels[1], href: '/#about' },
        { label: labels[2], href: '/#skills' },
        { label: labels[3], href: '/#contact' },
    ]

    return(
        <header className="sticky top-0 z-30 border-b border-cyan-200/10 bg-[#061018]/86 px-5 backdrop-blur-xl sm:px-6">
            <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between">
                <a
                    href="/"
                    className="group inline-flex items-center gap-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-4 focus:ring-offset-[#061018]"
                    aria-label={isEnglish ? NOVADERM_EN.homeAria : 'Strona główna'}
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-cyan-300/70 bg-cyan-300/10 text-sm font-bold text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.16)]">
                        MM
                    </span>
                    <span className="text-sm font-bold text-white transition group-hover:text-cyan-200 sm:text-base">
                        {PROFILE_NAME}
                    </span>
                </a>

                <div className="hidden items-center gap-10 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`border-b-2 pb-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-4 focus:ring-offset-[#061018] ${
                                item.isActive
                                    ? 'border-cyan-300 text-cyan-300'
                                    : 'border-transparent text-slate-300 hover:text-cyan-200'
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
                <LanguageSwitch language={language} onLanguageChange={onLanguageChange} />
            </nav>
        </header>
    )
}

function HeroSection({ isEnglish }){
    return(
        <section className="px-5 pb-8 pt-12 sm:px-6 sm:pt-16 lg:pb-12 lg:pt-20">
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
                <div>
                    <a
                        href="/#projects"
                        className="inline-flex items-center gap-3 text-sm font-bold text-slate-300 transition hover:gap-4 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-[#061018]"
                    >
                        <ArrowLeftIcon />
                        {isEnglish ? NOVADERM_EN.back : 'Wróć do projektów'}
                    </a>

                    <p className="mt-12 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                        {isEnglish ? NOVADERM_EN.category : 'Projekt dla klienta'}
                    </p>
                    <h1 className="mt-5 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
                        NovaDerm
                    </h1>
                    <p className="mt-6 max-w-xl text-xl font-semibold leading-8 text-slate-200">
                        {isEnglish ? NOVADERM_EN.summary : 'Strona internetowa dla gabinetu depilacji laserowej z panelem CMS i konfiguracją Docker.'}
                    </p>
                    <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
                        {isEnglish ? NOVADERM_EN.intro : 'Responsywna strona/aplikacja przygotowana dla gabinetu specjalizującego się w depilacji laserowej. Projekt łączy elegancki interfejs użytkownika z zapleczem CMS, API, blogiem, cennikiem i formularzem kontaktowym.'}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2.5">
                        {NOVADERM_STACK.map((item) => (
                            <span
                                key={item}
                                className="rounded-md bg-slate-800/80 px-3 py-1.5 text-xs font-bold text-slate-300 ring-1 ring-cyan-100/5"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="mt-9 flex">
                        <a
                            href={NOVADERM_PREVIEW_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-cyan-300 px-6 text-sm font-extrabold text-[#061018] shadow-[0_18px_42px_rgba(34,211,238,0.24)] transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-[#061018]"
                        >
                            {isEnglish ? NOVADERM_EN.preview : 'Zobacz podgląd projektu'}
                            <ExternalLinkIcon />
                        </a>
                    </div>
                </div>

                <DevicePreview />
            </div>
        </section>
    )
}

function DevicePreview(){
    return(
        <div className="relative mx-auto w-full max-w-3xl pt-4">
            <div className="absolute inset-x-10 bottom-4 h-24 rounded-full bg-cyan-300/14 blur-3xl" />
            <div className="relative mx-auto w-[92%] rounded-t-2xl border border-slate-600 bg-slate-900 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="overflow-hidden rounded-lg bg-slate-800">
                    <img
                        src={homeScreen}
                        alt="Podgląd strony głównej projektu NovaDerm"
                        className="aspect-[16/9] w-full object-cover object-top"
                    />
                </div>
            </div>
            <div className="relative mx-auto h-3 w-[98%] rounded-b-full bg-slate-700 shadow-[0_18px_36px_rgba(0,0,0,0.35)]" />
            <div className="absolute bottom-0 right-0 w-[28%] rounded-[1.8rem] border border-slate-500 bg-slate-950 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.5)] sm:right-3">
                <div className="overflow-hidden rounded-[1.25rem] bg-slate-800">
                    <img
                        src={mobileScreen}
                        alt="Mobilny podgląd projektu NovaDerm"
                        className="aspect-[9/16] w-full object-cover object-top"
                    />
                </div>
            </div>
        </div>
    )
}

function StatusSection({ isEnglish }){
    const features = isEnglish ? NOVADERM_EN.features : NOVADERM_STATUS_FEATURES

    return(
        <section className="px-5 py-3 sm:px-6">
            <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur sm:p-8 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                        Status
                    </p>
                    <h2 className="mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                        {isEnglish ? NOVADERM_EN.statusTitle : 'Projekt gotowy jako wersja podglądowa'}
                    </h2>
                    <p className="mt-6 text-base leading-8 text-slate-400">
                        {isEnglish ? NOVADERM_EN.statusText : 'Projekt nie został jeszcze opublikowany w finalnej formie po stronie klienta, dlatego poniżej pokazuję działający podgląd oraz wybrane ekrany obecnej wersji.'}
                    </p>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2">
                    {features.map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-300">
                            <CheckIcon />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

function TechnologySection({ isEnglish }){
    const icons = [ReactIcon, ViteIcon, TypeScriptIcon, TailwindIcon, DjangoIcon, DockerIcon]

    return(
        <section className="px-5 py-3 sm:px-6">
            <div className="mx-auto w-full max-w-6xl rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                    {isEnglish ? NOVADERM_EN.technologies : 'Technologie'}
                </p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                    {NOVADERM_STACK.map((technology, index) => {
                        const Icon = icons[index]

                        return(
                            <div key={technology} className="flex items-center gap-3">
                                <Icon />
                                <span className="text-sm font-extrabold text-white">
                                    {technology}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function DetailsSection({ isEnglish }){
    const processSteps = isEnglish ? NOVADERM_EN.process : PROCESS_STEPS
    const screenTitles = isEnglish ? NOVADERM_EN.screens : SCREENSHOTS.map((screen) => screen.title)
    const screenshots = SCREENSHOTS.map((screen, index) => ({
        ...screen,
        title: screenTitles[index],
    }))

    return(
        <section className="px-5 py-3 sm:px-6">
            <div className="mx-auto w-full max-w-6xl rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur sm:p-8">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                            {isEnglish ? NOVADERM_EN.descriptionTitle : 'Opis projektu'}
                        </p>
                        <p className="mt-7 text-base leading-8 text-slate-300">
                            {isEnglish ? NOVADERM_EN.paragraphs[0] : 'NovaDerm to strona internetowa dla gabinetu depilacji laserowej, zaprojektowana z myślą o eleganckiej prezentacji oferty i budowaniu zaufania do marki. Strona główna wykorzystuje estetykę branży beauty: jasne tło, eleganckie zdjęcia, delikatne animacje oraz czytelne CTA prowadzące do cennika lub rezerwacji.'}
                        </p>
                        <p className="mt-5 text-base leading-8 text-slate-300">
                            {isEnglish ? NOVADERM_EN.paragraphs[1] : 'Zaplecze CMS umożliwia łatwe zarządzanie treściami, blogiem, ofertą, cennikiem i formularzami kontaktowymi.'}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                            {isEnglish ? NOVADERM_EN.processTitle : 'Proces realizacji'}
                        </p>
                        <ol className="mt-7 space-y-6">
                            {processSteps.map((step, index) => (
                                <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-4">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300 text-xs font-extrabold text-cyan-300">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="pt-1 text-sm leading-6 text-slate-300">
                                        {step}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className="mt-12">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                        {isEnglish ? NOVADERM_EN.screensTitle : 'Wybrane ekrany'}
                    </p>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {screenshots.map((screen) => (
                            <figure key={screen.title}>
                                <div className="overflow-hidden rounded-md border border-cyan-100/10 bg-slate-900">
                                    <img
                                        src={screen.image}
                                        alt={`${isEnglish ? NOVADERM_EN.screenAlt : 'Ekran projektu NovaDerm'} - ${screen.title}`}
                                        className="aspect-[16/10] w-full object-cover object-top transition duration-500 hover:scale-105"
                                    />
                                </div>
                                <figcaption className="mt-4 text-center text-sm font-semibold text-slate-200">
                                    {screen.title}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                    <p className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 text-center text-sm leading-6 text-slate-400">
                        <InfoIcon />
                        {isEnglish ? NOVADERM_EN.info : 'Pełen dostęp do panelu administracyjnego oraz wszystkie podstrony dostępne w wersji podglądowej.'}
                    </p>
                </div>
            </div>
        </section>
    )
}

function ProjectNavigation({ isEnglish }){
    return(
        <section className="px-5 pb-10 pt-3 sm:px-6">
            <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-2">
                <a
                    href="/brainlift"
                    className="group rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 transition hover:border-cyan-300/45 hover:bg-slate-950/36"
                >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/40 text-cyan-300 transition group-hover:-translate-x-1">
                        <ArrowLeftIcon />
                    </span>
                    <p className="mt-5 text-sm font-bold text-cyan-300">
                        {isEnglish ? NOVADERM_EN.previous : 'Poprzedni projekt'}
                    </p>
                    <p className="mt-1 text-lg font-bold text-white">
                        BrainLift
                    </p>
                </a>
                <a
                    href="/engineering-work"
                    className="group rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 text-right transition hover:border-cyan-300/45 hover:bg-slate-950/36"
                >
                    <span className="ml-auto flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/40 text-cyan-300 transition group-hover:translate-x-1">
                        <ArrowRightIcon />
                    </span>
                    <p className="mt-5 text-sm font-bold text-cyan-300">
                        {isEnglish ? NOVADERM_EN.next : 'Następny projekt'}
                    </p>
                    <p className="mt-1 text-lg font-bold text-white">
                        AI Colorization
                    </p>
                </a>
            </div>
        </section>
    )
}

function BackgroundLines(){
    return(
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(34,211,238,0.16),transparent_25%),radial-gradient(circle_at_12%_76%,rgba(20,184,166,0.09),transparent_28%),linear-gradient(180deg,#061018_0%,#07141c_52%,#061018_100%)]" />
            <div className="absolute left-0 top-20 h-px w-full bg-cyan-200/10" />
            <div className="absolute left-[12%] top-36 h-px w-[46rem] rotate-45 bg-cyan-200/10" />
            <div className="absolute right-[8%] top-28 h-[34rem] w-px bg-cyan-200/10" />
            <div className="absolute right-[4%] top-48 h-px w-[30rem] -rotate-45 bg-cyan-200/10" />
            <div className="absolute left-[30%] top-[35rem] h-px w-[30rem] bg-cyan-200/10" />
        </div>
    )
}

function ArrowLeftIcon(){
    return(
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
        </svg>
    )
}

function ArrowRightIcon(){
    return(
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}

function ExternalLinkIcon(){
    return(
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
    )
}

function CheckIcon(){
    return(
        <svg aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}

function InfoIcon(){
    return(
        <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    )
}

function ReactIcon(){
    return(
        <svg aria-hidden="true" className="h-7 w-7 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <ellipse cx="12" cy="12" rx="9" ry="3.8" />
            <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
    )
}

function ViteIcon(){
    return(
        <svg aria-hidden="true" className="h-7 w-7 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 3 12 21 20 3 14 5l-2 6-2-6-6-2Z" />
            <path d="m12 11 2 2-2 2-2-2 2-2Z" />
        </svg>
    )
}

function TypeScriptIcon(){
    return(
        <svg aria-hidden="true" className="h-7 w-7 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16v16H4z" />
            <path d="M8 9h7" />
            <path d="M11.5 9v8" />
            <path d="M16 16.5c.7.4 2 .6 2-.6 0-1.8-3-1.1-3-3 0-1.3 1.6-1.7 3-.9" />
        </svg>
    )
}

function TailwindIcon(){
    return(
        <svg aria-hidden="true" className="h-7 w-7 text-cyan-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.34C13.38 10.82 14.5 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.34C15.62 7.18 14.5 6 12 6Zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.34C8.38 16.82 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.34C10.62 13.18 9.5 12 7 12Z" />
        </svg>
    )
}

function DjangoIcon(){
    return(
        <svg aria-hidden="true" className="h-7 w-7 text-cyan-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.5 4h3v13.2c-1.42.27-2.49.4-3.2.4-3.03 0-4.55-1.36-4.55-4.09 0-1.32.4-2.39 1.2-3.21.8-.82 1.85-1.23 3.15-1.23.2 0 .34.01.4.03V4Zm0 7.53a2.4 2.4 0 0 0-.53-.05c-.66 0-1.17.18-1.53.55-.36.37-.54.87-.54 1.51 0 1.26.68 1.89 2.04 1.89.15 0 .34-.02.56-.05v-3.85ZM17.3 9.2h3v7.15c0 2.47-.18 4.1-.54 4.88-.33.72-.97 1.3-1.92 1.73l-2.78-1.31c.95-.44 1.58-.94 1.88-1.51.24-.49.36-1.55.36-3.19V9.2Zm0-5.2h3v3h-3V4Z" />
        </svg>
    )
}

function DockerIcon(){
    return(
        <svg aria-hidden="true" className="h-7 w-7 text-cyan-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 12h2v-2H4v2Zm3 0h2v-2H7v2Zm3 0h2v-2h-2v2Zm3 0h2v-2h-2v2ZM7 9h2V7H7v2Zm3 0h2V7h-2v2Zm3 0h2V7h-2v2Zm0-3h2V4h-2v2Zm8 6.1c-.52-.35-1.52-.47-2.27-.23-.1-.75-.54-1.4-1.35-1.98l-.46-.31-.31.46c-.61.93-.77 2.45-.12 3.46-.29.16-.86.38-1.62.38H3.2l-.07.42c-.22 1.32.02 2.47.71 3.42.76 1.04 1.95 1.57 3.53 1.57h5.12c2.22 0 3.88-.8 4.93-2.39.7-1.06 1.04-2.23 1.23-3.27.77.04 1.72-.18 2.33-.77l.34-.33-.32-.35Z" />
        </svg>
    )
}
