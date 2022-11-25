function SeuNome({setSeuName}){
  return (
    <>
      <p>Digite seu nome:</p>
      <input type="text" placeholder="Qual eh seu nome" onChange={(e) => setSeuName(e.target.value)} />
    </>
)
}

export default SeuNome