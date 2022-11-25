function Saudacao ({SeuName}) {
  function gerarSaudacao (algumNome) {
    return `Ola, ${algumNome}, tudo bem? `
  }
  return (
    <>
      {SeuName && <p>{gerarSaudacao( SeuName )}</p>}
    </>
  )
}

export default Saudacao