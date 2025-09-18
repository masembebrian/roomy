"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, Phone, Clock, User } from "lucide-react"

type Message = {
  id: number
  text: string
  sender: "user" | "support"
  timestamp: Date
  status?: "sent" | "delivered" | "read"
}

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you with any questions about Roomy. How can I assist you today?",
      sender: "support",
      timestamp: new Date(),
      status: "delivered",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [supportAgent] = useState({
    name: "Sarah K.",
    image: "/images/support-agent.png",
    status: "online",
    responseTime: "Usually responds in a few minutes",
  })

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputMessage,
        sender: "user",
        timestamp: new Date(),
        status: "sent",
      }
      setMessages((prev) => [...prev, newMessage])
      setInputMessage("")

      // Simulate typing indicator
      setIsTyping(true)

      // Simulate a response from support
      setTimeout(() => {
        setIsTyping(false)
        const supportMessage: Message = {
          id: Date.now() + 1,
          text: getSupportResponse(inputMessage),
          sender: "support",
          timestamp: new Date(),
          status: "delivered",
        }
        setMessages((prev) => [...prev, supportMessage])
      }, 2000)
    }
  }

  const getSupportResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes("booking") || message.includes("reservation")) {
      return "I can help you with booking questions! You can view and manage your bookings in your account dashboard. Is there a specific booking you need help with?"
    } else if (message.includes("payment") || message.includes("refund")) {
      return "For payment and refund inquiries, I can connect you with our billing team. What specific payment issue are you experiencing?"
    } else if (message.includes("cancel")) {
      return "I understand you need help with cancellation. Please note our cancellation policy varies by property. Can you share your booking reference number?"
    } else if (message.includes("host") || message.includes("property")) {
      return "I can help with host and property related questions. Are you looking to become a host or do you have questions about a specific property?"
    } else {
      return "Thank you for your message! I'm here to help with any questions about bookings, payments, properties, or general support. What would you like to know more about?"
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const quickActions = [
    "I need help with my booking",
    "Payment and billing questions",
    "How to become a host",
    "Property availability",
    "Cancellation policy",
  ]

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80 md:w-96 h-[500px] flex flex-col shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={supportAgent.image || "/placeholder.svg"} alt={supportAgent.name} />
                <AvatarFallback>
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-sm font-medium">{supportAgent.name}</CardTitle>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs opacity-90">{supportAgent.status}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Phone className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <div className="flex-1 flex flex-col">
            {/* Support Info */}
            <div className="px-4 py-2 bg-muted/50 border-b">
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="w-3 h-3 mr-1" />
                {supportAgent.responseTime}
              </div>
            </div>

            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-full px-4 py-3">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex items-end space-x-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                      >
                        {message.sender === "support" && (
                          <Avatar className="w-6 h-6">
                            <AvatarImage src={supportAgent.image || "/placeholder.svg"} alt="Support" />
                            <AvatarFallback className="text-xs">S</AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`rounded-lg px-3 py-2 ${
                            message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs opacity-70">{formatTime(message.timestamp)}</span>
                            {message.sender === "user" && message.status && (
                              <Badge variant="secondary" className="text-xs ml-2">
                                {message.status}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-end space-x-2">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={supportAgent.image || "/placeholder.svg"} alt="Support" />
                          <AvatarFallback className="text-xs">S</AvatarFallback>
                        </Avatar>
                        <div className="bg-muted rounded-lg px-3 py-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="px-4 py-2 border-t bg-muted/30">
                <p className="text-xs text-muted-foreground mb-2">Quick actions:</p>
                <div className="flex flex-wrap gap-1">
                  {quickActions.slice(0, 3).map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-6 px-2 bg-transparent"
                      onClick={() => setInputMessage(action)}
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <CardFooter className="p-3 border-t">
              <div className="flex w-full space-x-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={!inputMessage.trim()} size="icon">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardFooter>
          </div>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}
    </div>
  )
}

// Named export for compatibility
export { ChatBox }
