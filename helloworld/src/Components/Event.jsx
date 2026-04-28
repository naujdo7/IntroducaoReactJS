const Event = () => {

const handleMyEvent = (e) => {
    console.log(e);
    console.log("Evento 1 ativado!");
};

const renderSomething = (x) => {
    if (x) {
        return <h2>Renderizei algo!</h2>
    } else {
        return <h2>Não renderizei nada</h2>
    }
};

return (
    <>
    <div>
        <div>
            <button onClick={handleMyEvent}>Função com +1 Ação</button>
        </div>

        <div>
            <button onClick={() => console.log("Evento 2 ativado!")}>Função anônima 1 ação</button>
        </div>

        <div>
            <button onClick={() => {
                if(true) {
                    console.log("Evento 3 ativado!")
                }
            } }>Não fazer dessa forma! Sobrecarrega o HTML</button>
        </div>


            {renderSomething(true)}
            {renderSomething(false)}
        <hr />
    </div>
    </>
)
}
export default Event