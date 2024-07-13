import { useState } from "react"
import Principal from "./pages/Principal"
import Dados from "./components/Dados"


const App = () =>{
  const nome = 'Gabrielle'
  const profissao = 'Programador'
  const idade = 16

return(
 <> 
 <Principal/>
 <Dados 
 nome={nome} profissao={profissao} idade={idade} />
 
 </>

 )
}
export default App