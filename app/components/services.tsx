"use client"

import { Card, CardContent } from "./ui/card"
import { useEffect, useRef, useState } from "react"

export function Services() {
  const services = [
    {
      title: "Residential",
      description: "Custom homes and renovations tailored to your lifestyle.",
    },
    {
      title: "Commercial",
      description: "Office buildings and retail spaces built to the highest standards.",
    },
    {
      title: "Project Management",
      description: "End-to-end project oversight ensuring timely completion.",
    },
  ]

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 bg-white"
    >
      <div className="w-full px-4 lg:pl-72 lg:pr-6 mx-auto">
        <h2 className="text-3xl font-bold mb-12">Services</h2>
        <div 
          className={`grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
