"use client"
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Services from '../components/OurServices'
import ServicesCta from '../components/ServicesCta'
export default function Page() {
  return (
    <div>
      <Hero/>
      <Mission />
      <Services />
      <ServicesCta />
    </div>
  );
}