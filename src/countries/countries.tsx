import { useEffect, useState } from "react";
function Countries() {

    const [show, setShow] = useState(false);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://pronuncia.cl/servicio_countries.json')
            .then(res => res.json())
            .then((response) => {
                setCountries(response);
            });
    }, []);


    return (
        <div>
            {countries.map((country, i) => {
                const path = "countries/" + country.idPais + '.png';

                const refHome = "/?country=" + country.idPais;
                return <a href={refHome}><img src={path} /></a>;
            })}
        </div>
    )
}

export default Countries
