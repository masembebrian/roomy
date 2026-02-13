"use client"

import { useState, useCallback, useEffect } from "react"
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, Bed } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const containerStyle = {
  width: "100%",
  height: "100%",
}

const center = {
  lat: 0.3476,
  lng: 32.5825,
}

const apartments = [
  {
    id: 1,
    title: "Modern Apartment in Kampala",
    position: { lat: 0.3476, lng: 32.5825 },
    price: 50,
    image: "/placeholder.svg?height=150&width=200",
    rating: 4.5,
    reviews: 32,
    bedrooms: 2,
    guests: 4,
    superhost: true,
  },
  {
    id: 2,
    title: "Cozy Studio in Entebbe",
    position: { lat: 0.0611, lng: 32.4432 },
    price: 35,
    image: "/placeholder.svg?height=150&width=200",
    rating: 4.2,
    reviews: 18,
    bedrooms: 1,
    guests: 2,
    superhost: false,
  },
  {
    id: 3,
    title: "Spacious Family Home in Jinja",
    position: { lat: 0.4478, lng: 33.2027 },
    price: 75,
    image: "/placeholder.svg?height=150&width=200",
    rating: 4.8,
    reviews: 45,
    bedrooms: 3,
    guests: 6,
    superhost: true,
  },
  {
    id: 4,
    title: "Lakeside Villa in Mukono",
    position: { lat: 0.3533, lng: 32.755 },
    price: 120,
    image: "/placeholder.svg?height=150&width=200",
    rating: 4.9,
    reviews: 27,
    bedrooms: 4,
    guests: 8,
    superhost: true,
  },
  {
    id: 5,
    title: "Mountain View Cottage in Fort Portal",
    position: { lat: 0.6713, lng: 30.2755 },
    price: 65,
    image: "/placeholder.svg?height=150&width=200",
    rating: 4.6,
    reviews: 38,
    bedrooms: 2,
    guests: 4,
    superhost: false,
  },
]

interface MapProps {
  apiKey?: string
}

export default function Map({ apiKey }: MapProps) {
  const [selectedApartment, setSelectedApartment] = useState<(typeof apartments)[0] | null>(null)
  const [map, setMap] = useState<any | null>(null)
  const [fetchedApiKey, setFetchedApiKey] = useState<string>(apiKey || "")
  const [keyLoaded, setKeyLoaded] = useState(!!apiKey)

  useEffect(() => {
    if (apiKey) {
      setFetchedApiKey(apiKey)
      setKeyLoaded(true)
      return
    }

    const fetchApiKey = async () => {
      try {
        const response = await fetch("/api/maps/key")
        const data = await response.json()
        if (data?.key) {
          setFetchedApiKey(data.key)
          setKeyLoaded(true)
        }
      } catch (error) {
        console.error("[v0] Failed to fetch maps API key:", error)
        setKeyLoaded(true)
      }
    }

    fetchApiKey()
  }, [apiKey])

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: fetchedApiKey,
    libraries: ["places"],
  })

  const onLoad = useCallback((map: any) => {
    setMap(map)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  if (loadError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted rounded-lg">
        <div className="text-center">
          <MapPin className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Unable to load map</p>
          <p className="text-sm text-muted-foreground">Please check your connection</p>
        </div>
      </div>
    )
  }

  if (!isLoaded || !keyLoaded || !fetchedApiKey) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted rounded-lg">
        <div className="text-center">
          <div className="w-12 h-12 bg-muted-foreground/20 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
        disableDefaultUI: false,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: true,
      }}
    >
      {apartments.map((apartment) => (
        <Marker
          key={apartment.id}
          position={apartment.position}
          onClick={() => setSelectedApartment(apartment)}
          icon={{
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
                <text x="20" y="25" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#374151">$${apartment.price}</text>
              </svg>
            `)}`,
            scaledSize: new window.google.maps.Size(40, 40),
            anchor: new window.google.maps.Point(20, 20),
          }}
        />
      ))}

      {selectedApartment && (
        <InfoWindow
          position={selectedApartment.position}
          onCloseClick={() => setSelectedApartment(null)}
          options={{
            pixelOffset: new window.google.maps.Size(0, -10),
          }}
        >
          <Card className="w-64 border-0 shadow-none">
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src={selectedApartment.image || "/placeholder.svg"}
                  alt={selectedApartment.title}
                  width={200}
                  height={150}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                {selectedApartment.superhost && (
                  <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">Superhost</Badge>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2">{selectedApartment.title}</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {selectedApartment.guests}
                  </div>
                  <div className="flex items-center">
                    <Bed className="w-3 h-3 mr-1" />
                    {selectedApartment.bedrooms}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-xs font-medium">{selectedApartment.rating}</span>
                    <span className="text-xs text-muted-foreground ml-1">({selectedApartment.reviews})</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-sm">${selectedApartment.price}</div>
                    <div className="text-xs text-muted-foreground">per night</div>
                  </div>
                </div>
                <Link href={`/apartments/${selectedApartment.id}`} className="block mt-2">
                  <Button size="sm" className="w-full text-xs">
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}
