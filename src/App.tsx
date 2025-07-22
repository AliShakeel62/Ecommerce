import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Ali's E-Commerce</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Cart ({count})
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
            Welcome to Your E-Commerce Store
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Tailwind CSS is successfully integrated! 🎉
          </p>
          
          {/* Test Counter */}
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Test Counter</h3>
            <p className="text-gray-600 mb-4">Count: {count}</p>
            <button 
              onClick={() => setCount(count + 1)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              Add to Cart
            </button>
          </div>

          {/* Product Grid Preview */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                  <div className="h-48 bg-gray-200 rounded-md mb-4"></div>
                  <h4 className="text-lg font-semibold mb-2">Product {item}</h4>
                  <p className="text-gray-600 mb-4">This is a sample product description.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">$99.99</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
