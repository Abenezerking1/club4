"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-orange-600">Club 4</span>
          <span className="text-xl font-medium">Community Kitchen</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">
            About
          </Link>
          <Link href="/menu" className="text-gray-700 hover:text-orange-600 font-medium">
            Menu
          </Link>
          <Link href="/volunteer" className="text-gray-700 hover:text-orange-600 font-medium">
            Volunteer
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium">
            Contact
          </Link>
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="/donate">Donate</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 hover:text-orange-600" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-orange-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-orange-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/menu"
              className="text-gray-700 hover:text-orange-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/volunteer"
              className="text-gray-700 hover:text-orange-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Volunteer
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="bg-orange-600 hover:bg-orange-700 w-full">
              <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
                Donate
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

