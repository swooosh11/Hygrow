import Image from "next/image"

export default function HygieneBasics() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Hygiene Basics</h1>

      <div className="bg-blue-50 p-8 rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">The Importance of Hygiene</h2>
        <p className="text-gray-600 mb-4">
          Good hygiene is crucial for maintaining health and well-being. It helps prevent the spread of diseases,
          promotes better mental health, and contributes to positive social interactions. By practicing proper hygiene,
          you're not just taking care of yourself, but also protecting those around you.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Reduces the risk of illness and infection</li>
          <li>Improves personal and social confidence</li>
          <li>Promotes a positive self-image</li>
          <li>Helps maintain healthy relationships</li>
          <li>Creates a positive impression on others</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Personal Hygiene</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Daily bathing or showering</li>
            <li>Proper handwashing technique</li>
            <li>Brushing teeth twice daily</li>
            <li>Flossing at least once a day</li>
            <li>Using deodorant</li>
            <li>Keeping nails clean and trimmed</li>
            <li>Washing hair regularly</li>
            <li>Wearing clean clothes</li>
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Environmental Hygiene</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Keeping living spaces clean and tidy</li>
            <li>Proper food handling and storage</li>
            <li>Regular cleaning of personal items</li>
            <li>Maintaining clean clothes and bedding</li>
            <li>Proper waste disposal</li>
            <li>Ensuring good ventilation</li>
            <li>Regular disinfection of high-touch surfaces</li>
            <li>Proper pet care and hygiene</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 p-8 rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Building Healthy Habits</h2>
        <p className="text-gray-600 mb-4">
          Developing good hygiene habits takes time and consistency. Here are some tips to help you build and maintain
          healthy habits:
        </p>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          <li>Start small and be consistent</li>
          <li>Create a daily routine</li>
          <li>Use reminders or checklists</li>
          <li>Make it fun with games or challenges</li>
          <li>Celebrate your progress</li>
          <li>Learn from setbacks</li>
          <li>Educate yourself about the benefits</li>
          <li>Be a role model for others</li>
        </ol>
      </div>

      <div className="bg-purple-50 p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Hygiene Myths</h2>
        <ul className="space-y-4">
          <li>
            <strong className="text-gray-700">Myth:</strong>
            <span className="text-gray-600"> You need to wash your hair every day.</span>
            <br />
            <strong className="text-gray-700">Fact:</strong>
            <span className="text-gray-600">
              {" "}
              The frequency of hair washing depends on your hair type and lifestyle. Some people may need to wash daily,
              while others can go several days between washes.
            </span>
          </li>
          <li>
            <strong className="text-gray-700">Myth:</strong>
            <span className="text-gray-600"> Antibacterial soap is always better than regular soap.</span>
            <br />
            <strong className="text-gray-700">Fact:</strong>
            <span className="text-gray-600">
              {" "}
              Regular soap is just as effective at removing germs. Overuse of antibacterial products can lead to
              antibiotic-resistant bacteria.
            </span>
          </li>
          <li>
            <strong className="text-gray-700">Myth:</strong>
            <span className="text-gray-600"> You don't need to floss if you brush regularly.</span>
            <br />
            <strong className="text-gray-700">Fact:</strong>
            <span className="text-gray-600">
              {" "}
              Flossing reaches areas between teeth that brushing can't, and is essential for maintaining good oral
              hygiene.
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

