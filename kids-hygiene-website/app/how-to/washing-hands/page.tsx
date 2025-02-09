import Image from "next/image"

export default function WashingHands() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700 mb-6">How to Wash Your Hands Properly</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Hand washing steps"
          width={600}
          height={400}
          className="mx-auto rounded-lg mb-6"
        />

        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>Wet your hands with clean, running water (warm or cold).</li>
          <li>Apply soap and lather your hands by rubbing them together.</li>
          <li>
            Scrub all surfaces of your hands, including the palms, backs, fingers, between your fingers, and under your
            nails. Do this for at least 20 seconds.
          </li>
          <li>Rinse your hands well under clean, running water.</li>
          <li>Dry your hands using a clean towel or air dry them.</li>
        </ol>

        <div className="mt-6 bg-yellow-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Fun Fact!</h2>
          <p>
            Did you know? Singing the "Happy Birthday" song twice while washing your hands ensures you've scrubbed for
            about 20 seconds!
          </p>
        </div>
      </div>
    </div>
  )
}

