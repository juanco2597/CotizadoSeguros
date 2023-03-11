import Formulario from "./Formulario";
import Spinner from "./Spinner"
import Resultado from "./Resultado"
import useCotizador from "../hooks/useCotizador";


const AppSeguro = () => {
    const { cargando } = useCotizador()

    return (
        <>
            {/* Encabezado */}
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black">
                    Cotizador de Seguros de Auto
                </h1>
            </header>

            {/* Contenido */}
            <main className="bg-white md:w-2/2 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                <Formulario />

                {cargando ? <Spinner /> : <Resultado />}
            </main>


        </>
    )
};

export default AppSeguro;
