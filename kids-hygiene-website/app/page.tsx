import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Welcome to Hygrow</h1>
      <p className="text-xl mb-8 text-gray-600 text-center">Nurturing healthy habits for a brighter future</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Hygiene Matters</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Prevents the spread of illness</li>
            <li>Boosts self-confidence</li>
            <li>Promotes overall well-being</li>
            <li>Establishes lifelong healthy habits</li>
          </ul>
        </div>
        <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Approach</h2>
          <p className="text-gray-600">
            We make learning about hygiene fun and engaging. Through interactive guides, personal stories, and daily
            habit tracking, we empower young people to take charge of their health.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Link
          href="/hygiene-basics"
          className="bg-yellow-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Hygiene Basics</h2>
          <p className="text-gray-600">Discover fundamental principles</p>
        </Link>
        <Link href="/how-to" className="bg-green-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">How-To Guides</h2>
          <p className="text-gray-600">Step-by-step instructions</p>
        </Link>
        <Link
          href="/kid-experiences"
          className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Kid Experiences</h2>
          <p className="text-gray-600">Real stories from peers</p>
        </Link>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-sm text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Start Your Journey</h2>
        <p className="text-gray-600 mb-6">
          Join us in creating a healthier future. Explore our resources, share your experiences, and track your daily
          habits to become a hygiene hero!
        </p>
        <Link
          href="/hygiene-basics"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}

