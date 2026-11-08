"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/jobs", label: "Browse Jobs" },
  { href: "/company", label: "Company" },
  { href: "/pricing", label: "Pricing" },
]

function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      className={className}
      aria-label="HireLoop home"
      onClick={onClick}
    >
      <Image
        src="/images/logo.png"
        alt="HireLoop"
        width={154}
        height={44}
        className="h-9 w-auto"
        priority
      />
    </Link>
  )
}

export function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8">
      <div className="bg-card/95 supports-backdrop-filter:bg-card/80 mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-2 rounded-2xl border bg-clip-padding px-4 shadow-sm backdrop-blur sm:px-6">
        <Logo onClick={close} />

        {/* Desktop nav */}
        <nav className="flex items-center gap-2 sm:gap-6">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Separator
            orientation="vertical"
            className="bg-border/60 mx-2 hidden h-5 md:block"
          />

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/sign-in"
              className="text-primary hover:text-primary/80 hidden px-2 text-sm font-medium transition-colors sm:block"
            >
              Sign In
            </Link>
            <Button nativeButton={false} render={<Link href="/sign-up" />}>
              Get Started
            </Button>
          </div>

          {/* Mobile nav trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open navigation menu"
                />
              }
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 gap-0">
              <SheetHeader>
                <SheetTitle className="sr-only">HireLoop navigation</SheetTitle>
                <div className="flex items-center gap-2 py-1">
                  <Image
                    src="/images/logo.png"
                    alt="HireLoop"
                    width={154}
                    height={44}
                    className="h-8 w-auto"
                  />
                </div>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className="hover:bg-muted rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2 border-t p-4">
                <Button
                  nativeButton={false}
                  variant="outline"
                  render={<Link href="/sign-in" />}
                  onClick={close}
                >
                  Sign In
                </Button>
                <Button
                  nativeButton={false}
                  render={<Link href="/sign-up" />}
                  onClick={close}
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
