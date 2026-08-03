import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CreamJar } from './components/CreamJar'
import { Nav } from './components/Nav'
import { feelMoments, ingredients, products } from './data'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-brand', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
      })
      gsap.from('.hero-line, .hero-support, .hero-actions', {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        delay: 0.25,
        ease: 'power3.out',
      })
      gsap.from('.hero-jar', {
        y: 60,
        scale: 0.92,
        opacity: 0,
        duration: 1.2,
        delay: 0.15,
        ease: 'power3.out',
      })

      const ritual = gsap.timeline({
        scrollTrigger: {
          trigger: '.ritual',
          start: 'top top',
          end: '+=220%',
          scrub: 1,
          pin: true,
        },
      })

      ritual
        .to('.ritual-copy .step-1', { opacity: 0, y: -24, duration: 0.4 }, 0)
        .to('.ritual-copy .step-2', { opacity: 1, y: 0, duration: 0.4 }, 0.15)
        .to(
          '.ritual .jar-lid',
          { y: -120, rotate: -8, duration: 0.8, ease: 'none' },
          0,
        )
        .to(
          '.ritual .cream-fill',
          { scale: 1.08, y: -8, duration: 0.6, ease: 'none' },
          0.2,
        )
        .to(
          '.ritual .cream-swirl',
          { opacity: 1, scale: 1, duration: 0.5, ease: 'none' },
          0.35,
        )
        .to('.ritual-copy .step-2', { opacity: 0, y: -24, duration: 0.35 }, 0.55)
        .to('.ritual-copy .step-3', { opacity: 1, y: 0, duration: 0.4 }, 0.65)
        .to(
          '.ritual .ingredient-chip',
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.45,
            ease: 'none',
          },
          0.7,
        )

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        })
      })

      gsap.from('.feel-item', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.feel',
          start: 'top 70%',
        },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="page" ref={rootRef} id="top">
      <div className="atmosphere" aria-hidden="true" />
      <Nav />

      <section className="hero">
        <div className="hero-copy">
          <p className="hero-brand">ORRIS</p>
          <h1 className="hero-line">Creams that open into ritual.</h1>
          <p className="hero-support">
            Scroll the jar open. Meet what melts in. Feel the finish before you
            buy.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#ritual">
              Begin the ritual
            </a>
            <a className="btn ghost" href="#shop">
              Shop the house
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-plane" />
          <CreamJar className="hero-jar" />
        </div>
      </section>

      <section className="ritual" id="ritual">
        <div className="ritual-stage">
          <div className="ritual-copy">
            <p className="eyebrow">The experience</p>
            <div className="ritual-steps">
              <div className="ritual-step step-1">
                <h2>Open the cream.</h2>
                <p>One slow scroll lifts the lid and reveals the whip.</p>
              </div>
              <div className="ritual-step step-2">
                <h2>See what melts in.</h2>
                <p>Rich texture rises as the formula comes into view.</p>
              </div>
              <div className="ritual-step step-3">
                <h2>Know every note.</h2>
                <p>Key ingredients arrive before the purchase decision.</p>
              </div>
            </div>
          </div>

          <div className="ritual-product">
            <CreamJar className="ritual-jar" />
            <ul className="ingredient-orbit" aria-hidden="true">
              {ingredients.map((item) => (
                <li className="ingredient-chip" key={item.name}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ingredients" id="ingredients">
        <div className="section-intro reveal">
          <p className="eyebrow">Inside the jar</p>
          <h2>Formulated for quiet skin.</h2>
          <p>
            Four actives do the heavy lifting — the rest is texture, scent, and
            the way it disappears.
          </p>
        </div>
        <ol className="ingredient-list">
          {ingredients.map((item, index) => (
            <li className="ingredient-row reveal" key={item.name}>
              <span className="ingredient-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="feel" id="feel">
        <div className="section-intro reveal">
          <p className="eyebrow">How it feels</p>
          <h2>From cloud to calm in three beats.</h2>
        </div>
        <div className="feel-grid">
          {feelMoments.map((moment) => (
            <article className="feel-item" key={moment.title}>
              <h3>{moment.title}</h3>
              <p>{moment.copy}</p>
            </article>
          ))}
        </div>
        <div className="feel-visual reveal" aria-hidden="true">
          <div className="texture-wash" />
        </div>
      </section>

      <section className="shop" id="shop">
        <div className="section-intro reveal">
          <p className="eyebrow">The cream house</p>
          <h2>Choose your ritual.</h2>
          <p>Three textures. One house. Built for daily softness.</p>
        </div>
        <div className="shop-list">
          {products.map((product) => (
            <article className="product reveal" key={product.id}>
              <div className="product-visual">
                <CreamJar />
              </div>
              <div className="product-copy">
                <div className="product-meta">
                  <h3>{product.name}</h3>
                  <span>{product.price}</span>
                </div>
                <p>{product.desc}</p>
                <div className="product-footer">
                  <span>{product.size}</span>
                  <button type="button" className="btn primary small">
                    Add to bag
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <p className="footer-brand">ORRIS</p>
          <p>Cream house for skin that wants quiet luxury.</p>
        </div>
        <div className="footer-links">
          <a href="#ritual">Ritual</a>
          <a href="#ingredients">Ingredients</a>
          <a href="#shop">Shop</a>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} ORRIS</p>
      </footer>
    </div>
  )
}
