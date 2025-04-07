"use client"

import { useState } from "react"
import { Calendar, Clock, Users, ChefHat, Truck, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function VolunteerPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    setFormSubmitted(true)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-red-700/90 z-10" />
        <div
          className="relative h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/volunteer-hero.jpg')" }}
        />
        <div className="container absolute inset-0 flex flex-col justify-center items-center z-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Volunteer With Us</h1>
          <p className="text-xl max-w-2xl text-center">
            Join our team and help make a difference in our community, one meal at a time.
          </p>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How You Can Help</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <VolunteerRole
              icon={<ChefHat className="h-8 w-8 text-orange-600" />}
              title="Kitchen Helper"
              description="Assist with food preparation, cooking, and packaging meals for distribution."
            />
            <VolunteerRole
              icon={<Truck className="h-8 w-8 text-orange-600" />}
              title="Delivery Driver"
              description="Help deliver prepared meals to shelters and community centers."
            />
            <VolunteerRole
              icon={<Users className="h-8 w-8 text-orange-600" />}
              title="Serving Team"
              description="Serve meals directly to those in need with compassion and care."
            />
            <VolunteerRole
              icon={<Calendar className="h-8 w-8 text-orange-600" />}
              title="Event Coordinator"
              description="Help organize special meal events and coordinate volunteers."
            />
            <VolunteerRole
              icon={<Clock className="h-8 w-8 text-orange-600" />}
              title="Administrative Support"
              description="Assist with scheduling, record-keeping, and other office tasks."
            />
            <VolunteerRole
              icon={<Heart className="h-8 w-8 text-orange-600" />}
              title="Fundraising"
              description="Help with fundraising activities to support our mission."
            />
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
            <h3 className="text-2xl font-bold mb-4">Volunteer Schedule</h3>
            <p className="mb-6">
              We have various shifts available throughout the week. You can volunteer as little or as much as your
              schedule allows.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Meal Preparation</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Calendar className="h-4 w-4 text-orange-600 mr-2" />
                    <span>Monday - Friday: 9:00 AM - 12:00 PM</span>
                  </li>
                  <li className="flex items-center">
                    <Calendar className="h-4 w-4 text-orange-600 mr-2" />
                    <span>Saturday: 8:00 AM - 11:00 AM</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Meal Service</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Calendar className="h-4 w-4 text-orange-600 mr-2" />
                    <span>Monday - Friday: 12:00 PM - 2:00 PM</span>
                  </li>
                  <li className="flex items-center">
                    <Calendar className="h-4 w-4 text-orange-600 mr-2" />
                    <span>Saturday: 11:30 AM - 1:30 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Join Our Volunteer Team</h2>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold text-green-700 mb-2">Thank You for Signing Up!</h3>
                <p className="text-green-600 mb-4">
                  We've received your volunteer application and will be in touch soon.
                </p>
                <Button onClick={() => setFormSubmitted(false)} className="bg-green-600 hover:bg-green-700">
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" />
                </div>

                <div className="space-y-2">
                  <Label>I'm interested in volunteering as:</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="kitchen" />
                      <label htmlFor="kitchen" className="text-sm">
                        Kitchen Helper
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="delivery" />
                      <label htmlFor="delivery" className="text-sm">
                        Delivery Driver
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="serving" />
                      <label htmlFor="serving" className="text-sm">
                        Serving Team
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="coordinator" />
                      <label htmlFor="coordinator" className="text-sm">
                        Event Coordinator
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="admin" />
                      <label htmlFor="admin" className="text-sm">
                        Administrative Support
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="fundraising" />
                      <label htmlFor="fundraising" className="text-sm">
                        Fundraising
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Availability</Label>
                  <RadioGroup defaultValue="weekdays">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekdays" id="weekdays" />
                      <Label htmlFor="weekdays">Weekdays</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekends" id="weekends" />
                      <Label htmlFor="weekends">Weekends</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="both" id="both" />
                      <Label htmlFor="both">Both</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Why would you like to volunteer with us?</Label>
                  <Textarea id="message" rows={4} />
                </div>

                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                  Submit Application
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function VolunteerRole({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="bg-orange-100 p-4 rounded-full mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

