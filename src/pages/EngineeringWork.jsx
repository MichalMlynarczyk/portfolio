import unetDiagram from '../images/image copy 11.png'
import labDiagram from '../images/image copy 12.png'
import lossChart from '../images/image copy 13.png'
import { LanguageSwitch } from '../components/LanguageSwitch.jsx'

const PROFILE_NAME = 'Michał Młynarczyk'
const THESIS_URL = 'https://drive.google.com/file/d/1feTJHq_sDV6JmpDGb34FCqS4HeR827bE/view?usp=sharing'
const STACK = ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'GAN', 'U-Net', 'CNN']
const STATUS_ITEMS = [
    'Implementacja wielu architektur CNN',
    'U-Net z Skip Connections',
    'Transfer Learning',
    'CGAN oraz WGAN-GP',
    'Analiza funkcji strat i optymalizatorów',
    'Ocena jakości kolorowania przy użyciu metryk EMD i Delta E',
    'Testy wydajności oraz kosztów obliczeniowych',
]
const DATASET_ITEMS = [
    '5000 obrazów z Kaggle',
    '3000 dodatkowych kadrów z serialu Simpsonowie',
    'Przetwarzanie obrazów w przestrzeni kolorów LAB',
    'Styl kreskówkowy dobrany pod zastosowania w animacji 2D',
]
const IMPLEMENTED_MODELS = [
    {
        title: 'Model podstawowy CNN',
        text: 'Pierwsza architektura składająca się z siedmiu warstw konwolucyjnych oraz Batch Normalization.',
    },
    {
        title: 'U-Net',
        text: 'Architektura wykorzystująca skip connections pozwalające zachować szczegóły obrazu podczas rekonstrukcji kolorów.',
    },
    {
        title: 'Rozbudowany U-Net',
        text: '13 warstw konwolucyjnych oraz ponad 1000 filtrów w najgłębszych warstwach.',
    },
    {
        title: 'Transfer Learning',
        text: 'Wykorzystanie wcześniej wytrenowanych modeli w celu skrócenia czasu treningu i poprawy jakości wyników.',
    },
    {
        title: 'GAN',
        text: 'Implementacja CGAN, WGAN-GP, WGAN-GP + VGG16, WGAN-GP + VGG19 oraz WGAN-GP + EfficientNet.',
    },
]
const MODEL_COMPARISON = [
    ['CNN', '★★☆☆☆'],
    ['U-Net', '★★★☆☆'],
    ['Transfer Learning', '★★★★☆'],
    ['GAN', '★★★★★'],
]
const VISUAL_MATERIALS = [
    {
        title: 'Schemat U-Net',
        image: unetDiagram,
    },
    {
        title: 'Przestrzeń LAB i proces uczenia',
        image: labDiagram,
    },
    {
        title: 'Wykres uczenia modelu',
        image: lossChart,
    },
]
const ENGINEERING_EN = {
    nav: ['Projects', 'About', 'Skills', 'Contact'],
    homeAria: 'Home page',
    back: 'Back to projects',
    category: 'Engineering thesis',
    summary: 'Automatic colorization of black-and-white images using artificial intelligence.',
    intro: 'A research project completed at Cracow University of Technology. The goal was to develop and compare deep learning models capable of reconstructing colors from grayscale images.',
    thesis: 'View thesis',
    modelLabel: 'Model',
    statusTitle: 'Project completed and defended',
    statusText: 'The thesis analyzed the effectiveness of different AI architectures for image colorization and assessed their practical application potential.',
    statusItems: [
        'Implementation of multiple CNN architectures',
        'U-Net with skip connections',
        'Transfer learning',
        'CGAN and WGAN-GP',
        'Analysis of loss functions and optimizers',
        'Colorization quality assessment using EMD and Delta E metrics',
        'Performance and computational cost tests',
    ],
    technologies: 'Technologies used',
    problemTitle: 'Problem',
    problemText: 'Manual coloring of graphics and animations is a time-consuming process. The goal of the project was to examine whether modern AI models can automatically recreate realistic colors from black-and-white images.',
    datasetTitle: 'Dataset',
    datasetItems: [
        '5000 images from Kaggle',
        '3000 additional frames from The Simpsons',
        'Image processing in the LAB color space',
        'Cartoon style selected for 2D animation use cases',
    ],
    implementedTitle: 'What was implemented',
    implementedModels: [
        { title: 'Base CNN model', text: 'The first architecture consisting of seven convolutional layers and Batch Normalization.' },
        { title: 'U-Net', text: 'An architecture using skip connections to preserve image details during color reconstruction.' },
        { title: 'Extended U-Net', text: '13 convolutional layers and over 1000 filters in the deepest layers.' },
        { title: 'Transfer Learning', text: 'Use of pre-trained models to shorten training time and improve output quality.' },
        { title: 'GAN', text: 'Implementation of CGAN, WGAN-GP, WGAN-GP + VGG16, WGAN-GP + VGG19, and WGAN-GP + EfficientNet.' },
    ],
    comparisonTitle: 'Model comparison',
    materialsTitle: 'Technical materials',
    materials: ['U-Net diagram', 'LAB space and training process', 'Model training chart'],
    previous: 'Previous project',
    next: 'Next project',
}

export function EngineeringWork({ language, onLanguageChange }){
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
    const labels = isEnglish ? ENGINEERING_EN.nav : ['Projekty', 'O mnie', 'Umiejętności', 'Kontakt']
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
                    aria-label={isEnglish ? ENGINEERING_EN.homeAria : 'Strona główna'}
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
                        {isEnglish ? ENGINEERING_EN.back : 'Wróć do projektów'}
                    </a>

                    <p className="mt-12 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                        {isEnglish ? ENGINEERING_EN.category : 'Praca inżynierska'}
                    </p>
                    <h1 className="mt-5 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
                        AI Colorization
                    </h1>
                    <p className="mt-6 max-w-xl text-xl font-semibold leading-8 text-slate-200">
                        {isEnglish ? ENGINEERING_EN.summary : 'Automatyczne kolorowanie obrazów czarno-białych przy użyciu sztucznej inteligencji.'}
                    </p>
                    <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
                        {isEnglish ? ENGINEERING_EN.intro : 'Projekt badawczy realizowany na Politechnice Krakowskiej. Celem było opracowanie i porównanie modeli głębokiego uczenia zdolnych do rekonstrukcji kolorów na podstawie obrazów w skali szarości.'}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2.5">
                        {STACK.map((item) => (
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
                            href={THESIS_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-cyan-300 px-6 text-sm font-extrabold text-[#061018] shadow-[0_18px_42px_rgba(34,211,238,0.24)] transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-[#061018]"
                        >
                            {isEnglish ? ENGINEERING_EN.thesis : 'Zobacz pracę'}
                            <ExternalLinkIcon />
                        </a>
                    </div>
                </div>

                <HeroVisual isEnglish={isEnglish} />
            </div>
        </section>
    )
}

function HeroVisual({ isEnglish }){
    return(
        <div className="relative mx-auto w-full max-w-3xl pt-4">
            <div className="absolute inset-x-10 bottom-4 h-24 rounded-full bg-cyan-300/14 blur-3xl" />
            <div className="relative rounded-2xl border border-cyan-100/10 bg-slate-950/40 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="grid gap-4 rounded-xl border border-cyan-100/10 bg-slate-950/45 p-5 md:grid-cols-2">
                    <div className="rounded-lg border border-cyan-100/10 bg-slate-900 p-4">
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                            {isEnglish ? ENGINEERING_EN.modelLabel : 'Model'}
                        </p>
                        <img
                            src={unetDiagram}
                            alt="Schemat architektury U-Net"
                            className="mt-4 aspect-[4/3] w-full rounded bg-white object-contain p-2"
                        />
                    </div>
                    <div className="rounded-lg border border-cyan-100/10 bg-slate-900 p-4">
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                            Training loss
                        </p>
                        <img
                            src={lossChart}
                            alt="Wykres uczenia modelu"
                            className="mt-4 aspect-[4/3] w-full rounded bg-white object-contain p-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function StatusSection({ isEnglish }){
    const statusItems = isEnglish ? ENGINEERING_EN.statusItems : STATUS_ITEMS

    return(
        <section className="px-5 py-3 sm:px-6">
            <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur sm:p-8 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                        Status
                    </p>
                    <h2 className="mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                        {isEnglish ? ENGINEERING_EN.statusTitle : 'Projekt ukończony i obroniony'}
                    </h2>
                    <p className="mt-6 text-base leading-8 text-slate-400">
                        {isEnglish ? ENGINEERING_EN.statusText : 'Praca obejmowała analizę skuteczności różnych architektur AI w zadaniu kolorowania obrazów oraz ocenę ich potencjału praktycznego zastosowania.'}
                    </p>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2">
                    {statusItems.map((feature) => (
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
    return(
        <section className="px-5 py-3 sm:px-6">
            <div className="mx-auto w-full max-w-6xl rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                    {isEnglish ? ENGINEERING_EN.technologies : 'Zastosowane technologie'}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                    {['TensorFlow', 'Keras', 'OpenCV', 'Scikit-Learn', 'Matplotlib', 'Lightning AI', 'GPU Acceleration'].map((item) => (
                        <span
                            key={item}
                            className="rounded-md bg-slate-800/80 px-3 py-1.5 text-sm font-bold text-slate-300 ring-1 ring-cyan-100/5"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

function DetailsSection({ isEnglish }){
    const datasetItems = isEnglish ? ENGINEERING_EN.datasetItems : DATASET_ITEMS
    const implementedModels = isEnglish ? ENGINEERING_EN.implementedModels : IMPLEMENTED_MODELS
    const materialTitles = isEnglish ? ENGINEERING_EN.materials : VISUAL_MATERIALS.map((item) => item.title)
    const visualMaterials = VISUAL_MATERIALS.map((item, index) => ({
        ...item,
        title: materialTitles[index],
    }))

    return(
        <section className="px-5 py-3 sm:px-6">
            <div className="mx-auto w-full max-w-6xl rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur sm:p-8">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                            {isEnglish ? ENGINEERING_EN.problemTitle : 'Problem'}
                        </p>
                        <p className="mt-7 text-base leading-8 text-slate-300">
                            {isEnglish ? ENGINEERING_EN.problemText : 'Ręczne kolorowanie grafik i animacji jest procesem czasochłonnym. Celem projektu było zbadanie, czy nowoczesne modele AI są w stanie automatycznie odtwarzać realistyczne kolory na podstawie obrazów czarno-białych.'}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                            {isEnglish ? ENGINEERING_EN.datasetTitle : 'Zbiór danych'}
                        </p>
                        <ul className="mt-7 space-y-4">
                            {datasetItems.map((item) => (
                                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                                    <CheckIcon />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                            {isEnglish ? ENGINEERING_EN.implementedTitle : 'Co zostało zaimplementowane'}
                        </p>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {implementedModels.map((model) => (
                                <article key={model.title} className="rounded-lg border border-cyan-100/10 bg-slate-950/30 p-5">
                                    <h3 className="text-base font-extrabold text-white">
                                        {model.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-300">
                                        {model.text}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                            {isEnglish ? ENGINEERING_EN.comparisonTitle : 'Porównanie modeli'}
                        </p>
                        <div className="mt-6 overflow-hidden rounded-lg border border-cyan-100/10 bg-slate-950/30">
                            {MODEL_COMPARISON.map(([model, quality]) => (
                                <div key={model} className="grid grid-cols-2 border-b border-cyan-100/10 px-5 py-4 last:border-b-0">
                                    <span className="font-bold text-white">
                                        {model}
                                    </span>
                                    <span className="text-right text-cyan-300">
                                        {quality}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                        {isEnglish ? ENGINEERING_EN.materialsTitle : 'Materiały techniczne'}
                    </p>
                    <div className="mt-6 grid gap-5 lg:grid-cols-3">
                        {visualMaterials.map((item) => (
                            <figure key={item.title} className="rounded-lg border border-cyan-100/10 bg-slate-950/30 p-4">
                                <div className="overflow-hidden rounded-md bg-white">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="aspect-[16/10] w-full object-contain p-2 transition duration-500 hover:scale-105"
                                    />
                                </div>
                                <figcaption className="mt-4 text-center text-sm font-bold text-slate-200">
                                    {item.title}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
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
                        {isEnglish ? ENGINEERING_EN.previous : 'Poprzedni projekt'}
                    </p>
                    <p className="mt-1 text-lg font-bold text-white">
                        BrainLift
                    </p>
                </a>
                <a
                    href="/novaderm"
                    className="group rounded-lg border border-cyan-100/10 bg-slate-950/24 p-6 text-right transition hover:border-cyan-300/45 hover:bg-slate-950/36"
                >
                    <span className="ml-auto flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/40 text-cyan-300 transition group-hover:translate-x-1">
                        <ArrowRightIcon />
                    </span>
                    <p className="mt-5 text-sm font-bold text-cyan-300">
                        {isEnglish ? ENGINEERING_EN.next : 'Następny projekt'}
                    </p>
                    <p className="mt-1 text-lg font-bold text-white">
                        NovaDerm
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
