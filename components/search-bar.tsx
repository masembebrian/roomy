"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, CalendarIcon, Users, Minus, Plus } from "lucide-react"
import { format } from "date-fns"
import { useRouter } from "next/navigation"

interface SearchParams {
  location: string
  checkIn: Date | undefined
  checkOut: Date | undefined
  guests: {
    adults: number
    children: number
    infants: number
  }
}

const popularLocations = ["Kampala", "Entebbe", "Jinja", "Mukono", "Fort Portal", "Mbarara", "Gulu", "Mbale"]

export default function SearchBar() {
  const router = useRouter()
  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: "",
    checkIn: undefined,
    checkOut: undefined,
    guests: {
      adults: 2,
      children: 0,
      infants: 0,
    },
  })

  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false)
  const [checkInOpen, setCheckInOpen] = useState(false)
  const [checkOutOpen, setCheckOutOpen] = useState(false)
  const [guestsOpen, setGuestsOpen] = useState(false)

  const totalGuests = searchParams.guests.adults + searchParams.guests.children + searchParams.guests.infants

  const updateGuests = (type: keyof typeof searchParams.guests, increment: boolean) => {
    setSearchParams((prev) => ({
      ...prev,
      guests: {
        ...prev.guests,
        [type]: increment ? prev.guests[type] + 1 : Math.max(0, prev.guests[type] - 1),
      },
    }))
  }

  const handleSearch = () => {
    const params = new URLSearchParams()

    if (searchParams.location) params.set("location", searchParams.location)
    if (searchParams.checkIn) params.set("checkIn", searchParams.checkIn.toISOString())
    if (searchParams.checkOut) params.set("checkOut", searchParams.checkOut.toISOString())
    if (totalGuests > 0) params.set("guests", totalGuests.toString())

    router.push(`/explore?${params.toString()}`)
  }

  const filteredLocations = popularLocations.filter((location) =>
    location.toLowerCase().includes(searchParams.location.toLowerCase()),
  )

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Location */}
          <div className="relative">
            <Label htmlFor="location" className="text-sm font-medium mb-2 block">
              Where
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="location"
                placeholder="Search destinations"
                value={searchParams.location}
                onChange={(e) => {
                  setSearchParams((prev) => ({ ...prev, location: e.target.value }))
                  setShowLocationSuggestions(true)
                }}
                onFocus={() => setShowLocationSuggestions(true)}
                onBlur={() => setTimeout(() => setShowLocationSuggestions(false), 200)}
                className="pl-10"
              />

              {showLocationSuggestions && filteredLocations.length > 0 && (
                <Card className="absolute top-full left-0 right-0 z-50 mt-1 shadow-lg">
                  <CardContent className="p-2">
                    {filteredLocations.map((location) => (
                      <button
                        key={location}
                        className="w-full text-left px-3 py-2 hover:bg-muted rounded-md transition-colors"
                        onClick={() => {
                          setSearchParams((prev) => ({ ...prev, location }))
                          setShowLocationSuggestions(false)
                        }}
                      >
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          {location}
                        </div>
                      </button>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Check-in */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Check-in</Label>
            <Popover open={checkInOpen} onOpenChange={setCheckInOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {searchParams.checkIn ? format(searchParams.checkIn, "MMM dd") : "Add dates"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={searchParams.checkIn}
                  onSelect={(date) => {
                    setSearchParams((prev) => ({ ...prev, checkIn: date }))
                    setCheckInOpen(false)
                  }}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Check-out</Label>
            <Popover open={checkOutOpen} onOpenChange={setCheckOutOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {searchParams.checkOut ? format(searchParams.checkOut, "MMM dd") : "Add dates"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={searchParams.checkOut}
                  onSelect={(date) => {
                    setSearchParams((prev) => ({ ...prev, checkOut: date }))
                    setCheckOutOpen(false)
                  }}
                  disabled={(date) => date < new Date() || (searchParams.checkIn && date <= searchParams.checkIn)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Who</Label>
            <Popover open={guestsOpen} onOpenChange={setGuestsOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                  <Users className="mr-2 h-4 w-4" />
                  {totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}` : "Add guests"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="start">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Adults</div>
                      <div className="text-sm text-muted-foreground">Ages 13 or above</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateGuests("adults", false)}
                        disabled={searchParams.guests.adults <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{searchParams.guests.adults}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateGuests("adults", true)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Children</div>
                      <div className="text-sm text-muted-foreground">Ages 2-12</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateGuests("children", false)}
                        disabled={searchParams.guests.children <= 0}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{searchParams.guests.children}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateGuests("children", true)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Infants</div>
                      <div className="text-sm text-muted-foreground">Under 2</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateGuests("infants", false)}
                        disabled={searchParams.guests.infants <= 0}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{searchParams.guests.infants}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateGuests("infants", true)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-6 flex justify-center">
          <Button
            onClick={handleSearch}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
          >
            <Search className="mr-2 h-4 w-4" />
            Search Properties
          </Button>
        </div>

        {/* Quick Filters */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Entire homes
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Pet-friendly
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Free WiFi
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Pool
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

// Named export for compatibility
export { SearchBar }
