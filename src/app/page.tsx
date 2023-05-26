"use client"

import { Sidebar } from "@/components/Sidebar"
import { useState } from "react"
import { Header } from "@/components/Header"
import { ChatArea } from "@/components/ChatArea"
import { Chat } from "@/types/Chat"
import { Footer } from "@/components/Footer"


const Page = () => {

  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatActive, setChatActive] = useState<Chat>({
    id:'123',
    title: 'bla bla',
    messages: [
      {id: '99', author: 'me', body: 'Opa, tudo bem?'},
      {id: '100', author: 'ai', body: 'Tudo bem, em que posso ajudar?'}
    ]
  });

  const [AILoading, setAILoading] = useState(false);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const handleClearConversations = () =>{

  }

  const handleNewChat = () => {

  }

  const handleSendMessage = () =>{

  }

  return(
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        <div className="">
          ...
        </div>
      </Sidebar>

      <section className="flex flex-col w-full">
        
        <Header 
          openSidebarClick={openSidebar}
          title={`Título`}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={chatActive} />

        <Footer
          onSendMessage={handleSendMessage}
          disabled={AILoading}
        />

      </section>
    </main>
  )
}

export default Page