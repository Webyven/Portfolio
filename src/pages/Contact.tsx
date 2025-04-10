import {useState} from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí puedes realizar la lógica para enviar el formulario
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Mensaje:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Contact
