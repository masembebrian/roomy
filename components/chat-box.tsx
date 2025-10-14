"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your Roomy assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickActions = [
    { label: "Find Properties", value: "I want to find a property" },
    { label: "List My Property", value: "I want to list my property" },
    { label: "Booking Help", value: "I need help with my booking" },
    { label: "Payment Issues", value: "I have a payment question" },
  ]

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(
      () => {
        const botResponse = generateBotResponse(inputValue)
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("book") || input.includes("reservation")) {
      return "I can help you with bookings! You can browse properties on our Explore page. Once you find a property you like, click 'Book Now' and follow the steps. Need help finding something specific?"
    } else if (input.includes("list") || input.includes("host")) {
      return "Interested in becoming a host? That's great! Visit our 'Become a Host' page to get started. You can list your property in just a few minutes. Would you like me to guide you through the process?"
    } else if (input.includes("payment") || input.includes("price")) {
      return "For payment questions, we accept multiple payment methods including mobile money, cards, and bank transfers. You can view detailed pricing on each property listing. Do you have a specific payment concern?"
    } else if (input.includes("cancel") || input.includes("refund")) {
      return "Our cancellation policy varies by property. Check the specific cancellation terms on your booking confirmation. For immediate assistance, call us at +256 700 123 456 or visit our Help Center."
    } else if (input.includes("location") || input.includes("where")) {
      return "We have properties across Uganda! Popular locations include Kampala, Entebbe, Jinja, Mbarara, and Fort Portal. You can filter by location on our Explore page. Which area interests you?"
    } else {
      return "I'm here to help! You can ask me about finding properties, listing your property, bookings, payments, or any other questions. What would you like to know?"
    }
  }

  const handleQuickAction = (value: string) => {
    setInputValue(value)
    handleSendMessage()
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white animate-pulse">
            1
          </span>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] shadow-2xl flex flex-col">
          {/* Header */}
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-white">
                  <AvatarImage src="/images/support-agent.png" alt="Support" />
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Roomy Support</CardTitle>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                    <span>Online • Avg. response: 2 min</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white hover:bg-white/20"
                  onClick={() => window.open("tel:+256700123456")}
                >
                  <Phone className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white hover:bg-white/20"
                  onClick={handleClose}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages Area */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user" ? "bg-blue-600 text-white" : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-muted-foreground"}`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" />
                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce animation-delay-100" />
                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce animation-delay-200" />
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground text-center">Quick actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <Button
                      key={action.label}
                      variant="outline"
                      size="sm"
                      className="text-xs h-auto py-2 bg-transparent"
                      onClick={() => handleQuickAction(action.value)}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input Area */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
              <a href="tel:+256700123456" className="flex items-center gap-1 hover:text-primary">
                <Phone className="h-3 w-3" />
                <span>+256 700 123 456</span>
              </a>
              <a href="mailto:support@roomy.ug" className="flex items-center gap-1 hover:text-primary">
                <Mail className="h-3 w-3" />
                <span>support@roomy.ug</span>
              </a>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}

export { ChatBox }
