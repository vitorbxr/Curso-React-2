import {useState} from 'react'

function Condicional () {

  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()

  function enviarEmail (e) {
    e.preventDefault()
    setUserEmail(email)
    
  }
  function limparEmail () {
    setUserEmail('')
    document.getElementById("email").value = "";
    
  }
  return (
    <div>
      <h2>Cadastre o seu Email</h2>
      <form>
        <input
          id='email'
          type="email"
          placeholder="digite email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={enviarEmail}>Enviar Email</button>
        {userEmail && (
          <div>
            <p>O email do usuario é {userEmail}</p>
            <button onClick={limparEmail}>Limpar Email</button>
          </div>
        ) }
      </form>
    </div>
  )
}

export default Condicional