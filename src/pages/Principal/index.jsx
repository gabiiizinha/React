import Botao from "../../components/Botao"

const Principal = () =>{
    const inf = "Bem-vindo"
    const inf2 = "Obrigada por acessar"
    return(
    
    <>
        <h1>Página Principal</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore distinctio, aperiam perferendis ipsam veritatis ipsa. Facere veniam unde aliquam hic facilis quis aut rerum, rem vero quod, temporibus quos?

        </p>
        <Botao inf = {inf}/>
        <hr />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nesciunt enim laborum veritatis eaque quia nam maiores obcaecati. Fugiat est exercitationem ullam quo odio autem, libero eius unde necessitatibus natus.
        </p>
        <Botao inf = {inf2}/>

    </>
   )
}
export default Principal