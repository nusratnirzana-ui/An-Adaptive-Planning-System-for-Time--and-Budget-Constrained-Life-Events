import { useEffect, useState } from 'react'
import { ArrowRight, Check, Clock, Menu, Moon, Plus, ShieldCheck, Smile, Sparkle, Sparkles, Sun, Users, X } from 'lucide-react'

const NAV = ['Home', 'Marketplace', 'How it works', 'For providers']

const PLAN = [
  { n: '01', title: 'A little prep', text: 'Declutter, gather supplies, take a breath.', week: 'Week 1' },
  { n: '02', title: 'Pack with a plan', text: 'Room by room. Label by label.', week: 'Week 2' },
  { n: '03', title: 'Hello, new home', text: 'Move in, settle down, make it yours.', week: 'Week 3' },
]

const STEPS = [
  { Icon: Sparkles, tone: 'bg-[#e8f3fc] text-[#5b8fc0]', title: 'Tell your companion',
    text: 'Big ideas, small details, tight budgets — just talk. Your companion listens and connects the dots.' },
  { Icon: ShieldCheck, tone: 'bg-[#efeafc] text-[#8b73d6]', title: 'Get a plan you can trust',
    text: 'A thoughtful timeline, clear tasks, and a realistic budget. Reviewed by our team before it reaches you.' },
  { Icon: Users, tone: 'bg-[#e6f6ee] text-[#4fa57f]', title: 'A little help goes a long way',
    text: 'Bring your people along or hire verified providers. The right help, right when you need it.' },
]

const STATS = [
  { Icon: Sparkle, value: '2,000+', label: 'life moments, thoughtfully planned' },
  { Icon: Clock, value: '12 hours', label: 'saved for the things that matter' },
  { Icon: ShieldCheck, value: '150+', label: 'verified helping hands' },
]

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 34 34" aria-hidden="true">
      <circle cx="11" cy="11" r="8" fill="#a8d8f5" />
      <circle cx="23" cy="11" r="8" fill="#c3b5f7" opacity=".9" />
      <circle cx="11" cy="23" r="8" fill="#c3b5f7" opacity=".9" />
      <circle cx="23" cy="23" r="8" fill="#a8d8f5" />
    </svg>
  )
}

function NavLink({ label, active, onClick }) {
  return (
    <a href={`#${label.toLowerCase().replace(/\s+/g, '-')}`} onClick={onClick}
       className={`relative inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${active ? '' : 'muted hover:opacity-80'}`}>
      {label}
      {label === 'For providers' && <ArrowRight size={14} />}
      {active && <span className="absolute -bottom-3.5 left-1/2 h-0.75 w-6 -translate-x-1/2 rounded-full bg-[#c3b5f7]" />}
    </a>
  )
}

function Navbar({ active, setActive, dark, toggleDark }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b bg-(--card)">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setActive('Home')}>
          <LogoMark />
          <span className="text-2xl font-extrabold tracking-tight">Planly<span className="text-[#8fb8e8]">.</span></span>
        </a>

        <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Main">
          {NAV.map((l) => <NavLink key={l} label={l} active={active === l} onClick={() => setActive(l)} />)}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggleDark} className="muted flex items-center gap-2 text-sm font-medium hover:opacity-80" aria-label="Toggle night mode">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden sm:inline">{dark ? 'Day' : 'Night'}</span>
          </button>
          <a href="#sign-in" className="hidden items-center gap-2 rounded-xl border bg-(--card) px-4 py-2 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 sm:inline-flex">
            Sign in <ArrowRight size={14} />
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t px-6 py-4 md:hidden" aria-label="Mobile">
          {NAV.map((l) => <NavLink key={l} label={l} active={active === l} onClick={() => { setActive(l); setOpen(false) }} />)}
          <a href="#sign-in" className="font-semibold">Sign in</a>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-8">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="label">From &ldquo;Where do I start?&rdquo; to &ldquo;I&rsquo;ve got this.&rdquo;</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            A plan for your life. Not the other way around.
          </h1>
        </div>
        <div className="muted hidden space-y-1.5 text-xs lg:block">
          <p>A little conversation.</p>
          <p>A whole lot of clarity.</p>
        </div>
      </div>
    </section>
  )
}

function PlanCard() {
  return (
    <div className="overflow-hidden rounded-3xl border bg-(--card) shadow-sm">
      <div className="flex items-center justify-between border-b px-5 py-2.5">
        <div className="flex gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-[#f4b6d6]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#c3b5f7]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#a8e6cf]" />
        </div>
        <span className="muted flex items-center gap-1.5 text-[11px]"><ShieldCheck size={12} /> your next chapter, planned</span>
        <Plus size={16} className="muted" />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start gap-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-(--bubble) text-(--accent)"><Sparkles size={18} /></span>
          <div>
            <p className="text-sm font-semibold">Let&rsquo;s make room for your next chapter.</p>
            <p className="muted text-xs">Your companion is putting the pieces together.</p>
          </div>
        </div>

        <div className="ml-0 flex items-center justify-between gap-3 rounded-2xl bg-(--bubble) px-4 py-3 text-xs sm:ml-14">
          <span>I&rsquo;m moving in 3 weeks. Can we keep it under ৳ 20,000?</span>
          <Smile size={16} className="muted shrink-0" />
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="label">Your plan is coming together</p>
          <span className="rounded-md bg-(--bubble) px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-(--accent)">Made for you</span>
        </div>

        <ul className="divide-y border-t">
          {PLAN.map((r, i) => (
            <li key={r.n} className="plan-row flex items-center gap-4 py-3" style={{ animationDelay: `${0.3 + i * 0.35}s` }}>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-(--tile) text-xs text-(--accent)">{r.n}</span>
              <div className="flex-1">
                <p className="text-[13px] font-semibold">{r.title}</p>
                <p className="muted text-xs">{r.text}</p>
              </div>
              <span className="muted text-xs">{r.week}</span>
              <Check size={16} className="text-[#4fa57f]" />
            </li>
          ))}
        </ul>

        <p className="muted flex items-center justify-center gap-1.5 border-t pt-4 text-[11px]">
          <ShieldCheck size={12} /> Always reviewed by a real person. Always made for you.
        </p>
      </div>
    </div>
  )
}

function Steps() {
  return (
    <ol className="space-y-7 lg:pl-8 lg:pt-6">
      {STEPS.map(({ Icon, tone, title, text }, i) => (
        <li key={title} className="flex gap-4">
          <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${tone}`}><Icon size={22} /></span>
          <div>
            <p className="label">Step {String(i + 1).padStart(2, '0')}</p>
            <h2 className="mt-1 text-lg font-bold">{title}</h2>
            <p className="muted mt-1.5 max-w-md text-sm leading-6">{text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function StatsBand() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-10">
      <div className="grid grid-cols-1 border-y sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
        {STATS.map(({ Icon, value, label }) => (
          <div key={label} className="flex items-start gap-3 py-6 lg:px-6 lg:first:pl-2">
            <Icon size={20} strokeWidth={1.6} className="mt-2 shrink-0 text-[#9fb4d8]" />
            <div>
              <p className="text-2xl font-bold tracking-tight">{value}</p>
              <p className="muted mt-1.5 text-[11px]">{label}</p>
            </div>
          </div>
        ))}
        <div className="relative flex items-center py-6 lg:px-6">
          <p className="text-base leading-7 text-(--accent)">
            Less on your plate.<br />More in your life.
          </p>
          <svg className="absolute bottom-5 right-0 hidden w-20 sm:block" viewBox="0 0 96 24" fill="none"
               stroke="#b8b0e0" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M2 20 C 28 22, 60 14, 92 8" />
            <path d="M84 4 L92 8 L85 13" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [active, setActive] = useState('Home')
  const [dark, setDark] = useState(() => localStorage.getItem('planly-theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('planly-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="min-h-screen">
      <Navbar active={active} setActive={setActive} dark={dark} toggleDark={() => setDark((d) => !d)} />
      <main id="home">
        <Hero />
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[1.15fr_1fr]">
          <PlanCard />
          <Steps />
        </section>
        <StatsBand />
      </main>
    </div>
  )
}