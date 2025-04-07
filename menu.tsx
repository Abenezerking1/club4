import { Utensils, Leaf, Coffee, IceCream } from "lucide-react"

export default function MenuPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-red-700/90 z-10" />
        <div
          className="relative h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/menu-hero.jpg')" }}
        />
        <div className="container absolute inset-0 flex flex-col justify-center items-center z-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Menu</h1>
          <p className="text-xl max-w-2xl text-center">
            Delicious, nutritious meals prepared with love and care for our community.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Utensils className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold">Hot Meals</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MenuItemList
                items={[
                  {
                    name: "Hearty chili with cornbread topping",
                    description: "Slow-cooked beef and bean chili topped with golden cornbread",
                  },
                  {
                    name: "Shepherd's pie with sweet potato crust",
                    description: "Ground beef and vegetables topped with mashed sweet potatoes",
                  },
                  {
                    name: "Chicken and vegetable stir-fry with rice",
                    description: "Tender chicken and fresh vegetables in a savory sauce",
                  },
                  {
                    name: "Beef and barley soup with fresh herbs",
                    description: "Hearty soup with chunks of beef, barley, and vegetables",
                  },
                  {
                    name: "Baked pasta with meat sauce and cheese",
                    description: "Pasta baked with rich meat sauce and melted cheese",
                  },
                ]}
              />
              <MenuItemList
                items={[
                  {
                    name: "Pulled pork sandwiches with coleslaw",
                    description: "Slow-cooked pulled pork on a bun with fresh coleslaw",
                  },
                  {
                    name: "Chicken pot pie with flaky crust",
                    description: "Creamy chicken and vegetable filling in a flaky pastry crust",
                  },
                  {
                    name: "Jambalaya with sausage and shrimp",
                    description: "Spicy rice dish with sausage, shrimp, and vegetables",
                  },
                  {
                    name: "Meatloaf with mashed potatoes and gravy",
                    description: "Classic meatloaf served with creamy mashed potatoes",
                  },
                  {
                    name: "Beef stew with root vegetables",
                    description: "Tender beef chunks with carrots, potatoes, and onions",
                  },
                ]}
              />
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Leaf className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold">Vegetarian Options</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MenuItemList
                items={[
                  {
                    name: "Lentil and vegetable curry with rice",
                    description: "Hearty lentils and vegetables in a flavorful curry sauce",
                  },
                  {
                    name: "Black bean and sweet potato enchiladas",
                    description: "Black beans and sweet potatoes wrapped in corn tortillas",
                  },
                  {
                    name: "Vegetable lasagna with ricotta",
                    description: "Layers of pasta, vegetables, and creamy ricotta cheese",
                  },
                  {
                    name: "Chickpea and spinach stew",
                    description: "Protein-rich chickpeas with spinach in a savory tomato base",
                  },
                  {
                    name: "Stuffed bell peppers with quinoa and beans",
                    description: "Bell peppers filled with quinoa, beans, and vegetables",
                  },
                ]}
              />
              <MenuItemList
                items={[
                  { name: "Eggplant parmesan", description: "Breaded eggplant slices with marinara sauce and cheese" },
                  {
                    name: "Vegetable pot pie with herb crust",
                    description: "Mixed vegetables in a creamy sauce with herb pastry",
                  },
                  {
                    name: "Three-bean chili with cornbread",
                    description: "Hearty chili with three types of beans and spices",
                  },
                  {
                    name: "Mushroom and barley risotto",
                    description: "Creamy barley with sautéed mushrooms and herbs",
                  },
                  {
                    name: "Roasted vegetable and hummus wraps",
                    description: "Roasted vegetables and hummus in a whole wheat wrap",
                  },
                ]}
              />
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Coffee className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold">Drinks</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MenuItemList
                items={[
                  {
                    name: "Fresh fruit-infused water",
                    description: "Water infused with seasonal fruits for natural flavor",
                  },
                  {
                    name: "Homemade lemonade",
                    description: "Classic lemonade made with fresh lemons and a touch of sweetness",
                  },
                  { name: "Iced tea with mint", description: "Refreshing iced tea with fresh mint leaves" },
                  {
                    name: "Hot chocolate with marshmallows",
                    description: "Rich hot chocolate topped with fluffy marshmallows",
                  },
                  { name: "Fruit smoothies", description: "Blended fruit smoothies made with yogurt and honey" },
                ]}
              />
              <MenuItemList
                items={[
                  { name: "Apple cider", description: "Warm or cold apple cider with cinnamon" },
                  { name: "Cucumber-lime refresher", description: "Refreshing cucumber and lime infused water" },
                  {
                    name: "Herbal tea selection",
                    description: "Various herbal teas for different tastes and benefits",
                  },
                  { name: "Coffee service", description: "Fresh brewed coffee with cream and sugar options" },
                  {
                    name: "Strawberry-basil lemonade",
                    description: "Lemonade infused with strawberries and fresh basil",
                  },
                ]}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <IceCream className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold">Desserts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MenuItemList
                items={[
                  {
                    name: "Apple crisp with oat topping",
                    description: "Baked apples with a crispy oat and cinnamon topping",
                  },
                  { name: "Brownies with walnuts", description: "Rich chocolate brownies with crunchy walnuts" },
                  { name: "Banana bread pudding", description: "Warm bread pudding with bananas and vanilla sauce" },
                  {
                    name: "Fresh fruit salad with honey-yogurt dip",
                    description: "Seasonal fruits with a honey-sweetened yogurt dip",
                  },
                  { name: "Oatmeal cookies", description: "Chewy oatmeal cookies with raisins and cinnamon" },
                ]}
              />
              <MenuItemList
                items={[
                  { name: "Rice pudding with cinnamon", description: "Creamy rice pudding with a hint of cinnamon" },
                  { name: "Peach cobbler", description: "Sweet peaches with a buttery cobbler topping" },
                  { name: "Chocolate chip cookies", description: "Classic cookies with semi-sweet chocolate chips" },
                  {
                    name: "Carrot cake with cream cheese frosting",
                    description: "Moist carrot cake topped with cream cheese frosting",
                  },
                  {
                    name: "Berry parfaits with granola",
                    description: "Layers of berries, yogurt, and crunchy granola",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dietary Information */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Dietary Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                We strive to accommodate various dietary needs and preferences. Our menu items can be adapted for:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6">
                <li>Gluten-free diets</li>
                <li>Dairy-free options</li>
                <li>Vegetarian and vegan meals</li>
                <li>Low-sodium requirements</li>
                <li>Diabetic-friendly options</li>
                <li>Food allergies (please inform us)</li>
              </ul>
              <p className="mt-6 text-orange-700 font-medium">
                Please let us know about any specific dietary requirements or allergies when you visit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function MenuItemList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-gray-600">{item.description}</p>
        </li>
      ))}
    </ul>
  )
}

