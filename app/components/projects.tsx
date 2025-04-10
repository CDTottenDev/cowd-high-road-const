import Image from "next/image"

import { Card, CardContent } from "./ui/card"

export function Projects() {
  const projects = [
    {
      title: "Outdoor Living",
      image: "/images/outdoor living.jpg",
    },
    {
      title: "Indoor Remodels",
      image: "/images/indoor remodels.jpg",
    },
    {
      title: "General Handyman Services",
      image: "/images/handyman.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="w-full px-4 lg:pl-72 lg:pr-6 mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
