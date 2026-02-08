"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { useDirection } from "@/providers/direction-provider"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { increment, decrement, incrementByAmount } from "@/store/store"
import { usePosts } from "@/hooks/use-posts"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Moon, Sun, Layers, Globe, Server, Database, CheckCircle2 } from "lucide-react"

// --- Zod Schema ---
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

type FormData = z.infer<typeof formSchema>

export default function Home() {
  const { theme, setTheme } = useTheme()
  const { direction, toggleDirection } = useDirection()
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)
  const { data: posts, isLoading, isError } = usePosts()

  // --- Form Hook ---
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data)
    alert(`Form valid!\n${JSON.stringify(data, null, 2)}`)
  }

  return (
    <div className="container mx-auto p-8 space-y-8">
      <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
       
       
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title="Toggle Theme"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDirection}
            title="Toggle RTL/LTR"
          >
            <Globe className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle direction</span>
          </Button>
        </div>
      </header>


    </div>
  )
}
