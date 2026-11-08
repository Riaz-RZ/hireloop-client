export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex min-h-svh justify-center px-4 pt-10 pb-16 sm:pt-16">
      {children}
    </main>
  )
}
