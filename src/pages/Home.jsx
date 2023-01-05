import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import CategoriesItem from '../components/CategoryItem'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <CategoriesItem/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
