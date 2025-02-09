import { notFound } from "next/navigation"
import Image from "next/image"

const howToGuides = {
  "washing-hands": {
    title: "Washing Hands",
    steps: [
      "Wet your hands with clean, running water (warm or cold).",
      "Apply soap and lather your hands by rubbing them together.",
      "Scrub all surfaces of your hands for at least 20 seconds.",
      "Rinse your hands well under clean, running water.",
      "Dry your hands using a clean towel or air dry them.",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  "brushing-teeth": {
    title: "Brushing Teeth",
    steps: [
      "Squeeze a pea-sized amount of toothpaste onto your toothbrush.",
      "Hold your toothbrush at a 45-degree angle to your gums.",
      "Gently brush your teeth using short, circular motions.",
      "Brush all surfaces of your teeth: outer, inner, and chewing surfaces.",
      "Brush your tongue to remove bacteria and freshen your breath.",
      "Spit out the toothpaste and rinse your mouth with water.",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  "taking-a-bath": {
    title: "Taking a Bath",
    steps: [
      "Fill the bathtub with warm water.",
      "Test the water temperature with your elbow to ensure it's not too hot.",
      "Get into the tub and use a washcloth or sponge to clean your body.",
      "Pay extra attention to areas like underarms, feet, and private parts.",
      "Rinse off all the soap thoroughly.",
      "Dry yourself with a clean towel after getting out of the tub.",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  // Add more guides here...
}

export default function HowToGuide({ params }: { params: { slug: string } }) {
  const guide = howToGuides[params.slug as keyof typeof howToGuides]

  if (!guide) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">How to: {guide.title}</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <Image
          src={guide.image || "/placeholder.svg"}
          alt={`${guide.title} steps`}
          width={600}
          height={400}
          className="mx-auto rounded-lg mb-6"
        />

        <ol className="list-decimal list-inside space-y-4 text-lg">
          {guide.steps.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>

        <div className="mt-6 bg-yellow-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Pro Tip!</h2>
          <p className="text-gray-700">
            Make {guide.title.toLowerCase()} a fun activity by singing your favorite song or setting a timer to ensure
            you spend enough time on this important hygiene task!
          </p>
        </div>
      </div>
    </div>
  )
}

