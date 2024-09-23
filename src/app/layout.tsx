import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Assistente de IA - Marketing Turbo',
  description:
    'Tudo o que Você Precisa para Alavancar sua Estratégia de Conteúdo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.className} bg-gradient-to-br from-black via-gray-950 to-transparent antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
