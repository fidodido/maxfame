
import Countries from "../countries/countries";
import { useLocation } from 'react-router-dom';

function Bottombar() {




    const location = useLocation();

    // Crea una instancia de URLSearchParams con la query string actual
    const queryParams = new URLSearchParams(location.search);

    // Obtén el valor del parámetro que necesitas


    const imgSelected = "countries/" + queryParams.get('country') + '.png';

    function onClick() {
        return <Countries></Countries>
    }

    return (
        <>
            <div style={{ 'height': '30px', 'width': '100%', 'background': 'blue' }}>
                <a href="/countries"><img onClick={onClick} src={imgSelected} /></a>
                <a href="/old">Antiguos</a>
            </div>
        </>
    )
}

export default Bottombar
