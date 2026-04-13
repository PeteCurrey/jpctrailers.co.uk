'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

interface Spec {
  key: string
  value: string
}

interface CategorySectionProps {
  id: string
  label: string
  title: string
  description: string
  specs?: Spec[]
  customCTA?: boolean
}

export default function CategorySection({ 
  id, 
  label, 
  title, 
  description, 
  specs, 
  customCTA 
}: CategorySectionProps) {
  return (
    <section id={id} className="w-full px-6 lg:px-12 py-32 border-b border-[#111111] bg-[#080808]">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left: Info */}
        <div className="lg:col-span-6">
          <SectionLabel index={label.split('—')[0].replace('// ', '').trim()} label={label.split('—')[1]?.trim() || 'CATEGORY'} className="mb-12" />
          <h2 className="font-syne font-extrabold text-5xl lg:text-7xl text-[#F0F0F0] uppercase tracking-tighter mb-8 italic">
            {title}
          </h2>
          <p className="font-inter text-lg text-[#888888] leading-relaxed max-w-xl mb-12">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-6 pt-8">
            <Button href="/configure" variant="solid">
              START CONFIGURATION →
            </Button>
            {customCTA ? (
              <Button href="/commission" variant="outline">
                BESPOKE ENQUIRY
              </Button>
            ) : (
              <Button href="/gallery" variant="outline">
                VIEW BUILDS
              </Button>
            )}
          </div>
        </div>

        {/* Right: Specs / Visual */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          {specs ? (
            <div className="w-full space-y-px bg-[#1A1A1A] border border-[#1A1A1A]">
              {specs.map((spec, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-3 bg-[#0A0A0A] p-6 gap-4">
                  <div className="font-mono text-[10px] tracking-[0.2em] text-[#E8500A] uppercase">
                    {spec.key}
                  </div>
                  <div className="sm:col-span-2 font-inter text-sm text-[#F0F0F0]">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full aspect-video bg-[#0D0D0D] border border-[#1A1A1A] flex items-center justify-center p-12 text-center">
              <p className="font-mono text-[10px] tracking-[0.4em] text-[#333] uppercase leading-relaxed">
                // TECHNICAL DATA SHEET<br />
                AVAILABLE UPON REQUEST
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
