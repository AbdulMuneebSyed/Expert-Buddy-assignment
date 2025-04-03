"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, Send, Filter, Search } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: string;
  text: string;
  timestamp: Date;
}

interface ChatContact {
  id: string;
  name: string;
  image: string;
  online: boolean;
  lastMessage: string;
  unread: boolean;
  price: number | null;
}

export function ChatInterface({ onClose }: { onClose: () => void }) {
  const [message, setMessage] = useState("");
  const [activeContact, setActiveContact] = useState<string | null>("contact1");
  const [searchQuery, setSearchQuery] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const contacts: ChatContact[] = [
    {
      id: "contact1",
      name: "Aspen Stanton",
      image: "/placeholder.svg?height=40&width=40",
      online: true,
      lastMessage: "Hello...",
      unread: false,
      price: null,
    },
    {
      id: "contact2",
      name: "Parvipan Deep S.",
      image: "/placeholder.svg?height=40&width=40",
      online: true,
      lastMessage: "Hello...",
      unread: false,
      price: 219,
    },
    {
      id: "contact3",
      name: "Emerson Rhiel Madsen",
      image: "/placeholder.svg?height=40&width=40",
      online: false,
      lastMessage: "Hello...",
      unread: false,
      price: 219,
    },
    {
      id: "contact4",
      name: "Jakob Torff",
      image: "/placeholder.svg?height=40&width=40",
      online: true,
      lastMessage: "Hello...",
      unread: false,
      price: 219,
    },
    {
      id: "contact5",
      name: "Cooper George",
      image: "/placeholder.svg?height=40&width=40",
      online: true,
      lastMessage: "Hello...",
      unread: false,
      price: 219,
    },
  ];

  const [messages, setMessages] = useState<Record<string, ChatMessage[]>>({
    contact1: [
      {
        id: "1",
        sender: "contact1",
        text: "Hello, how can I help you with your annotated bibliography project?",
        timestamp: new Date(Date.now() - 3600000),
      },
    ],
    contact2: [
      {
        id: "1",
        sender: "contact2",
        text: "Hi there! I'm available to discuss your project requirements.",
        timestamp: new Date(Date.now() - 7200000),
      },
    ],
  });

  const sendMessage = () => {
    if (message.trim() === "" || !activeContact) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: message,
      timestamp: new Date(),
    };

    setMessages((prev) => ({
      ...prev,
      [activeContact]: [...(prev[activeContact] || []), newMessage],
    }));

    setMessage("");

    // Simulate reply after 1 second
    setTimeout(() => {
      const replyMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: activeContact,
        text: "Thank you for your message. I'll review your requirements and get back to you shortly.",
        timestamp: new Date(),
      };

      setMessages((prev) => ({
        ...prev,
        [activeContact]: [...(prev[activeContact] || []), replyMessage],
      }));
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, activeContact]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>

      <div className="fixed bottom-0 w-full sm:relative sm:w-[500px] bg-white rounded-t-lg sm:rounded-lg shadow-xl overflow-hidden max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-medium">Chats</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="w-1/3 border-r overflow-y-auto">
            <div className="p-2 sticky top-0 bg-white border-b">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name..."
                  className="w-full pl-9 pr-4 py-2 text-sm border rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex justify-end mt-1">
                <button className="text-xs text-gray-500 flex items-center">
                  <Filter className="h-3 w-3 mr-1" />
                  Filter
                </button>
              </div>
            </div>

            <div>
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`p-3 flex items-center cursor-pointer hover:bg-gray-50 ${
                    activeContact === contact.id ? "bg-gray-100" : ""
                  }`}
                  onClick={() => setActiveContact(contact.id)}
                >
                  <div className="relative mr-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={contact.image || "/placeholder.svg"}
                        alt={contact.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    {contact.online && (
                      <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white"></div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <h4 className="font-medium text-sm truncate">
                        {contact.name}
                      </h4>
                      {contact.unread && (
                        <div className="ml-2 h-2 w-2 rounded-full bg-purple-600"></div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 truncate">
                      {contact.lastMessage}
                    </p>
                  </div>

                  {contact.price !== null && (
                    <div className="text-xs font-medium">${contact.price}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-2/3 flex flex-col">
            {activeContact ? (
              <>
                <div className="p-3 border-b flex items-center">
                  <div className="relative mr-3">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <Image
                        src={
                          contacts.find((c) => c.id === activeContact)?.image ||
                          ""
                        }
                        alt={
                          contacts.find((c) => c.id === activeContact)?.name ||
                          ""
                        }
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    {contacts.find((c) => c.id === activeContact)?.online && (
                      <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 border-2 border-white"></div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h4 className="font-medium text-sm">
                      {contacts.find((c) => c.id === activeContact)?.name}
                    </h4>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-3 bg-gray-50">
                  {(messages[activeContact] || []).map((msg) => (
                    <div
                      key={msg.id}
                      className={`mb-3 max-w-[80%] ${
                        msg.sender === "user" ? "ml-auto" : ""
                      }`}
                    >
                      <div
                        className={`p-3 rounded-lg ${
                          msg.sender === "user"
                            ? "bg-purple-600 text-white"
                            : "bg-white border text-gray-800"
                        }`}
                      >
                        {msg.text}
                      </div>
                      <div
                        className={`text-xs mt-1 ${
                          msg.sender === "user"
                            ? "text-right text-gray-500"
                            : "text-gray-500"
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <div className="p-3 border-t">
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          sendMessage();
                        }
                      }}
                    />
                    <button
                      className="ml-2 h-8 w-8 rounded-full bg-purple-600 text-white flex items-center justify-center"
                      onClick={sendMessage}
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                Select a conversation to start chatting
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
