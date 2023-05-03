import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const Input = (
  {id, name, label, type, placeholder, ...props}:
  {id: string, name: string, label: string, type: string, placeholder: string}
  ) => {
  return (
    <fieldset>
      <label className='block mb-2 text-sm font-medium text-gray-300' htmlFor={id}>{label}</label>
      <input 
        className='border text-sm rounded-lg block w-full p-2.5  bg-white/5  border-gray-600  
        placeholder-gray-400 text-white ' 
        id={id} 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        {...props} 
      />
    </fieldset>
  )
}

const Button = ({children, ...props}: {children: React.ReactNode}) => {
  return (
    <button 
      type='submit'
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      {...props}
    >
      {children}
    </button>
  )
}

export default function Home() {
  return (
    <main className={"${inter.className} flex min-h-screen flex-col items-center justify-center p-24"}>
      <h1 className='text-4xl font-bold tracking-light text-center mb-4'>Gestionar unidad academica</h1>
      <form className="space-y-5">
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

      </form>
    </main>
  )
}
