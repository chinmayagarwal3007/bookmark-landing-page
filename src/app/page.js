import Navbar from '@/components/navbar/Navbar'
import About from '@/components/about/About'
import Features from '@/components/features/Features'
import AddTo from '@/components/addTo/AddTo'
import Faq from '@/components/faq/Faq'
import NewsLetter from '@/components/newsletter/NewsLetter'
import Footer from '@/components/footer/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Features/>
      <AddTo/>
      <Faq/>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default page