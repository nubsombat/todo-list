"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { getTokenCookie, removeTokenCookie } from "@/utils/tokenStorge"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await getTokenCookie()
      setIsLoggedIn(!!token)
    }
    checkLoginStatus()
  }, [pathname])

  const handleLogout = async () => {
    await removeTokenCookie()
    setIsLoggedIn(false)
    router.push("/")
  }

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <Link href="/">
              <span className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                TodoMaster
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:justify-between">
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <Link href="/to-do-list">
                    <Button variant="ghost">To-Do List</Button>
                  </Link>
                  <Button onClick={handleLogout}>Logout</Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost">Login</Button>
                  </Link>
                  <Link href="/register">
                    <Button>Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="flex md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              aria-label="toggle menu"
            >
              {!isMenuOpen ? <Menu /> : <X />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col mt-2 space-y-2">
              {isLoggedIn ? (
                <>
                  <Link href="/to-do-list">
                    <Button variant="ghost" className="w-full justify-start">To-Do List</Button>
                  </Link>
                  <Button onClick={handleLogout} className="w-full justify-start">Logout</Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost" className="w-full justify-start">Login</Button>
                  </Link>
                  <Link href="/register">
                    <Button className="w-full justify-start">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}