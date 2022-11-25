function OutraLista ({ Tens }) {
  return (
    <div>
      <h3>Lista de Coisas Boas</h3>
      {
        Tens.length > 0 ? (
          Tens.map((tem, index) => (<p key={index}>{tem}</p>)))
        : (
          <p>Nao ha itens na lista</p>  
        )
      }
    </div>
  )
}

export default OutraLista