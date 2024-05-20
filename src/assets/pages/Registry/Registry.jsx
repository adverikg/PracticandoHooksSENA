import { useState } from 'react'

export const Registry = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [id, setId] = useState('')
    const [people, setPeople] = useState([])
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const newPerson = { name, username, email, phone, id }
      const personExists = people.some(person => person.id === id || person.email === email)
  
      if (personExists) {
        alert('La persona ya existe.')
      } else {
        setPeople([...people, newPerson])
        setName('')
        setUsername('')
        setEmail('')
        setPhone('')
        setId('')
        alert('Gracias por registrarse.')
      }
    }
  return (
    <>
    <div>
        <h1 className='text-5xl font-bold text-teal-500 m-2 text-center'>Registro</h1>
        <div className='w-100 h-280 p-10 m-8 flex flex-col justify-center items-center bg-gradient-to-b from-teal-600 via-emerald-500 to-teal-600 rounded-xl'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-4'>
                <input type='text' placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} className='p-2 rounded-xl font-bold'/>
                <input type='text' placeholder='Usuario' value={username} onChange={(e) => setUsername(e.target.value)} className='p-2 rounded-xl font-bold'/>
                <input type='email' placeholder='Correo' value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 rounded-xl font-bold'/>
                <input type='tel' placeholder='Teléfono' value={phone} onChange={(e) => setPhone(e.target.value)} className='p-2 rounded-xl font-bold'/>
                <input type='text' placeholder='ID' value={id} onChange={(e) => setId(e.target.value)} className='p-2 rounded-xl font-bold'/>
                <button type='submit' className='bg-blue-500 p-4 text-white font-bold rounded-xl hover:bg-lime-600'>Registrar</button>
            </form>
        </div>
    </div>
    </>
  )
}
