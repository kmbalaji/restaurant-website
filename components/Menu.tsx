'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('appetizers')

  const categories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'dosas', name: 'Dosas' },
    { id: 'curries', name: 'Curries' },
    { id: 'biryani', name: 'Biryani' },
    { id: 'breads', name: 'Breads' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ]

  const menuItems = {
    appetizers: [
      {
        name: 'Masala Vada',
        description: 'Crispy lentil fritters with onions, green chilies, and aromatic spices',
        price: '$8',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Samosa',
        description: 'Flaky pastry filled with spiced potatoes, peas, and aromatic spices',
        price: '$6',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Pakora',
        description: 'Crispy vegetable fritters made with chickpea flour and fresh vegetables',
        price: '$7',
        image: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }
    ],
    dosas: [
      {
        name: 'Masala Dosa',
        description: 'Crispy rice and lentil crepe filled with spiced potato mixture',
        price: '$12',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Onion Dosa',
        description: 'Thin crepe with caramelized onions and served with chutneys',
        price: '$10',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Rava Dosa',
        description: 'Semolina crepe with onions, green chilies, and curry leaves',
        price: '$11',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }
    ],
    curries: [
      {
        name: 'Butter Chicken',
        description: 'Tender chicken in rich tomato and butter gravy with aromatic spices',
        price: '$18',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Palak Paneer',
        description: 'Fresh spinach curry with homemade cottage cheese and spices',
        price: '$16',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Chicken Tikka Masala',
        description: 'Grilled chicken in creamy tomato-based curry with aromatic spices',
        price: '$19',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }
    ],
    biryani: [
      {
        name: 'Chicken Biryani',
        description: 'Aromatic basmati rice cooked with tender chicken and fragrant spices',
        price: '$22',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Vegetable Biryani',
        description: 'Fragrant rice with fresh vegetables and aromatic spices',
        price: '$18',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Lamb Biryani',
        description: 'Tender lamb pieces cooked with basmati rice and royal spices',
        price: '$24',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }
    ],
    breads: [
      {
        name: 'Naan',
        description: 'Soft and fluffy leavened flatbread baked in tandoor',
        price: '$3',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Roti',
        description: 'Whole wheat flatbread made with traditional techniques',
        price: '$2',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Paratha',
        description: 'Layered flatbread with ghee and served with yogurt',
        price: '$4',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }
    ],
    desserts: [
      {
        name: 'Gulab Jamun',
        description: 'Soft milk solids dumplings soaked in rose-flavored sugar syrup',
        price: '$8',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Rasmalai',
        description: 'Soft cottage cheese patties soaked in sweetened milk',
        price: '$9',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Kheer',
        description: 'Traditional rice pudding with cardamom and nuts',
        price: '$7',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }
    ],
    beverages: [
      {
        name: 'Masala Chai',
        description: 'Traditional spiced tea with milk and aromatic spices',
        price: '$4',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Lassi',
        description: 'Refreshing yogurt-based drink with mango or rose flavor',
        price: '$5',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Filter Coffee',
        description: 'Traditional South Indian filter coffee with milk',
        price: '$3',
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
            Discover our authentic South Indian dishes, carefully crafted with the finest spices and traditional recipes.
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