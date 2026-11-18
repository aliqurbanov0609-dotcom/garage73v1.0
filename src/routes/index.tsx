import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Beer,
  ChefHat,
  ChevronRight,
  Home as HomeIcon,
  Martini,
  Leaf,
  UtensilsCrossed,
} from 'lucide-react'
import {
  words,
  kitchenCategories,
  barCategories,
  dishes,
  drinks,
  label,
  type Lang,
} from '@/data/menu'

export const Route = createFileRoute('/')({ component: Garage })
type Screen =
  | 'language'
  | 'loading'
  | 'hub'
  | 'kitchen'
  | 'dish'
  | 'bar'
  | 'drinks'
const image = (name: string, w = 1600) =>
  `/.netlify/images?url=/img/${name}.png&w=${w}&fm=webp&q=85`
function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`logo ${compact ? 'compact' : ''}`}
      aria-label="Garage 73 Pub"
    >
      <div>
        GARAGE <span>73</span>
      </div>
      <small>
        <i /> P U B <i />
      </small>
    </div>
  )
}
function Garage() {
  const [stack, setStack] = useState<Screen[]>(['language'])
  const screen = stack[stack.length - 1]
  const [lang, setLang] = useState<Lang>('EN')
  const [category, setCategory] = useState(0)
  const [barCategory, setBarCategory] = useState(0)
  const [dish, setDish] = useState(0)
  const [toast, setToast] = useState('')
  const [press, setPress] = useState<number | null>(null)
  const hold = useRef<ReturnType<typeof setTimeout> | null>(null)
  const longPress = useRef(false)
  const t = words[lang]
  const go = (next: Screen) => setStack((s) => [...s, next])
  const back = () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s))
  const home = () => setStack(['language'])
  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase()
  }, [lang])
  useEffect(() => {
    if (screen !== 'loading') return
    const timer = setTimeout(() => setStack(['language', 'hub']), 1800)
    return () => clearTimeout(timer)
  }, [screen])
  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(''), 2400)
    return () => clearTimeout(timer)
  }, [toast])
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && screen !== 'loading')
        setStack((s) => (s.length > 1 ? s.slice(0, -1) : s))
    }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [screen])
  useEffect(
    () => () => {
      if (hold.current) clearTimeout(hold.current)
    },
    [],
  )
  const choose = (l: Lang) => {
    setLang(l)
    setToast(words[l].select)
    go('loading')
  }
  const cancelHold = () => {
    if (hold.current) clearTimeout(hold.current)
    hold.current = null
    setPress(null)
  }
  const Header = ({
    title,
    subtitle,
    brand = false,
  }: {
    title?: string
    subtitle?: string
    brand?: boolean
  }) => (
    <header className="menu-header">
      <button className="nav-pill" onClick={back}>
        <ArrowLeft size={15} />
        <span>{t.back}</span>
      </button>
      <div className="header-title">
        {brand ? (
          <Logo compact />
        ) : (
          <>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </>
        )}
      </div>
      <button className="nav-pill" onClick={home}>
        <HomeIcon size={15} />
        <span>{t.home}</span>
      </button>
    </header>
  )
  return (
    <main
      className={`app ${screen === 'kitchen' || screen === 'dish' ? 'warm' : ''}`}
    >
      {screen === 'language' || screen === 'loading' ? (
        <section
          className={`entry-screen ${screen === 'loading' ? 'is-loading' : ''}`}
        >
          <img className="entry-backdrop" src={image('language')} alt="" />
          <div className="entry-shade" />
          <div className="entry-top">
            <span>GARAGE 73 / PUB & KITCHEN</span>
            <span>BAKU, AZ</span>
          </div>
          <div className="entry-content">
            <Logo />
            {screen === 'language' ? (
              <>
                <p className="eyebrow">AZƏRBAYCAN · ENGLISH · РУССКИЙ</p>
                <h1>{t.choose}</h1>
                <p className="entry-description">{t.enter}</p>
                <div className="language-buttons">
                  {(['AZ', 'EN', 'RU'] as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => choose(l)}
                      lang={l.toLowerCase()}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="loading-tagline">{t.tagline}</p>
                <div
                  className="progress-track"
                  role="progressbar"
                  aria-label={t.menu}
                >
                  <div />
                </div>
              </>
            )}
          </div>
          <p className="entry-bottom">{t.tagline}</p>
        </section>
      ) : screen === 'hub' ? (
        <section className="hub screen-shell">
          <Header brand />
          <div className="hub-intro">
            <p className="eyebrow">GARAGE 73 — {t.menu}</p>
            <h1>{t.explore}</h1>
            <span>01 — 02</span>
          </div>
          <div className="hub-cards">
            {[
              {
                name: t.kitchen,
                key: 'kitchen' as const,
                icon: ChefHat,
                copy: t.food,
                num: '01',
              },
              {
                name: t.bar,
                key: 'bar' as const,
                icon: Martini,
                copy: t.drinks,
                num: '02',
              },
            ].map((c) => (
              <button
                key={c.key}
                className={`hub-card ${c.key}`}
                onClick={() => go(c.key)}
              >
                <img src={image(c.key)} alt="" />
                <div className="card-gradient" />
                <span className="card-number">{c.num} / GARAGE 73</span>
                <div className="hub-card-content">
                  <c.icon size={38} />
                  <h2>{c.name}</h2>
                  <span className="neon-rule" />
                  <p>{c.copy}</p>
                </div>
                <span className="circle-arrow">
                  <ArrowRight />
                </span>
              </button>
            ))}
          </div>
          <footer className="menu-footer">
            <span>{t.tagline}</span>
            <span>GARAGE 73</span>
          </footer>
        </section>
      ) : screen === 'kitchen' ? (
        <section className="kitchen-screen screen-shell">
          <Header title={t.kitchen} subtitle={t.review} />
          <div className="kitchen-hero">
            <img
              src={
                category === 0
                  ? image('kitchen')
                  : dishes.find((d) => d.category === category)?.photo
              }
              alt=""
            />
            <div className="hero-shade" />
            <span className="hero-stamp">
              <UtensilsCrossed size={20} /> {t.fire}
            </span>
            <h2 className="brush-title">
              {label(kitchenCategories[category], lang)}
            </h2>
          </div>
          <nav className="category-tabs" aria-label={t.menu}>
            {kitchenCategories.map((c, i) => (
              <button
                aria-pressed={category === i}
                className={category === i ? 'selected' : ''}
                onClick={() => setCategory(i)}
                key={c[0]}
              >
                {label(c, lang)}
              </button>
            ))}
          </nav>
          <div className="dish-list" key={category}>
            {dishes.map((d, i) =>
              d.category === category ? (
                <button
                  key={d.name}
                  className="dish-card"
                  onClick={() => {
                    setDish(i)
                    go('dish')
                  }}
                >
                  <div className="dish-thumbnail">
                    <img src={d.photo} alt="" loading="lazy" />
                  </div>
                  <div className="dish-card-name">
                    <h3>{d.name}</h3>
                    <i />
                  </div>
                  <span className="dish-price">
                    {d.price}
                    <small>₼</small>
                  </span>
                  <ChevronRight className="dish-arrow" />
                </button>
              ) : null,
            )}
            <p className="sample-note">{t.demo}</p>
          </div>
        </section>
      ) : screen === 'dish' ? (
        <section className="dish-screen screen-shell">
          <Header
            title={t.kitchen}
            subtitle={label(kitchenCategories[dishes[dish].category], lang)}
          />
          <div className="detail-scroll">
            <div className="detail-photo">
              <img src={dishes[dish].photo} alt={dishes[dish].name} />
            </div>
            <h1 className="brush-title">{dishes[dish].name}</h1>
            <div className="detail-body">
              <div className="detail-price">
                {dishes[dish].price}
                <span>₼</span>
              </div>
              <div className="info-panel">
                <h2>
                  <Leaf />
                  {t.ingredients}
                  <i />
                </h2>
                <ul>
                  {dishes[dish].ingredients[
                    lang === 'EN' ? 0 : lang === 'AZ' ? 1 : 2
                  ].map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="info-panel">
                <h2>
                  <ChefHat />
                  {t.about}
                  <i />
                </h2>
                <p>{label(dishes[dish].description, lang)}</p>
              </div>
              <p className="sample-note">{t.demo}</p>
            </div>
          </div>
        </section>
      ) : screen === 'bar' ? (
        <section className="bar-screen screen-shell">
          <Header title={t.bar} />
          <div className="bar-hero">
            <img src={image('bar')} alt="" />
            <div className="hero-shade" />
            <div>
              <p className="eyebrow">GARAGE 73</p>
              <h2>{t.drinks}</h2>
            </div>
          </div>
          <div className="bar-grid">
            {barCategories.map((c, i) => (
              <button
                key={c[0]}
                className={`bar-category ${press === i ? 'pouring' : ''}`}
                onPointerDown={() => {
                  longPress.current = false
                  hold.current = setTimeout(() => {
                    longPress.current = true
                    setPress(i)
                  }, 500)
                }}
                onPointerUp={cancelHold}
                onPointerCancel={cancelHold}
                onPointerLeave={cancelHold}
                onClick={() => {
                  if (longPress.current) {
                    longPress.current = false
                    return
                  }
                  setBarCategory(i)
                  go('drinks')
                }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <img src={image(`drink-${i}`, 700)} alt="" />
                <div className="card-gradient" />
                <span className="category-number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2>
                  {label(c, lang)}
                  <i />
                </h2>
                <span className="small-arrow">
                  <ChevronRight size={17} />
                </span>
                <div className="pour-wave" />
              </button>
            ))}
          </div>
        </section>
      ) : (
        <section className="drinks-screen screen-shell">
          <Header
            title={t.bar}
            subtitle={label(barCategories[barCategory], lang)}
          />
          <div className="drink-list">
            {drinks[barCategory].map((d, i) => (
              <article key={d.name} className="drink-card">
                <img src={image(`drink-${barCategory}`, 1000)} alt="" />
                <div className="card-gradient" />
                <span className="drink-number">
                  0{i + 1} / {t.collection}
                </span>
                <div className="drink-info">
                  <h2>{d.name}</h2>
                  <span className="drink-size">
                    {t.volume} / {d.size}
                  </span>
                  <p>
                    {d.price}
                    <small>₼</small>
                  </p>
                </div>
                <Beer className="drink-icon" size={30} />
              </article>
            ))}
            <p className="sample-note">{t.demo}</p>
          </div>
        </section>
      )}
      {toast && (
        <div className="language-toast" role="status">
          <span /> {toast}
        </div>
      )}
    </main>
  )
}
