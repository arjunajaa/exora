'use client';

import { useState } from 'react';
import Image from 'next/image';

// Product data structure
const productData = {
  natural: {
    name: "Natural Ingredients",
    image: "/catalog/rempah rempah.jpg",
    color: "green",
    products: [
      { id: 1, name: "Black Pepper", category: "Spices & Herbs", image: "/catalog/blackpepper.jpg" },
      { id: 2, name: "White Pepper", category: "Spices & Herbs", image: "/catalog/white pepper.jpg" },
      { id: 3, name: "Cinnamon Stick", category: "Spices & Herbs", image: "/catalog/Cinnamon Stick.jpg" },
      { id: 4, name: "Cinnamon Powder", category: "Spices & Herbs", image: "/catalog/Cinnamon Powder.jpg" },
      { id: 5, name: "Cloves", category: "Spices & Herbs", image: "/catalog/Cloves.jpg" },
      { id: 6, name: "Dried Ginger", category: "Spices & Herbs", image: "/catalog/Dried Ginger.jpg" },
      { id: 7, name: "Dried Turmeric", category: "Spices & Herbs", image: "/catalog/Dried Turmeric.jpg" },
      { id: 8, name: "Cardamom", category: "Spices & Herbs", image: "/catalog/Cardamom.jpg" },
      { id: 9, name: "Coriander", category: "Spices & Herbs", image: "/catalog/Coriander.jpg" },
      { id: 10, name: "Nutmeg", category: "Spices & Herbs", image: "/catalog/Nutmeg.jpg" },
      { id: 11, name: "Coconut Flour", category: "Coconut Products", image: "/catalog/Coconut Flour.jpg" },
      { id: 12, name: "Virgin Coconut Oil (VCO)", category: "Coconut Products", image: "/catalog/Virgin Coconut Oil (VCO).jpg" },
      { id: 13, name: "RBD Coconut Oil", category: "Coconut Products", image: "/catalog/RBD Coconut Oil.jpg" },
      { id: 14, name: "Coconut Milk Powder", category: "Coconut Products", image: "/catalog/Coconut Milk Powder.jpg" },
      { id: 15, name: "Coconut Sugar", category: "Coconut Products", image: "/catalog/Coconut Sugar.jpg" },
      { id: 16, name: "Palm Sugar", category: "Coconut Products", image: "/catalog/Palm Sugar.jpg" },
      { id: 17, name: "Robusta Roasted Coffee", category: "Coffee & Tea", image: "/catalog/Robusta Roasted Coffee.jpg" },
      { id: 18, name: "Arabica Roasted Coffee", category: "Coffee & Tea", image: "/catalog/Arabica Roasted Coffee.jpg" },
      { id: 19, name: "Green Coffee Beans", category: "Coffee & Tea", image: "/catalog/Green Coffee Beans.jpg" },
      { id: 20, name: "Black Tea", category: "Coffee & Tea", image: "/catalog/Black Tea.jpg" },
      { id: 21, name: "Rosella Tea", category: "Coffee & Tea", image: "/catalog/Rosella Tea.jpg" },
      { id: 22, name: "Ginger Tea", category: "Coffee & Tea", image: "/catalog/Ginger Tea.jpg" },
      { id: 23, name: "Lemongrass Tea", category: "Coffee & Tea", image: "/catalog/Lemongrass Tea.jpg" }
    ]
  },  frozen: {
    name: "Premium Frozen",
    image: "/catalog/frozenfood.jpg",
    color: "blue",
    products: [
      { id: 24, name: "Frozen Vannamei Shrimp", category: "Frozen Seafood", image: "/catalog/Frozen Vannamei Shrimp.jpg" },
      { id: 25, name: "Tuna Loin", category: "Frozen Seafood", image: "/catalog/Tuna Loin.jpg" },
      { id: 26, name: "Tuna Saku", category: "Frozen Seafood", image: "/catalog/Tuna Saku.jpg" },
      { id: 27, name: "Dory Fillet", category: "Frozen Seafood", image: "/catalog/Dory Fillet.jpg" },
      { id: 28, name: "Catfish Fillet", category: "Frozen Seafood", image: "/catalog/Catfish Fillet.jpg" },
      { id: 29, name: "Squid Rings", category: "Frozen Seafood", image: "/catalog/Squid Rings.jpg" },
      { id: 30, name: "Baby Octopus", category: "Frozen Seafood", image: "/catalog/Baby Octopus.jpg" },
      { id: 31, name: "Frozen Purple Sweet Potato", category: "Frozen Vegetables", image: "/catalog/Frozen Purple Sweet Potato.jpg" },
      { id: 32, name: "Frozen Cassava", category: "Frozen Vegetables", image: "/catalog/Frozen Cassava.jpg" },
      { id: 33, name: "Edamame", category: "Frozen Vegetables", image: "/catalog/Edamame.jpg" },
      { id: 34, name: "Sweet Corn Kernels", category: "Frozen Vegetables", image: "/catalog/Sweet Corn Kernels.jpg" },
      { id: 35, name: "Sliced Carrots", category: "Frozen Vegetables", image: "/catalog/Sliced Carrots.jpg" },
      { id: 36, name: "Green Beans", category: "Frozen Vegetables", image: "/catalog/Green Beans.jpg" },
      { id: 37, name: "Banana Slices (IQF)", category: "Frozen Fruits", image: "/catalog/Banana Slices (IQF).jpg" },
      { id: 38, name: "Harum Manis Mango", category: "Frozen Fruits", image: "/catalog/Harum Manis Mango.jpg" },
      { id: 39, name: "Pineapple Chunks", category: "Frozen Fruits", image: "/catalog/Pineapple Chunks.jpg" },
      { id: 40, name: "Avocado Pulp", category: "Frozen Fruits", image: "/catalog/Avocado Pulp.jpg" },
      { id: 41, name: "Diced Papaya", category: "Frozen Fruits", image: "/catalog/Diced Papaya.jpg" }
    ]
  },  grocery: {
    name: "Asian Grocery",
    image: "/catalog/grocery.jpg",
    color: "orange",
    products: [
      { id: 42, name: "Instant Noodles - Chicken", category: "Processed Foods", image: "/catalog/Instant Noodles - Chicken.jpg" },
      { id: 43, name: "Instant Noodles - Beef", category: "Processed Foods", image: "/catalog/Instant Noodles - Beef.jpg" },
      { id: 44, name: "Instant Noodles - Seafood", category: "Processed Foods", image: "/catalog/Instant Noodles - Seafood.jpg" },
      { id: 45, name: "Rendang Seasoning", category: "Processed Foods", image: "/catalog/Rendang Seasoning.jpg" },
      { id: 46, name: "Curry Seasoning", category: "Processed Foods", image: "/catalog/Curry Seasoning.jpg" },
      { id: 47, name: "Soto Seasoning", category: "Processed Foods", image: "/catalog/Soto Seasoning.jpg" },
      { id: 48, name: "Raw Crackers (Kerupuk)", category: "Processed Foods", image: "/catalog/Raw Crackers (Kerupuk).jpg" },
      { id: 49, name: "Palm Cooking Oil", category: "Staple Products", image: "/catalog/Palm Cooking Oil.jpg" },
      { id: 50, name: "Palm Sugar Blocks", category: "Staple Products", image: "/catalog/Palm Sugar Blocks.jpg" },
      { id: 51, name: "Liquid Palm Sugar", category: "Staple Products", image: "/catalog/Liquid Palm Sugar.jpg" },
      { id: 52, name: "Sweet Soy Sauce", category: "Staple Products", image: "/catalog/Sweet Soy Sauce.jpg" },
      { id: 53, name: "Chili Sauce", category: "Staple Products", image: "/catalog/Chili Sauce.jpg" },
      { id: 54, name: "Instant Ginger Powder", category: "Traditional Beverages", image: "/catalog/Instant Ginger Powder.jpg" },
      { id: 55, name: "Coffee Sachets (Robusta)", category: "Traditional Beverages", image: "/catalog/Coffee Sachets (Robusta).jpg" },
      { id: 56, name: "Herbal Tea Mix", category: "Traditional Beverages", image: "/catalog/Herbal Tea Mix.jpg" }
    ]
  },  industrial: {
    name: "Eco Living & Industrial",
    image: "/catalog/industrial.jpg",
    color: "emerald",
    products: [
      { id: 57, name: "BBQ Coconut Charcoal Briquettes", category: "Charcoal & Fuel", image: "/catalog/BBQ Coconut Charcoal Briquettes.jpg" },
      { id: 58, name: "Shisha Coconut Charcoal Briquettes", category: "Charcoal & Fuel", image: "/catalog/Shisha Coconut Charcoal Briquettes.jpg" },
      { id: 59, name: "Compressed Sawdust", category: "Charcoal & Fuel", image: "/catalog/Compressed Sawdust.jpg" },
      { id: 60, name: "Bamboo Spoons", category: "Natural Home Items", image: "/catalog/Bamboo Spoons.jpg" },
      { id: 61, name: "Bamboo Forks", category: "Natural Home Items", image: "/catalog/Bamboo Forks.jpg" },
      { id: 62, name: "Wooden Cutting Boards", category: "Natural Home Items", image: "/catalog/Wooden Cutting Boards.jpg" },
      { id: 63, name: "Bamboo Straws", category: "Natural Home Items", image: "/catalog/Bamboo Straws.jpg" },
      { id: 64, name: "Rattan Baskets", category: "Crafts & Decor", image: "/catalog/Rattan Baskets.jpg" },
      { id: 65, name: "Bamboo Storage Containers", category: "Crafts & Decor", image: "/catalog/Bamboo Storage Containers.jpg" },
      { id: 66, name: "Handmade Eco-Decor", category: "Crafts & Decor", image: "/catalog/Handmade Eco-Decor.jpg" }
    ]
  }
};

export default function Product() {  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get all products for display
  const getAllProducts = () => {
    return Object.values(productData).flatMap(category => category.products);
  };

  const getFilteredProducts = () => {
    let products = activeCategory === 'all' 
      ? getAllProducts() 
      : productData[activeCategory as keyof typeof productData]?.products || [];

    // Filter by search query
    if (searchQuery.trim()) {
      products = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return products;
  };

  const categories = [
    { id: 'all', name: 'All Products', color: 'gray' },
    { id: 'natural', name: 'Natural Ingredients', color: 'green' },
    { id: 'frozen', name: 'Premium Frozen', color: 'blue' },
    { id: 'grocery', name: 'Asian Grocery', color: 'orange' },
    { id: 'industrial', name: 'Eco Living & Industrial', color: 'emerald' }
  ];

  const getColorClasses = (color: string, isActive = false) => {
    const colors: { [key: string]: string } = {
      gray: isActive ? 'bg-gray-500/30 border-gray-400' : 'border-gray-500/30 hover:bg-gray-500/20',
      green: isActive ? 'bg-green-500/30 border-green-400' : 'border-green-500/30 hover:bg-green-500/20',
      blue: isActive ? 'bg-blue-500/30 border-blue-400' : 'border-blue-500/30 hover:bg-blue-500/20',
      orange: isActive ? 'bg-orange-500/30 border-orange-400' : 'border-orange-500/30 hover:bg-orange-500/20',
      emerald: isActive ? 'bg-emerald-500/30 border-emerald-400' : 'border-emerald-500/30 hover:bg-emerald-500/20'
    };
    return colors[color] || colors.gray;
  };

  return (
    <div className="min-h-screen pt-32 px-4 font-poppins">
      <div className="max-w-7xl mx-auto">        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Product Catalog</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto font-medium">
            Explore our comprehensive range of premium Indonesian products across all categories
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 bg-white/20 border border-white/30 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium backdrop-blur-lg"
            />
            <svg className="w-5 h-5 text-white/60 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-2 md:px-6 md:py-3 rounded-full font-semibold text-white border-2 transition-all duration-300 backdrop-blur-lg text-sm md:text-base ${getColorClasses(category.color, activeCategory === category.id)}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>{/* Products Grid */}
        {getFilteredProducts().length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {getFilteredProducts().map((product) => (
              <div
                key={product.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-white/70 text-sm font-medium">{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mb-16 py-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 max-w-2xl mx-auto">
              <svg className="w-16 h-16 text-white/60 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-bold text-white mb-4">Product Not Found</h3>
              <p className="text-white/80 font-medium mb-6">
                Can&apos;t find the product you&apos;re looking for? We might have it in stock or can source it for you.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 backdrop-blur-lg border border-white/30 hover:scale-105"
              >
                <span>Contact Us</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        )}        {/* CTA Section */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto font-medium">
            We have an extensive network of suppliers and may be able to source specific products for your business needs. Contact us to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-lg border border-white/30 hover:scale-105"
            >
              <span>Contact Us</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://wa.me/6282235490564"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 border-2 border-white/30 hover:border-white/50 hover:scale-105"
            >
              <span>WhatsApp Us</span>
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
