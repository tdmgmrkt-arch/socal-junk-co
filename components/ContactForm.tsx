"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { CheckCircle, MessageSquare } from "lucide-react"

const junkTypes = [
  "Furniture",
  "Appliances",
  "Yard Waste",
  "Construction Debris",
  "General Junk",
  "Other",
] as const

const estimatedSizes = [
  { value: "small", label: "Small - few items" },
  { value: "medium", label: "Medium - truck bed" },
  { value: "large", label: "Large - full trailer/room" },
] as const

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  zip: z.string().min(5, { message: "Please enter a valid ZIP code" }),
  junkType: z.string().min(1, { message: "Please select a type of junk" }),
  estimatedSize: z.string().min(1, { message: "Please select an estimated size" }),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "670f5da5-1976-4696-a844-bc0a26d3e402",
          subject: "New Quote Request - SoCal Junk Co",
          from_name: data.name,
          ...data,
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit form")
      }

      setIsSubmitted(true)
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {isSubmitted && (
        <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <p className="text-green-700 font-medium">
              Thank you! We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      )}

      <div className="p-4 bg-gold/10 border-l-4 border-gold rounded flex items-start gap-2">
        <MessageSquare className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-700">
          For faster service, text photos of your items to{" "}
          <a href="tel:+13102187822" className="font-semibold text-gold hover:underline">
            (310) 218-7822
          </a>{" "}
          after submitting.
        </p>
      </div>

      <div>
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          {...register("name")}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(310) 218-7822"
          {...register("phone")}
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="zip">ZIP Code *</Label>
        <Input
          id="zip"
          type="text"
          placeholder="92801"
          {...register("zip")}
          className={errors.zip ? "border-red-500" : ""}
        />
        {errors.zip && (
          <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="junkType">Type of Junk *</Label>
        <Select
          id="junkType"
          {...register("junkType")}
          className={errors.junkType ? "border-red-500" : ""}
        >
          <option value="">Select a type...</option>
          {junkTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
        {errors.junkType && (
          <p className="text-red-500 text-sm mt-1">{errors.junkType.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="estimatedSize">Estimated Size *</Label>
        <Select
          id="estimatedSize"
          {...register("estimatedSize")}
          className={errors.estimatedSize ? "border-red-500" : ""}
        >
          <option value="">Select an estimated size...</option>
          {estimatedSizes.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </Select>
        {errors.estimatedSize && (
          <p className="text-red-500 text-sm mt-1">{errors.estimatedSize.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your junk removal needs..."
          rows={5}
          {...register("message")}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Get Free Quote"}
      </Button>
    </form>
  )
}
