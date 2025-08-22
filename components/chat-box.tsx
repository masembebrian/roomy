'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type Message = {
  id: number
  text: string
  sender: 'user' | 'support'
}

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputMessage,
        sender: 'user',
      }
      setMessages([...messages, newMessage])
      setInputMessage('')
      
      // Simulate a response from support
      setTimeout(() => {
        const supportMessage: Message = {
          id: Date.now(),
          text: "Thank you for your message. Our support team will get back to you shortly.",
          sender: 'support',
        }
        setMessages(prevMessages => [...prevMessages, supportMessage])
      }, 1000)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Chat with Support</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full pr-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.sender === 'support' && (
                    <Avatar className="mr-2">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Support" />
                      <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`rounded-lg p-2 max-w-[70%] ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <div className="flex w-full space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage}>Send</Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Button onClick={() => setIsOpen(true)}>Chat with Support</Button>
      )}
    </div>
  )
}
