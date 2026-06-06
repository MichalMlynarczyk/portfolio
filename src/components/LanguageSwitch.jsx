export function LanguageSwitch({ language, onLanguageChange }){
    const options = [
        { code: 'pl', label: 'PL' },
        { code: 'en', label: 'ENG' },
    ]

    return(
        <div
            className="inline-flex rounded-md border border-cyan-100/10 bg-slate-950/45 p-1"
            role="group"
            aria-label={language === 'pl' ? 'Wybór języka' : 'Language selector'}
        >
            {options.map((option) => {
                const isActive = language === option.code

                return(
                    <button
                        key={option.code}
                        type="button"
                        onClick={() => onLanguageChange(option.code)}
                        className={`min-h-9 rounded px-3 text-xs font-extrabold transition focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#061018] ${
                            isActive
                                ? 'bg-cyan-300 text-[#061018]'
                                : 'text-slate-300 hover:bg-slate-800 hover:text-cyan-200'
                        }`}
                        aria-pressed={isActive}
                    >
                        {option.label}
                    </button>
                )
            })}
        </div>
    )
}
