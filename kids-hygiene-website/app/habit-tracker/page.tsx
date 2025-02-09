"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import confetti from "canvas-confetti"

const habits = [
  "Brush teeth in the morning",
  "Brush teeth before bed",
  "Floss teeth",
  "Take a shower",
  "Use deodorant",
  "Wash hands before meals",
  "Wash hands after using the bathroom",
  "Clean my room",
  "Change into clean clothes",
]

export default function HabitTracker() {
  const [checkedHabits, setCheckedHabits] = useState<string[]>([])
  const [showCongrats, setShowCongrats] = useState(false)

  useEffect(() => {
    if (checkedHabits.length === habits.length) {
      setShowCongrats(true)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    } else {
      setShowCongrats(false)
    }
  }, [checkedHabits])

  const handleCheck = (habit: string) => {
    setCheckedHabits((prev) => (prev.includes(habit) ? prev.filter((h) => h !== habit) : [...prev, habit]))
  }

  const resetChecklist = () => {
    setCheckedHabits([])
    setShowCongrats(false)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Daily Hygiene Habit Tracker</h1>
      <p className="text-xl mb-8 text-gray-600">Track your daily hygiene habits and build a healthier routine!</p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        {habits.map((habit, index) => (
          <div key={index} className="flex items-center space-x-2 mb-4">
            <Checkbox
              id={`habit-${index}`}
              checked={checkedHabits.includes(habit)}
              onCheckedChange={() => handleCheck(habit)}
            />
            <label
              htmlFor={`habit-${index}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {habit}
            </label>
          </div>
        ))}
      </div>

      <Button onClick={resetChecklist} className="bg-blue-500 text-white">
        Reset Checklist
      </Button>

      {showCongrats && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-25">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-twinkle"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `twinkle ${Math.random() * 2 + 1}s linear infinite`,
                  }}
                >
                  ✨
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Congratulations!</h2>
            <p className="text-lg mb-4">You've completed all your hygiene habits for today. Keep up the great work!</p>
            <Button onClick={() => setShowCongrats(false)} className="bg-blue-500 text-white hover:bg-blue-600">
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

