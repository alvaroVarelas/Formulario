'use client'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import React from 'react'

export const Form = () => {
     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = e.currentTarget
      const formData = new FormData(form)
      const { id, nombre, decano } = Object.fromEntries(formData.entries())
      console.log({ id, nombre, decano })// luego componerlo con el backend

     } 

    return (
        <form onSubmit={handleSubmit} className="space-y-8 border border-white/10 p-8 rounded">
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