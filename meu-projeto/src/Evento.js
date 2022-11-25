import Button from "./components/evento/Button"

function Evento ({numero}) {
  function meuEvento(){
    console.log(`Clicou ${numero} e ativou o pimeiro evento`)
    alert(`Clicou! ${numero}  e ativou o pimeiro evento`)
  }
  function segundoEvento () {
    console.log('segundo evento')
  }
  return (
    <div>
      <p>Clique para disparar um evento</p>
      <Button event={meuEvento} text="Primeiro Evento"></Button>
      <Button event={segundoEvento} text="Segundo Evento"></Button>
      <p></p>
      <button onClick={meuEvento}>Ativar!</button>
    </div>
  )
}

export default Evento