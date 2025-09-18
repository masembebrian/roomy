"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Heart, Users, Globe, Award, Mail, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FoundersLetterPage() {
  const founders = [
    {
      name: "CATHERINE NINSIIMA",
      title: "Co-Founder & COO",
      image: "/images/founder-sarah.png",
      bio: "Former hospitality executive with 15 years of experience in East Africa's tourism industry.",
      linkedin: "https://linkedin.com/in/catherine-ninsiima",
      twitter: "https://twitter.com/catherine-ninsiima",
      email: "catherineninsiima@roomy.ug",
    },
    {
      name: "MASEMBE BRIAN",
      title: "Co-Founder & CEO",
      image: "/images/founder-david.png",
      bio: "Tech entrepreneur and software engineer passionate about connecting communities through technology.",
      linkedin: "https://linkedin.com/in/masembe-brian",
      twitter: "https://twitter.com/masembe-brian",
      email: "brianmasembe@roomy.ug",
    },
  ]

  const milestones = [
    {
      year: "2024",
      title: "The Idea",
      description: "Recognized the need for trusted accommodation booking in Uganda during the pandemic.",
    },
    {
      year: "2024",
      title: "First Launch",
      description: "Launched with 50 properties in Kampala and Entebbe, serving our first 1,000 guests.",
    },
    {
      year: "2024",
      title: "Expansion",
      description: "Grew to 500+ properties across 10 cities, introduced experiences and host protection.",
    },
    {
      year: "2024",
      title: "Community Focus",
      description: "Launched social impact programs and reached 50,000+ satisfied guests.",
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Introduced AI-powered recommendations and expanded to neighboring countries.",
    },
  ]

  const achievements = [
    { icon: Users, number: "100,000+", label: "Happy Guests" },
    { icon: Globe, number: "1,500+", label: "Properties Listed" },
    { icon: Award, number: "4.9/5", label: "Average Rating" },
    { icon: Heart, number: "95%", label: "Host Satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Letter from Our Founders
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Journey to Transform Hospitality in Uganda
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A personal message from Brian and Catherine on building Roomy and our vision for the future
            </p>
            <div className="flex justify-center">
              <Image
                src="/images/founders-hero.png"
                alt="Roomy Founders"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Letter Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 shadow-lg">
              <CardContent className="space-y-8">
                <div className="flex items-center space-x-4 mb-8">
                  <Quote className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">A Message from Our Founders</p>
                    <p className="text-lg font-semibold">Brian Masembe & Catherine Ninsiima</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-lg leading-relaxed">Dear Roomy Community,</p>

                  <p>
                    When we started Roomy in 2024, Uganda's hospitality landscape looked very different. Travelers
                    struggled to find reliable, authentic accommodations, while property owners had limited platforms to
                    showcase their beautiful spaces. We saw an opportunity to bridge this gap and create something truly
                    special for our beloved Pearl of Africa.
                  </p>

                  <p>
                    Our journey began during the challenging times of the global pandemic. While the world seemed to
                    stand still, we recognized that people's desire to explore, connect, and experience new places would
                    only grow stronger. We envisioned a platform that wouldn't just facilitate bookings, but would
                    celebrate Uganda's rich culture, stunning landscapes, and warm hospitality.
                  </p>

                  <h3 className="text-2xl font-bold text-primary">Why We Built Roomy</h3>

                  <p>
                    Growing up in Uganda, we witnessed firsthand the incredible diversity of our country – from the
                    bustling streets of Kampala to the serene shores of Lake Victoria, from the adventure capital of
                    Jinja to the misty mountains of Kabale. Yet, these amazing destinations often remained hidden from
                    travelers who relied on international booking platforms that didn't understand our local context.
                  </p>

                  <p>
                    We wanted to create more than just another booking platform. Our vision was to build a community
                    where Ugandan hosts could share their stories, where travelers could discover authentic experiences,
                    and where every booking would contribute to local economic development.
                  </p>

                  <h3 className="text-2xl font-bold text-primary">Our Commitment to You</h3>

                  <p>
                    Every feature we build, every partnership we form, and every decision we make is guided by our core
                    values: authenticity, safety, community, and sustainability. We're not just facilitating
                    transactions; we're fostering connections that enrich lives and strengthen communities.
                  </p>

                  <p>
                    To our hosts: You are the heart of Roomy. Your dedication to providing exceptional experiences has
                    made us who we are today. We're committed to providing you with the tools, support, and protection
                    you need to succeed.
                  </p>

                  <p>
                    To our guests: Thank you for trusting us with your travel experiences. Your feedback, stories, and
                    recommendations continue to inspire us to innovate and improve every day.
                  </p>

                  <h3 className="text-2xl font-bold text-primary">Looking Forward</h3>

                  <p>
                    As we look to the future, we're excited about the possibilities ahead. We're working on new features
                    that will make booking even easier, experiences even more memorable, and our community even
                    stronger. From AI-powered recommendations to sustainable tourism initiatives, we're committed to
                    staying at the forefront of hospitality innovation.
                  </p>

                  <p>
                    But our biggest dreams extend beyond technology. We envision a Uganda where every region benefits
                    from tourism, where local communities are empowered, and where visitors leave with a deep
                    appreciation for our culture and natural beauty.
                  </p>

                  <p>
                    Thank you for being part of this incredible journey. Together, we're not just building a platform –
                    we're building the future of hospitality in Uganda.
                  </p>

                  <p className="text-lg font-semibold">With gratitude and excitement for what's ahead,</p>

                  <div className="flex flex-col sm:flex-row gap-8 mt-8">
                    {founders.map((founder) => (
                      <div key={founder.name} className="flex items-center space-x-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={founder.image || "/placeholder.svg"} alt={founder.name} />
                          <AvatarFallback>
                            {founder.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-lg">{founder.name}</p>
                          <p className="text-muted-foreground">{founder.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Profiles */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Founders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know the passionate individuals behind Roomy's mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder) => (
              <Card key={founder.name} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src={founder.image || "/placeholder.svg"} alt={founder.name} />
                    <AvatarFallback className="text-2xl">
                      {founder.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">{founder.name}</h3>
                    <p className="text-primary font-medium">{founder.title}</p>
                  </div>
                  <p className="text-muted-foreground">{founder.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={founder.linkedin} target="_blank">
                        <Linkedin className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={founder.twitter} target="_blank">
                        <Twitter className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`mailto:${founder.email}`}>
                        <Mail className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Key milestones in Roomy's growth and evolution</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent>
                        <Badge className="mb-2">{milestone.year}</Badge>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of Uganda's hospitality revolution. Whether you're a traveler or a host, there's a place for you in
            the Roomy community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/explore">Start Exploring</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/become-host">Become a Host</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
