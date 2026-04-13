'use client'

import { useEffect, useRef } from 'react'

interface StepSectionProps {
  number: string
  title: string
  copy: string
  index: number
}

export default function StepSection({ number, title, copy, index }: StepSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        
        gsap.from(sectionRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out'
        })
      })
    })
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="w-full px-6 lg:px-12 py-24 border-b border-[#111111] bg-[#080808]"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-2 font-mono text-[10px] tracking-[0.4em] text-[#E8500A]">
          // PHASE {number}
        </div>
        
        <div className="lg:col-span-6">
          <h2 className="font-syne font-extrabold text-4xl lg:text-6xl text-[#F0F0F0] uppercase tracking-tighter mb-8">
            {title}
          </h2>
          <p className="font-inter text-[#888888] leading-relaxed max-w-xl">
            {copy}
          </p>
        </div>

        <div className="lg:col-span-4 flex justify-end">
          <div className="w-full aspect-video bg-[#0D0D0D] border border-[#1A1A1A] flex items-center justify-center">
            <span className="font-syne font-black text-8xl text-[#111111]">{number}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
