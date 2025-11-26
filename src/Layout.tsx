import Titulo from './components/Titulo.tsx'
import Rodape from './components/rodape.tsx'
import { Outlet } from 'react-router-dom'

import { Toaster } from 'sonner'
import ChatWidget from './components/ChatWidget'

export default function Layout() {
  return (
    <>
      <Titulo />
      <ChatWidget />
      <Outlet />
      <Toaster richColors position="top-center" />
      <Rodape />
    </>
  )
}
