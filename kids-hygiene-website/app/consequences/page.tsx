import Image from "next/image"

const articles = [
  {
    title: "The Impact of Poor Oral Hygiene on Overall Health",
    author: "Dr. Sarah Johnson",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Poor oral hygiene can lead to various health issues beyond just cavities. Recent studies have shown links between gum disease and heart disease, diabetes, and even certain types of cancer...",
  },
  {
    title: "Skin Infections: A Common Result of Inadequate Hygiene",
    author: "Dr. Michael Lee",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Neglecting personal hygiene, especially in warm and humid environments, can lead to various skin infections. These range from minor irritations to more serious conditions like cellulitis...",
  },
  {
    title: "The Social and Psychological Effects of Poor Hygiene in Youth",
    author: "Dr. Emily Chen",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Poor hygiene in young people can have significant social and psychological impacts. It can lead to social isolation, bullying, and low self-esteem, which may have long-lasting effects on mental health...",
  },
]

export default function Consequences() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Why Good Hygiene Matters</h1>
      <p className="text-xl mb-8">Discover the real-world consequences of neglecting proper hygiene habits.</p>

      {articles.map((article, index) => (
        <div key={index} className="bg-beige-100 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">{article.title}</h2>
          <div className="flex items-center mb-4">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.author}
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <p className="text-green-500">{article.author}</p>
          </div>
          <p className="text-lg">{article.content}</p>
        </div>
      ))}

      <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Medical Outbreaks Related to Poor Hygiene</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>2014 Ebola outbreak in West Africa</li>
          <li>Annual influenza epidemics</li>
          <li>COVID-19 pandemic highlighting importance of hand hygiene</li>
          <li>Recurring norovirus outbreaks in schools and cruise ships</li>
        </ul>
      </div>
    </div>
  )
}

