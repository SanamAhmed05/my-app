import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-50 py-4 px-6 shadow-sm flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center text-white font-bold">N</div>
        <span className="font-bold text-lg text-gray-800">Nexcent</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-20 text-gray-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/service">Service</Link>
        <Link href="/feature">Feature</Link>
        <Link href="/product">Product</Link>
        <Link href="/testimonial">Testimonial</Link>
        <Link href="/faq">FAQ</Link>
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        <Link href="/login" className="text-green-600 hover:text-green-700">Login</Link>
        <Link href="/signup">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
}
