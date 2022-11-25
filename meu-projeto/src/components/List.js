import Item from "./Item"

function List () {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca='Fiat' ano={1985}></Item>
        <Item marca='Opel' ano={2002}></Item>
        <Item marca='Reanult' ano={2015}></Item>
      </ul>
    </>
  )
}

export default List