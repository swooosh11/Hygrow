"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface BlogPost {
  id: number
  title: string
  subtitle: string
  content: string
  likes: number
}

export default function KidExperiences() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [newPost, setNewPost] = useState({ title: "", subtitle: "", content: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const post: BlogPost = {
      id: Date.now(),
      ...newPost,
      likes: 0,
    }
    setPosts([post, ...posts])
    setNewPost({ title: "", subtitle: "", content: "" })
  }

  const handleLike = (id: number) => {
    setPosts(posts.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post)))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Kid Experiences</h1>
      <p className="text-xl mb-8">Share your hygiene journey and read about others' experiences!</p>

      <form onSubmit={handleSubmit} className="bg-beige-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Share Your Story</h2>
        <Input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          className="mb-4"
        />
        <Input
          type="text"
          placeholder="Subtitle"
          value={newPost.subtitle}
          onChange={(e) => setNewPost({ ...newPost, subtitle: e.target.value })}
          className="mb-4"
        />
        <Textarea
          placeholder="Share your experience..."
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          className="mb-4"
        />
        <Button type="submit">Share Your Story</Button>
      </form>

      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">{post.title}</h3>
            <h4 className="text-xl text-green-500 mb-4">{post.subtitle}</h4>
            <p className="mb-4">{post.content}</p>
            <Button onClick={() => handleLike(post.id)} variant="outline">
              ❤️ {post.likes} {post.likes === 1 ? "Like" : "Likes"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

