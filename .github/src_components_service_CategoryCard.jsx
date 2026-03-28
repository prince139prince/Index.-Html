import React from 'react'

const CategoryCard = ({ category, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="flex flex-col items-center space-y-2 cursor-pointer group"
    >
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300 shadow-md">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
        {category.name}
      </span>
    </div>
  )
}

export default CategoryCard