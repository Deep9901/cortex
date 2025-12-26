"use client"

import { LoginForm } from '@/components/login-form'
import { Spinner } from '@/components/ui/spinner'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Page = () => {
  const { data, isPending } = authClient.useSession()
  const router = useRouter()

  useEffect(() => {
    if (!isPending && data?.user) {
      router.push("/")
    }
  }, [data, isPending, router])

  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Spinner />
      </div>
    )
  }

  // If we get here, user is not authenticated
  return <LoginForm />
}

export default Page