import type { Metadata } from "next"

import { AuthToggleForm } from "@/components/auth-toggle-form"

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a HireLoop account and land your next role — faster.",
}

export default function SignUpPage() {
  return <AuthToggleForm initialMode="signup" />
}
