import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent } from "./ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="w-full px-4 lg:pl-72 lg:pr-6 mx-auto">
        <h2 className="text-3xl font-bold mb-12">Contact</h2>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              We'd love to hear about your project. Contact us for a free consultation and quote.
            </p>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <span className="font-medium mr-2">Phone:</span> (123) 456-7890
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-medium mr-2">Email:</span> info@highroadconstruction.com
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-medium mr-2">Address:</span> 123 Construction Ave, City, State 12345
              </p>
            </div>
          </div>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your project" rows={4} />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
