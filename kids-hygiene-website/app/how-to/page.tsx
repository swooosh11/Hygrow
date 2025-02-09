import Image from "next/image"
import Link from "next/link"

const guides = [
  {
    title: "Washing Hands",
    slug: "washing-hands",
    color: "bg-blue-100",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "Brushing Teeth",
    slug: "brushing-teeth",
    color: "bg-green-100",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "Taking a Bath",
    slug: "taking-a-bath",
    color: "bg-yellow-100",
    image: "/placeholder.svg?height=150&width=200",
  },
  { title: "Flossing", slug: "flossing", color: "bg-pink-100", image: "/placeholder.svg?height=150&width=200" },
  {
    title: "Using Deodorant",
    slug: "using-deodorant",
    color: "bg-purple-100",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "Cleaning Your Room",
    slug: "cleaning-your-room",
    color: "bg-orange-100",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "Washing Your Face",
    slug: "washing-your-face",
    color: "bg-red-100",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "Trimming Nails",
    slug: "trimming-nails",
    color: "bg-indigo-100",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "Wearing Clean Clothes",
    slug: "wearing-clean-clothes",
    color: "bg-teal-100",
    image: "/placeholder.svg?height=150&width=200",
  },
]

export default function HowTo() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">How-To Guides</h1>
      <p className="text-xl mb-8 text-gray-600">
        Learn the right way to keep yourself clean and healthy with our easy-to-follow guides!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((guide, index) => (
          <Link
            key={index}
            href={`/how-to/${guide.slug}`}
            className={`${guide.color} p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300`}
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">{guide.title}</h2>
            <Image
              src={guide.image || "/placeholder.svg"}
              alt={guide.title}
              width={200}
              height={150}
              className="mx-auto rounded-lg"
            />
            <p className="mt-4 text-gray-600">Learn the proper way to {guide.title.toLowerCase()}!</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

