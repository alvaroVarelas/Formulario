import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

export const Form = () => {
    return (
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
    )
}