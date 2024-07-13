const Botao = (props) => {
    const alerta = () => {
        alert(props.inf)
    }
    return (
        <button onClick={alerta}>Botão</button>
    )
}
export default Botao