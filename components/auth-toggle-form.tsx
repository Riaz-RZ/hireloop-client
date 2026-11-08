"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { EyeIcon, EyeOffIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

// Standard four-color Google "G" mark
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
      />
    </svg>
  )
}

type Mode = "signin" | "signup"

const copy: Record<Mode, { heading: string; description: string; submit: string }> = {
  signin: {
    heading: "Welcome back",
    description: "Sign in to continue your job search.",
    submit: "Sign In",
  },
  signup: {
    heading: "Create your account",
    description: "Join HireLoop and land your next role — faster.",
    submit: "Create Account",
  },
}

const modeRoutes: Record<Mode, string> = {
  signin: "/sign-in",
  signup: "/sign-up",
}

export function AuthToggleForm({ initialMode }: { initialMode: Mode }) {
  const [mode, setMode] = React.useState<Mode>(initialMode)
  const [showPassword, setShowPassword] = React.useState(false)
  const router = useRouter()

  const switchMode = (nextMode: Mode) => {
    if (nextMode === mode) return
    setMode(nextMode)
    router.push(modeRoutes[nextMode])
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Form is UI-only for now — no authentication wired up yet.
    event.preventDefault()
  }

  return (
    <div className="w-full max-w-sm">
      <Link href="/" className="mx-auto mb-8 block w-fit" aria-label="HireLoop home">
        <Image
          src="/images/logo.png"
          alt="HireLoop"
          width={154}
          height={44}
          className="h-9 w-auto"
          priority
        />
      </Link>

      {/* Mode toggle */}
      <div
        className="bg-muted text-muted-foreground mx-auto mb-6 flex w-fit rounded-lg p-1 text-sm"
        role="tablist"
        aria-label="Sign in or sign up"
      >
        {(["signin", "signup"] as const).map((m) => (
          <button
            key={m}
            type="button"
            role="tab"
            aria-selected={mode === m}
            onClick={() => switchMode(m)}
            className="cursor-pointer rounded-md px-4 py-1.5 font-medium transition-colors aria-selected:bg-background aria-selected:text-foreground aria-selected:shadow-sm"
          >
            {m === "signin" ? "Sign In" : "Sign Up"}
          </button>
        ))}
      </div>

      <div className="bg-card rounded-2xl border p-6 shadow-sm">
        <h1 className="font-heading text-xl font-semimedium text-center">
          {copy[mode].heading}
        </h1>
        <p className="text-muted-foreground mt-1 mb-6 text-sm text-center">
          {copy[mode].description}
        </p>



        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {mode === "signup" && (
            <div className="flex flex-col gap-1.5">
              <label htmlFor="auth-name" className="text-sm font-medium">
                Full Name
              </label>
              <Input
                id="auth-name"
                name="name"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                required
                className="h-9"
              />
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label htmlFor="auth-email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="auth-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="h-9"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="auth-password" className="text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <Input
                id="auth-password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                minLength={8}
                required
                className="h-9 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="absolute top-1/2 right-1 -translate-y-1/2"
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                onClick={() => setShowPassword((visible) => !visible)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </Button>
            </div>
          </div>

          <Button type="submit" className="mt-3 h-9 w-full">
            {copy[mode].submit}
          </Button>
        </form>

        <div className="text-muted-foreground my-5 mt-6 flex items-center gap-3 text-xs">
          <Separator className="flex-1" />
          or continue with google
          <Separator className="flex-1" />
        </div>

        {/* Google sign in */}
        <Button
          type="button"
          variant="outline"
          className="mt-1 h-9 w-full"
        >
          <GoogleIcon className="size-4" />
          Continue with Google
        </Button>



        <p className="text-muted-foreground mt-4 text-center text-sm">
          {mode === "signin" ? "New to HireLoop?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => switchMode(mode === "signin" ? "signup" : "signin")}
            className="text-primary hover:underline"
          >
            {mode === "signin" ? "Create an account" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  )
}
