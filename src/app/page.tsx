import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={"${inter.className} flex flex-col min-h-screen items-center justify-center p-24"}>
      <h1 className='text-4xl font-bold tracking-light text-center mb-4'>Gestionar unidad academica</h1>
      <form className="space-y-8 border border-white/10 p-8 rounded">
        <Input 
          id="id"
          name="id"
          label="codigo"
          type="text"
          placeholder="Ingrese codigo"
        />

        <Input
          id="nombre"
          name="nombre"
          label="nombre"
          type="text"
          placeholder="Ingrese nombre"
        />

        <Input
          id="decano"
          name="decano"
          label="decano"
          type="text"
          placeholder="Ingrese decano"
        />
        <Button>Guardar</Button>
      </form>
    </main>
  )
}
