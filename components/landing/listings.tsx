'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, MapPin, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Property } from '@/components/modals/property-details-modal'

const properties: Property[] = [
  {
    id: 'prop-1',
    title: 'The Malachite Villa',
    price: '$1,850,000',
    image: '/estate-1.jpg',
    location: 'Oak Hills Estates',
    specs: '4 Beds  /  3.5 Baths  /  3,200 SQFT',
    status: 'For Sale',
    statusBadge: 'buy',
    type: 'Modern Villa',
    premiumBadge: '+8% Value Boost',
    narrativeBullets: [
      'Fully optimized layout achieving an additional 300 sqft of functional space through premium spatial staging.',
      'Upgraded high-end fixtures and warm minimalist design details that captured 4 competing offers within 9 days.',
      'Staging concierge fully funded $45,000 in cosmetic upgrades upfront, yielding a final sale price $105,000 above baseline value.'
    ]
  },
  {
    id: 'prop-2',
    title: 'Minimalist Alabaster Penthouse',
    price: '$6,200 / mo',
    image: '/estate-2.jpg',
    location: 'Riverside District',
    specs: '3 Beds  /  2.5 Baths  /  2,100 SQFT',
    status: 'Exclusive Lease',
    statusBadge: 'rent',
    type: 'Penthouse',
    premiumBadge: 'Rent Premium Enabled',
    narrativeBullets: [
      'Flooded with natural light, featuring floor-to-ceiling panoramic glass walls looking out over the Riverside District.',
      'Bespoke alabaster marble countertops, white oak flooring, and integrated smart lighting.',
      'Fully staged with minimalist Scandinavian furniture that increased rental interest by 140%.'
    ]
  },
  {
    id: 'prop-3',
    title: 'The Emerald Estate',
    price: '$2,450,000',
    image: '/estate-3.jpg',
    location: 'Westlake Heights',
    specs: '5 Beds  /  5 Baths  /  4,800 SQFT',
    status: 'For Sale',
    statusBadge: 'buy',
    type: 'Estate',
    premiumBadge: '+12% Value Boost',
    narrativeBullets: [
      'Gated estate featuring private manicured gardens, custom water features, and expansive outdoor terrace spaces.',
      'Grand double-height foyer transitioning into open-concept hosting areas.',
      'Cosmetic prep included full exterior painting and primary bath renovation, netting an extra $120,000 at closing.'
    ]
  },
  {
    id: 'prop-4',
    title: 'Midtown Modern Loft',
    price: '$890,000',
    image: '/estate-4.jpg',
    location: 'Midtown Crossing',
    specs: '2 Beds  /  2 Baths  /  1,450 SQFT',
    status: 'Staging Success',
    statusBadge: 'sold',
    type: 'Penthouse',
    premiumBadge: '+9% Value Boost',
    narrativeBullets: [
      'Industrial character meets clean gallery aesthetics with 14ft exposed concrete ceilings.',
      'Custom ironwork dividers, custom cabinetry, and high-performance chef kitchen layout.',
      'Staged to appeal to high-net-worth urban professionals, selling at 104% of asking price.'
    ]
  },
  {
    id: 'prop-5',
    title: 'Oak Ridge Bungalow',
    price: '$1,150,000',
    image: '/hero-house.png',
    location: 'Oak Ridge',
    specs: '3 Beds  /  2 Baths  /  1,900 SQFT',
    status: 'For Sale',
    statusBadge: 'buy',
    type: 'Estate',
    premiumBadge: '+6% Value Boost',
    narrativeBullets: [
      'Perfectly scaled craftsman residence blending traditional details with a fully modernized interior footprint.',
      'Sunlight-filled breakfast nook opening directly onto a new wraparound deck.',
      'Cosmetic upgrades funded by staging concierge resulted in a +6% valuation increase on market launch.'
    ]
  },
  {
    id: 'prop-6',
    title: 'The Amber Residence',
    price: '$5,800 / mo',
    image: '/after-staging.png',
    location: 'Marina Boulevard',
    specs: '3 Beds  /  3 Baths  /  2,400 SQFT',
    status: 'Exclusive Lease',
    statusBadge: 'rent',
    type: 'Modern Villa',
    premiumBadge: 'Rent Premium Enabled',
    narrativeBullets: [
      'A warm-toned architectural statement overlooking the marina with private yacht slip access.',
      'Open kitchen-family layout, premium natural slate finishes, and integrated custom wine vault.',
      'Staged with mid-century modern curation to drive immediate long-term lease offers.'
    ]
  }
]

interface ListingsProps {
  onPropertyClick: (property: Property) => void
}

export function Listings({ onPropertyClick }: ListingsProps) {
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'buy' | 'rent' | 'sold'>('all')
  const [selectedType, setSelectedType] = useState<string>('all')

  const filteredProperties = properties.filter((item) => {
    const matchStatus = selectedStatus === 'all' || item.statusBadge === selectedStatus
    const matchType = selectedType === 'all' || item.type === selectedType
    return matchStatus && matchType
  })

  const types = ['all', 'Estate', 'Modern Villa', 'Penthouse']

  return (
    <section id="listings" className="py-20 md:py-32 bg-background border-t border-neutral-200/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-16">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] block mb-3">
            Featured Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary font-serif leading-[1.1] tracking-tight">
            Exclusive Listings.
          </h2>
          <p className="mt-6 text-neutral-500 font-light text-base sm:text-lg max-w-2xl leading-relaxed">
            Browse our mock collection of premium properties transformed and optimized for ultimate market value.
          </p>
        </div>

        {/* Filter Navigation Box */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-border pb-8 mb-10">
          {/* Main Status Tabs */}
          <div className="flex overflow-x-auto gap-2 bg-neutral-100 p-1.5 rounded-lg w-full md:w-auto shrink-0 scrollbar-none border border-neutral-200/60">
            {(['all', 'buy', 'rent', 'sold'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedStatus === status
                    ? 'bg-secondary text-secondary-foreground shadow-sm'
                    : 'text-neutral-500 hover:text-secondary hover:bg-neutral-200/50'
                }`}
              >
                {status === 'all' && 'All Properties'}
                {status === 'buy' && 'For Sale'}
                {status === 'rent' && 'For Rent'}
                {status === 'sold' && 'Recently Sold'}
              </button>
            ))}
          </div>

          {/* Micro Types Filters */}
          <div className="flex items-center gap-4 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <SlidersHorizontal className="size-4 text-primary shrink-0" />
            <div className="flex gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all whitespace-nowrap ${
                    selectedType === type
                      ? 'border-primary bg-primary/10 text-secondary'
                      : 'border-border/60 hover:border-primary/40 text-muted-foreground hover:text-secondary'
                  }`}
                >
                  {type === 'all' ? 'All Types' : type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Listings Responsive Carousel / Grid Stream */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedStatus}-${selectedType}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none gap-6 pb-6 md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 no-scrollbar scroll-smooth"
            >
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property) => (
                  <div
                    key={property.id}
                    onClick={() => onPropertyClick(property)}
                    className="snap-align-start shrink-0 w-[82vw] sm:w-[350px] md:w-auto rounded-2xl overflow-hidden group bg-transparent border-0 flex flex-col justify-between cursor-pointer"
                  >
                    {/* Image Box */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-primary/10 shadow-xs">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      
                      {/* Top Overlay Status Capsule */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-white/90 backdrop-blur-xs text-secondary text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs border border-primary/20">
                          {property.status}
                        </span>
                      </div>

                      {/* Detail Hover Overlay */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                        <Button
                          variant="secondary"
                          className="bg-white hover:bg-white text-secondary font-bold text-xs rounded-lg px-5 py-2.5 shadow-md flex items-center gap-1.5 border border-primary/25"
                        >
                          <span>View Details</span>
                          <ArrowRight className="size-3.5 text-primary" />
                        </Button>
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="pt-4 pb-2 px-1 space-y-1.5">
                      <div className="flex justify-between items-baseline">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          {property.type}
                        </span>
                        <span className="text-primary text-sm font-extrabold">
                          {property.price}
                        </span>
                      </div>
                      
                      <h3 className="text-base font-bold text-secondary tracking-tight group-hover:text-primary transition-colors">
                        {property.title}
                      </h3>

                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <MapPin className="size-3 text-primary shrink-0" />
                        <span className="truncate">{property.location}</span>
                      </div>

                      {/* Specs Divider Ribbon */}
                      <div className="text-[10px] font-semibold text-muted-foreground/80 border-t border-border/60 pt-2.5 mt-2.5 uppercase tracking-wider">
                        {property.specs}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-20 md:col-span-3 text-muted-foreground text-xs font-semibold">
                  No listings match the selected filters.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
