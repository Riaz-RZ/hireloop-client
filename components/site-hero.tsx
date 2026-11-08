import Image from "next/image"
import Link from "next/link"
import { MapPinIcon, SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

const trendingPositions = [
  { href: "/jobs?category=product-design", label: "Product Designer" },
  { href: "/jobs?category=ai-engineering", label: "AI Engineering" },
  { href: "/jobs?category=dev-ops", label: "Dev-ops Engineer" },
]

export function SiteHero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[#0a0a10] px-4 pt-24 pb-40 text-white sm:px-6">
      {/* Globe backdrop: anchored so the planet's crest sits ~86% down the viewport */}
      <Image
        src="/images/globe-hero.png"
        alt=""
        aria-hidden
        width={1440}
        height={1261}
        priority
        className="pointer-events-none absolute top-[calc(86svh-16vw)] left-1/2 w-full max-w-none -translate-x-1/2 select-none"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {/* Badge */}
        <div className="relative flex justify-center">
          <div
            aria-hidden
            className="absolute top-1/2 right-full h-px w-24 -translate-y-1/2 bg-linear-to-r from-transparent to-white/25"
          />
          <div
            aria-hidden
            className="absolute top-1/2 left-full h-px w-24 -translate-y-1/2 bg-linear-to-l from-transparent to-white/25"
          />
          <span className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/6 px-4 py-2.5 font-mono text-xs tracking-wider backdrop-blur">
            <span aria-hidden>
              🧳
            </span>
            <span className="text-sm font-bold tracking-tight">50,000+</span>
            <span className="text-white/55">NEW JOBS THIS MONTH</span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold text-center sm:mt-2 sm:text-5xl">
          Find Your Dream Job Today
        </h1>
        <p className="mt-4 text-center text-pretty text-white/55 sm:text-lg">
          HireLoop connects top talent with world-class companies. Browse
          thousands of <br /> curated opportunities and land your next role — faster.
        </p>

        {/* Search bar */}
        <form
          action="/jobs"
          method="get"
          className="mt-8 flex h-14 w-full max-w-3xl items-center gap-2 rounded-2xl border border-white/10 bg-white/4 p-2 pr-2 pl-5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur sm:h-16"
        >
          <label htmlFor="hero-job-title" className="sr-only">
            Job title, skill or company
          </label>
          <SearchIcon className="size-4 shrink-0 text-white/60" />
          <input
            id="hero-job-title"
            name="q"
            placeholder="Job title, skill or company"
            autoComplete="off"
            className="h-full min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
          />

          <div className="hidden h-6 w-px bg-white/10 sm:block" aria-hidden />

          <label htmlFor="hero-location" className="sr-only">
            Location or Remote
          </label>
          <div className="hidden h-full items-center gap-2 sm:flex">
            <MapPinIcon className="size-4 shrink-0 text-white/60" />
            <input
              id="hero-location"
              name="location"
              placeholder="Location or Remote"
              autoComplete="off"
              className="h-full w-40 min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-white/40 lg:w-48"
            />
          </div>

          <Button
            type="submit"
            size="icon-lg"
            className="h-11 w-11 rounded-xl sm:h-12 sm:w-12"
            aria-label="Search jobs"
          >
            <SearchIcon className="size-4 sm:size-5" />
          </Button>
        </form>

        {/* Trending positions */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <span className="text-sm text-white/40">Trending Positions</span>
          {trendingPositions.map((position) => (
            <Link
              key={position.href}
              href={position.href}
              className="rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              {position.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
