import Link from "next/link"
import { ChefHat, Users, Calendar, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-red-700/90 z-10" />
        <div
          className="relative h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
        />
        <div className="container absolute inset-0 flex flex-col justify-center items-start z-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Club 4 Community Kitchen</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Bringing warmth and nourishment to our community through delicious, homemade meals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-red-700 hover:bg-gray-100">
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/volunteer">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              Club 4 Community Kitchen is dedicated to providing nutritious, delicious meals to those in need. We
              believe that everyone deserves access to good food made with care and compassion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <div className="bg-orange-100 p-4 rounded-full mb-4">
                  <ChefHat className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Creative Cooking</h3>
                <p className="text-gray-600 text-center">Over 100 delicious recipes across multiple categories</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-100 p-4 rounded-full mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
                <p className="text-gray-600 text-center">Bringing people together through food and service</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-100 p-4 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Regular Service</h3>
                <p className="text-gray-600 text-center">Consistent meal preparation and delivery schedule</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-100 p-4 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Made With Love</h3>
                <p className="text-gray-600 text-center">Every meal prepared with care and compassion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Menu Highlights</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We offer a diverse range of nutritious and delicious options to cater to various dietary needs and
              preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MenuCategory
              title="Hot Meals"
              description="Hearty, comforting dishes to warm both body and soul."
              image="/images/hot-meals.jpg"
              items={["Shepherd's pie", "Chicken pot pie", "Beef stew", "Jambalaya"]}
            />
            <MenuCategory
              title="Vegetarian Options"
              description="Flavorful plant-based dishes packed with nutrition."
              image="/images/vegetarian.jpg"
              items={["Lentil curry", "Vegetable lasagna", "Stuffed peppers", "Three-bean chili"]}
            />
            <MenuCategory
              title="Drinks"
              description="Refreshing beverages to complement every meal."
              image="/images/drinks.jpg"
              items={["Fruit-infused water", "Homemade lemonade", "Hot chocolate", "Iced tea"]}
            />
            <MenuCategory
              title="Desserts"
              description="Sweet treats made with care to finish the meal."
              image="/images/desserts.jpg"
              items={["Apple crisp", "Brownies", "Banana bread pudding", "Oatmeal cookies"]}
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-8">
              Whether you can volunteer your time, donate supplies, or contribute financially, there are many ways to
              support our community kitchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Link href="/volunteer">Volunteer</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white hover:bg-orange-700">
                <Link href="/donate">Donate</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white hover:bg-orange-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function MenuCategory({ title, description, image, items }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-2"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

