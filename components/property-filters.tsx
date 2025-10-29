"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Filter, X } from "lucide-react"

export interface FilterOptions {
  priceRange: [number, number]
  bedrooms: number[]
  bathrooms: number[]
  propertyTypes: string[]
  amenities: string[]
  instantBook: boolean
  superhost: boolean
}

interface PropertyFiltersProps {
  filters: FilterOptions
  onFiltersChange: (filters: FilterOptions) => void
  onClearFilters: () => void
}

const propertyTypes = ["Apartment", "House", "Villa", "Studio", "Cottage", "Penthouse"]

const amenitiesList = [
  "WiFi",
  "Kitchen",
  "Parking",
  "Air Conditioning",
  "Pool",
  "Gym",
  "Washer",
  "TV",
  "Workspace",
  "Garden",
]

export function PropertyFilters({ filters, onFiltersChange, onClearFilters }: PropertyFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const updateFilter = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const toggleArrayItem = (key: keyof FilterOptions, item: string | number) => {
    const currentArray = filters[key] as any[]
    const newArray = currentArray.includes(item) ? currentArray.filter((i) => i !== item) : [...currentArray, item]
    updateFilter(key, newArray)
  }

  const activeFiltersCount =
    (filters.bedrooms.length > 0 ? 1 : 0) +
    (filters.bathrooms.length > 0 ? 1 : 0) +
    (filters.propertyTypes.length > 0 ? 1 : 0) +
    (filters.amenities.length > 0 ? 1 : 0) +
    (filters.instantBook ? 1 : 0) +
    (filters.superhost ? 1 : 0) +
    (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 500000 ? 1 : 0)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative bg-transparent">
          <Filter className="w-4 h-4 mr-2" />
          Filters
          {activeFiltersCount > 0 && (
            <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center" variant="default">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>Refine your search to find the perfect property</SheetDescription>
        </SheetHeader>

        <div className="space-y-6 py-6">
          {/* Price Range */}
          <div>
            <Label className="text-base font-semibold mb-4 block">Price Range (per night)</Label>
            <div className="px-2">
              <Slider
                min={0}
                max={500000}
                step={10000}
                value={filters.priceRange}
                onValueChange={(value) => updateFilter("priceRange", value as [number, number])}
                className="mb-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>UGX {filters.priceRange[0].toLocaleString()}</span>
                <span>UGX {filters.priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Bedrooms */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Bedrooms</Label>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <Button
                  key={num}
                  variant={filters.bedrooms.includes(num) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleArrayItem("bedrooms", num)}
                >
                  {num}+
                </Button>
              ))}
            </div>
          </div>

          {/* Bathrooms */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Bathrooms</Label>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((num) => (
                <Button
                  key={num}
                  variant={filters.bathrooms.includes(num) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleArrayItem("bathrooms", num)}
                >
                  {num}+
                </Button>
              ))}
            </div>
          </div>

          {/* Property Types */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Property Type</Label>
            <div className="space-y-2">
              {propertyTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={filters.propertyTypes.includes(type)}
                    onCheckedChange={() => toggleArrayItem("propertyTypes", type)}
                  />
                  <Label htmlFor={type} className="text-sm font-normal cursor-pointer">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Amenities</Label>
            <div className="space-y-2">
              {amenitiesList.map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    id={amenity}
                    checked={filters.amenities.includes(amenity)}
                    onCheckedChange={() => toggleArrayItem("amenities", amenity)}
                  />
                  <Label htmlFor={amenity} className="text-sm font-normal cursor-pointer">
                    {amenity}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Special Options */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Special Options</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="instantBook"
                  checked={filters.instantBook}
                  onCheckedChange={(checked) => updateFilter("instantBook", checked)}
                />
                <Label htmlFor="instantBook" className="text-sm font-normal cursor-pointer">
                  Instant Book
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="superhost"
                  checked={filters.superhost}
                  onCheckedChange={(checked) => updateFilter("superhost", checked)}
                />
                <Label htmlFor="superhost" className="text-sm font-normal cursor-pointer">
                  Verified Host
                </Label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t">
          <Button variant="outline" className="flex-1 bg-transparent" onClick={onClearFilters}>
            <X className="w-4 h-4 mr-2" />
            Clear All
          </Button>
          <Button className="flex-1" onClick={() => setIsOpen(false)}>
            Show Results
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
