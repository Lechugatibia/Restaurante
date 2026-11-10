export default function Bienvenida() {
    const nombre="Equipo React";
    return (
        <section className={"Tarjeta"}>
            <h1>Hola,{nombre}</h1>
            <input placeholder={="Escribe aqui"}/>
            {/*cometario dentro del jsx*/}
        </section>
    );
}
