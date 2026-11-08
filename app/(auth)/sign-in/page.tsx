import type { Metadata } from "next"

import { AuthToggleForm } from "@/components/auth-toggle-form"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to HireLoop to continue your job search.",
}

export default function SignInPage() {
  return <AuthToggleForm initialMode="signin" />
}
