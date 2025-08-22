"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ChevronDown, MapPin, Calendar, Users } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface SearchFilters {
  location: string
  checkIn: Date | undefined
  checkOut: Date | undefined
  guests: number
  priceRange: [number, number]
  bedrooms: number
  bathrooms: number
  propertyType: string
  amenities: string[]
  instantBook: boolean
  superhost: boolean
}

export default function SearchBar() {
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    checkIn: undefined,
    checkOut: undefined,
    guests: 1,
    priceRange: [0, 500],
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "",
    amenities: [],
    instantBook: false,
    superhost: false,
  })

  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const handleSearch = () => {
    console.log("Searching with filters:", filters)
    // Update active filters for display
    const active = []
    if (filters.location) active.push(`Location: ${filters.location}`)
    if (filters.checkIn) active.push(`Check-in: ${filters.checkIn.toDateString()}`)
    if (filters.guests > 1) active.push(`Guests: ${filters.guests}`)
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 500) {
      active.push(`Price: $${filters.priceRange[0]}-$${filters.priceRange[1]}`)
    }
    setActiveFilters(active)
  }

  const clearFilters = () => {
    setFilters({
      location: "",
      checkIn: undefined,
      checkOut: undefined,
      guests: 1,
      priceRange: [0, 500],
      bedrooms: 1,
      bathrooms: 1,
      propertyType: "",
      amenities: [],
      instantBook: false,
      superhost: false,
    })
    setActiveFilters([])
  }

  return (
    <div className="space-y-4">
      {/* Main Search Bar */}
      <div className="flex flex-col md:flex-row gap-2 p-2 border rounded-full bg-white shadow-lg">
        <div className="flex-1 flex items-center px-4 py-2">
          <MapPin className="h-4 w-4 text-gray-400 mr-2" />
          <Input
            type="text"
            placeholder="Where are you going?"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="border-none shadow-none focus-visible:ring-0"
          />
        </div>

        <div className="flex items-center px-4 py-2 border-l">
          <Calendar className="h-4 w-4 text-gray-400 mr-2" />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="p-0 h-auto font-normal">
                {filters.checkIn ? filters.checkIn.toDateString() : "Check-in"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent
                mode="single"
                selected={filters.checkIn}
                onSelect={(date) => setFilters({ ...filters, checkIn: date })}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex items-center px-4 py-2 border-l">
          <Users className="h-4 w-4 text-gray-400 mr-2" />
          <Select
            value={filters.guests.toString()}
            onValueChange={(value) => setFilters({ ...filters, guests: Number.parseInt(value) })}
          >
            <SelectTrigger className="border-none shadow-none">
              <SelectValue placeholder="Guests" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} guest{num > 1 ? "s" : ""}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button onClick={handleSearch} className="rounded-full px-6">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Advanced Filters */}
      <div className="flex flex-wrap gap-2 items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              Filters <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Price Range</h4>
                <Slider
                  min={0}
                  max={1000}
                  step={10}
                  value={filters.priceRange}
                  onValueChange={(value) => setFilters({ ...filters, priceRange: value as [number, number] })}
                />
                <div className="flex justify-between">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Bedrooms</Label>
                  <Select
                    value={filters.bedrooms.toString()}
                    onValueChange={(value) => setFilters({ ...filters, bedrooms: Number.parseInt(value) })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}+
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Bathrooms</Label>
                  <Select
                    value={filters.bathrooms.toString()}
                    onValueChange={(value) => setFilters({ ...filters, bathrooms: Number.parseInt(value) })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}+
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Property Type</Label>
                <Select
                  value={filters.propertyType}
                  onValueChange={(value) => setFilters({ ...filters, propertyType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Amenities</Label>
                <div className="grid grid-cols-2 gap-2">
                  {["Wi-Fi", "Air Conditioning", "Kitchen", "Washing Machine", "TV", "Parking", "Pool", "Gym"].map(
                    (amenity) => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <Checkbox
                          id={amenity}
                          checked={filters.amenities.includes(amenity)}
                          onCheckedChange={(checked) => {
                            setFilters({
                              ...filters,
                              amenities: checked
                                ? [...filters.amenities, amenity]
                                : filters.amenities.filter((a) => a !== amenity),
                            })
                          }}
                        />
                        <Label htmlFor={amenity} className="text-sm">
                          {amenity}
                        </Label>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="instantBook"
                    checked={filters.instantBook}
                    onCheckedChange={(checked) => setFilters({ ...filters, instantBook: checked as boolean })}
                  />
                  <Label htmlFor="instantBook">Instant Book</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="superhost"
                    checked={filters.superhost}
                    onCheckedChange={(checked) => setFilters({ ...filters, superhost: checked as boolean })}
                  />
                  <Label htmlFor="superhost">Superhost</Label>
                </div>
              </div>

              <Button onClick={clearFilters} variant="outline" className="w-full bg-transparent">
                Clear All Filters
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {activeFilters.map((filter, index) => (
          <Badge key={index} variant="secondary">
            {filter}
          </Badge>
        ))}
      </div>
    </div>
  )
}
