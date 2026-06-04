import dashboardScreen from '../images/image copy 5.png'
import scanScreen from '../images/image copy 6.png'
import cropScreen from '../images/image copy 7.png'
import wordsScreen from '../images/image copy 8.png'
import booksScreen from '../images/image copy 9.png'
import bookReaderScreen from '../images/image copy 10.png'

const PROFILE_NAME = 'Michał Młynarczyk'
const BRAINLIFT_PREVIEW_URL = 'http://45.93.139.211/'
const BRAINLIFT_STACK = ['React', 'Vite', 'Flask', 'SQLite', 'OpenCV', 'PaddleOCR', 'OpenAI API', 'Docker']
const BRAINLIFT_FEATURES = [
    'Skanowanie zdjęć książek lub notatek',
    'Obrót, kadrowanie, czyszczenie tła i poprawa czytelności obrazu',
    'OCR do rozpoznawania tekstu z obrazów',
    'Automatyczne wyciąganie par słówek angielski-polski',
    'Tłumaczenie słów przez OpenAI',
    'Zapisywanie słów do własnych baz',
    'Słownik z wyszukiwaniem, paginacją, edycją i usuwaniem słów',
    'Tryb fiszek z wyborem bazy, losowaniem i zmianą kierunku nauki',
    'Moduł książek PDF z podglądem stron, zakładkami i klikaniem słów',
    'Konto użytkownika: rejestracja, logowanie, sesje i osobne dane użytkownika',
    'Tryb gościa z limitami',
]
const PROCESS_STEPS = [
    'Zaprojektowanie przepływu: skanowanie, OCR, tłumaczenie, zapis do bazy i nauka fiszek',
    'Implementacja frontendu w React z osobnymi modułami dla skanów, słownika, fiszek i książek',
    'Budowa backendu Flask z REST API dla autoryzacji, OCR, tłumaczeń, słowników i PDF',
    'Konfiguracja Docker Compose, Gunicorn oraz Nginx jako frontendu i proxy do API',
]
const TECHNOLOGY_GROUPS = [
    {
        title: 'Frontend',
        items: ['React', 'Vite', 'React Router', 'Tailwind CSS', 'lucide-react', 'localStorage'],
    },
    {
        title: 'Backend',
        items: ['Python', 'Flask', 'Flask-CORS', 'SQLite', 'OpenCV', 'PaddleOCR', 'OpenAI API', 'PyMuPDF', 'Werkzeug', 'python-dotenv'],
    },
    {
        title: 'DevOps / wdrożenie',
        items: ['Docker', 'Docker Compose', 'Gunicorn', 'Nginx', 'osobne kontenery frontendu i backendu'],
    },
]
const ARCHITECTURE_POINTS = [
    'Backend w katalogu backend udostępnia REST API dla autoryzacji, słowników, fiszek, OCR, tłumaczeń i książek PDF.',
    'Frontend w katalogu english komunikuje się z API przez osobne serwisy, m.in. wordsApi, scanApi, booksApi i authApi.',
    'Dane użytkowników, bazy słów, zakładki i sesje są rozdzielone tak, aby każdy użytkownik pracował na własnym zestawie danych.',
]
const APP_SCREENS = [
    {
        title: 'Dashboard',
        image: dashboardScreen,
    },
    {
        title: 'Skanowanie',
        image: scanScreen,
    },
    {
        title: 'Kadrowanie OCR',
        image: cropScreen,
    },
    {
        title: 'Wyodrębnione słowa',
        image: wordsScreen,
    },
    {
        title: 'Książki PDF',
        image: booksScreen,
    },
    {
        title: 'Klikanie słów w PDF',
        image: bookReaderScreen,
    },
]

export function BrainLiftPage(){
    return(
        <main className="min-h-screen bg-[#061018] text-slate-100">
            <div className="relative isolate overflow-hidden">
                <BackgroundLines />
                <SiteHeader />
                <HeroSection />
                <StatusSection />
                <TechnologySection />
                <DetailsSection />
                <ProjectNavigation />
            </div>
        </main>
    )
}

function SiteHeader(){
    const navItems = [
        { label: 'Projekty', href: '/#projects', isActive: true },
        { label: 'O mnie', href: '/#about' },
        { label: 'Umiejętności', href: '/#skills' },
        { label: 'Kontakt', href: '/#contact' },
    ]

    return(
        <header className="sticky top-0 z-30 border-b border-cyan-200/10 bg-[#061018]/86 px-5 backdrop-blur-xl sm:px-6">
            <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between">
                <a
                    href="/"
                    className="group inline-flex items-center gap-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-4 focus:ring-offset-[#061018]"
                    aria-label="Strona główna"
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
            </nav>
        </header>
    )
}

function HeroSection(){
    return(
        <section className="px-5 pb-8 pt-12 sm:px-6 sm:pt-16 lg:pb-12 lg:pt-20">
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
                <div>
                    <a
                        href="/#projects"
                        className="inline-flex items-center gap-3 text-sm font-bold text-slate-300 transition hover:gap-4 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-[#061018]"
                    >
                        <ArrowLeftIcon />
                        Wróć do projektów
                    </a>

                    <p className="mt-12 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                        Projekt własny
                    </p>
                    <h1 className="mt-5 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
                        BrainLift
                    </h1>
                    <p className="mt-6 max-w-xl text-xl font-semibold leading-8 text-slate-200">
                        Aplikacja webowa do nauki angielskiego przez OCR, AI, słowniki i fiszki.
                    </p>
                    <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
                        BrainLift wspiera naukę języka angielskiego przez skanowanie tekstów,
                        automatyczne wyciąganie słówek, tłumaczenie ich z pomocą AI oraz
                        ćwiczenie przy pomocy fiszek.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2.5">
                        {BRAINLIFT_STACK.map((item) => (
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
                            href={BRAINLIFT_PREVIEW_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-cyan-300 px-6 text-sm font-extrabold text-[#061018] shadow-[0_18px_42px_rgba(34,211,238,0.24)] transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-[#061018]"
                        >
                            Zobacz podgląd projektu
                            <ExternalLinkIcon />
                        </a>
                    </div>
                </div>

                <AppPreview />
            </div>
        </section>
    )
}

function AppPreview(){
    return(
        <div className="relative mx-auto w-full max-w-3xl pt-4">
            <div className="absolute inset-x-10 bottom-4 h-24 rounded-full bg-cyan-300/14 blur-3xl" />
            <div className="relative mx-auto w-[94%] rounded-t-2xl border border-slate-600 bg-slate-900 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="overflow-hidden rounded-lg bg-slate-800">
                    <img
                        src={dashboardScreen}
                        alt="Dashboard aplikacji BrainLift"
                        className="aspect-[16/10] w-full object-cover object-top"
                    />
                </div>
            </div>
            <div className="relative mx-auto h-3 w-full rounded-b-full bg-slate-700 shadow-[0_18px_36px_rgba(0,0,0,0.35)]" />
        </div>
    )
}

function StatusSection(){
    return(
        <section className="px-5 py-3 sm:px-6">
            <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur sm:p-8 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                        Status
                    </p>
                    <h2 className="mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                        Projekt aplikacji do nauki języka
                    </h2>
                    <p className="mt-6 text-base leading-8 text-slate-400">
                        Projekt łączy OCR, przetwarzanie obrazu, tłumaczenia AI, własne
                        bazy słów, fiszki oraz moduł czytania książek PDF.
                    </p>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2">
                    {BRAINLIFT_FEATURES.map((feature) => (
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

function TechnologySection(){
    return(
        <section className="px-5 py-3 sm:px-6">
            <div className="mx-auto w-full max-w-6xl rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                    Technologie
                </p>
                <div className="mt-6 grid gap-5 lg:grid-cols-3">
                    {TECHNOLOGY_GROUPS.map((group) => (
                        <article key={group.title} className="rounded-lg border border-cyan-100/10 bg-slate-950/30 p-5">
                            <h3 className="text-base font-extrabold text-white">
                                {group.title}
                            </h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-md bg-slate-800/80 px-3 py-1.5 text-xs font-bold text-slate-300 ring-1 ring-cyan-100/5"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

function DetailsSection(){
    return(
        <section className="px-5 py-3 sm:px-6">
            <div className="mx-auto w-full max-w-6xl rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur sm:p-8">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                            Opis projektu
                        </p>
                        <p className="mt-7 text-base leading-8 text-slate-300">
                            BrainLift to aplikacja webowa wspierająca naukę języka angielskiego
                            przez skanowanie tekstów, automatyczne wyciąganie słówek,
                            tłumaczenie ich z pomocą AI oraz ćwiczenie przy pomocy fiszek.
                        </p>
                        <p className="mt-5 text-base leading-8 text-slate-300">
                            Użytkownik może tworzyć własne bazy słów, zarządzać słownikiem,
                            przeglądać przygotowane książki PDF i dodawać nowe słówka
                            bezpośrednio z tekstu.
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                            Proces realizacji
                        </p>
                        <ol className="mt-7 space-y-6">
                            {PROCESS_STEPS.map((step, index) => (
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

                <div className="mt-12 rounded-lg border border-cyan-100/10 bg-slate-950/30 p-5 sm:p-6">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                        Architektura
                    </p>
                    <ul className="mt-6 grid gap-4 lg:grid-cols-3">
                        {ARCHITECTURE_POINTS.map((point) => (
                            <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                                <CheckIcon />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-12">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                        Widoki aplikacji
                    </p>
                    <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {APP_SCREENS.map((screen) => (
                            <AppScreenCard key={screen.title} screen={screen} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function AppScreenCard({ screen }){
    return(
        <article className="rounded-lg border border-cyan-100/10 bg-slate-950/30 p-4">
            <div className="overflow-hidden rounded-md border border-cyan-100/10 bg-slate-900">
                <img
                    src={screen.image}
                    alt={`Widok aplikacji BrainLift - ${screen.title}`}
                    className="aspect-[16/10] w-full object-cover object-top transition duration-500 hover:scale-105"
                />
            </div>
            <h3 className="mt-4 text-center text-sm font-bold text-slate-200">
                {screen.title}
            </h3>
        </article>
    )
}

function ProjectNavigation(){
    return(
        <section className="px-5 pb-10 pt-3 sm:px-6">
            <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-2">
                <a
                    href="/novaderm"
                    className="group rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 transition hover:border-cyan-300/45 hover:bg-slate-950/36"
                >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/40 text-cyan-300 transition group-hover:-translate-x-1">
                        <ArrowLeftIcon />
                    </span>
                    <p className="mt-5 text-sm font-bold text-cyan-300">
                        Poprzedni projekt
                    </p>
                    <p className="mt-1 text-lg font-bold text-white">
                        NovaDerm
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
                        Następny projekt
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
