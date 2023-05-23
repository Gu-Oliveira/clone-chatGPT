"use client"

import { Sidebar } from "@/components/Sidebar"
import { useState } from "react"
import { Header } from "@/components/Header"


const Page = () => {

  const [sidebarOpened, setSidebarOpened] = useState(false);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const handleClearConversations = () =>{

  }

  const handleNewChat = () => {

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

      </section>
    </main>
  )
}

export default Page