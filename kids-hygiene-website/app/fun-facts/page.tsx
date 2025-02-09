import Image from "next/image"

const funFacts = [
  {
    fact: "The first toothbrush with bristles was invented in China in 1498.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    fact: "Your hands can spread 1,000 times more germs when they are damp than when they are dry.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    fact: "The human body has about 2.6 million sweat glands!",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    fact: "Ancient Egyptians used a combination of mint, iris, and rock salt as toothpaste.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    fact: "The first commercial deodorant, 'Mum', was trademarked in 1888.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    fact: "Your feet can produce up to a pint of sweat per day!",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    fact: "The first liquid soap was patented in 1865 by William Shepphard.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    fact: "The average person spends about 38.5 days brushing their teeth over a lifetime.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    fact: "A sneeze can travel up to 100 miles per hour!",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    fact: "The first modern floss was invented in 1815 by a dentist named Levi Spear Parmly.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function FunFacts() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Fun Hygiene Facts</h1>
      <p className="text-xl mb-8">Discover interesting and surprising facts about hygiene!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {funFacts.map((item, index) => (
          <div key={index} className="bg-beige-100 p-6 rounded-lg shadow-md">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={`Fun fact ${index + 1}`}
              width={200}
              height={200}
              className="mx-auto rounded-lg mb-4"
            />
            <p className="text-lg text-center">{item.fact}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

