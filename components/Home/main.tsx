import React from 'react'
import Hero from "@/components/Hero";
import About from "@/components/About";
import Serives from "@/components/Serives";
import PostList from "@/components/PostList";
import Contact from "@/components/Contact";
import NavbarDesktop from '@/components/Navbar/NavbarDesktop';
import Footer from '../Footer';
const main = () => {
  return (
    <div>
      <NavbarDesktop/>
      <Hero/>
      <About/>
      <Serives/>
      <PostList/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default main