'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('appetizers')

  const categories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'main-courses', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ]

  const menuItems = {
    appetizers: [
      {
        name: 'Bruschetta al Pomodoro',
        description: 'Toasted bread topped with fresh tomatoes, basil, and extra virgin olive oil',
        price: '$12',
        image: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Carpaccio di Manzo',
        description: 'Thinly sliced raw beef with arugula, parmesan, and truffle oil',
        price: '$18',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Mozzarella di Bufala',
        description: 'Fresh buffalo mozzarella with prosciutto and aged balsamic',
        price: '$16',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }
    ],
    pasta: [
      {
        name: 'Spaghetti alla Carbonara',
        description: 'Classic Roman pasta with eggs, pecorino cheese, pancetta, and black pepper',
        price: '$24',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Fettuccine Alfredo',
        description: 'Homemade fettuccine in creamy parmesan sauce with butter',
        price: '$22',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Penne all\'Arrabbiata',
        description: 'Spicy tomato sauce with garlic, red chili peppers, and fresh basil',
        price: '$20',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }
    ],
    pizza: [
      {
        name: 'Margherita',
        description: 'Traditional pizza with tomato sauce, mozzarella, and fresh basil',
        price: '$18',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Quattro Stagioni',
        description: 'Four seasons pizza with artichokes, mushrooms, ham, and olives',
        price: '$22',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Diavola',
        description: 'Spicy pizza with salami, mozzarella, and red chili peppers',
        price: '$20',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }
    ],
    'main-courses': [
      {
        name: 'Osso Buco alla Milanese',
        description: 'Braised veal shanks in white wine and broth with gremolata',
        price: '$32',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Saltimbocca alla Romana',
        description: 'Veal cutlets wrapped with prosciutto and sage in white wine sauce',
        price: '$28',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Branzino al Forno',
        description: 'Whole roasted sea bass with herbs, lemon, and olive oil',
        price: '$34',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }
    ],
    desserts: [
      {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with mascarpone, coffee, and cocoa',
        price: '$12',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Panna Cotta',
        description: 'Silky vanilla custard with fresh berries and caramel sauce',
        price: '$10',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Gelato Artigianale',
        description: 'Homemade gelato with seasonal flavors',
        price: '$8',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }
    ],
    beverages: [
      {
        name: 'Italian Wines',
        description: 'Selection of fine Italian red and white wines',
        price: '$12-45',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Espresso',
        description: 'Traditional Italian espresso',
        price: '$4',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Limoncello',
        description: 'Homemade Italian lemon liqueur',
        price: '$8',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }
    ]
  }

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our authentic Italian dishes, carefully crafted with the finest ingredients and traditional recipes.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-900 ml-1">4.8</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-lg font-bold text-primary-600">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            All our dishes are prepared fresh daily using the finest ingredients.
          </p>
          <button className="btn-primary">
            Download Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  )
} 