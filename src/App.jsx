  import {useState} from 'react'

function App(){

    const [nome, setNome] = useState('Ronaldo');

  return (
    <div>
      <h3>Pizzaria 2A</h3>
      <input classNAme= "Nome"
      name = "Nome"
      placeholder = "Digite seu Nome..."
      onChange={(value)=>setNome(value)}
      type="text" />
      <button onClick={()=>{alert(nome)}}>
        CLIQUE AQUI
      </button>
    </div>
  )
}
 
export default App