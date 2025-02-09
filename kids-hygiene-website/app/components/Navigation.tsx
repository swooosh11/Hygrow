import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="bg-gray-100 p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-blue-600 text-2xl font-bold hover:text-blue-800">
          Hygrow
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/hygiene-basics" className="text-gray-700 hover:text-blue-600">
              Basics
            </Link>
          </li>
          <li>
            <Link href="/how-to" className="text-gray-700 hover:text-blue-600">
              How-To
            </Link>
          </li>
          <li>
            <Link href="/kid-experiences" className="text-gray-700 hover:text-blue-600">
              Experiences
            </Link>
          </li>
          <li>
            <Link href="/fun-facts" className="text-gray-700 hover:text-blue-600">
              Fun Facts
            </Link>
          </li>
          <li>
            <Link href="/consequences" className="text-gray-700 hover:text-blue-600">
              Why It Matters
            </Link>
          </li>
          <li>
            <Link href="/habit-tracker" className="text-gray-700 hover:text-blue-600">
              Habit Tracker
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

