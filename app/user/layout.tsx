import AuthGuard from '@/components/auth/AuthGuard'

function UserLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AuthGuard>{children}</AuthGuard>
}

export default UserLayout
