
import { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";

function Famous() {

    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://pronuncia.cl/servicio_home.json')
            .then(res => res.json())
            .then((response) => {
                setData(response);
            });
    }, []);



    function onClick() {
        console.log('click');
        setShow(show ? false : true);
    }

    if (show) {
        return (
            <>
                <h2>Quién es el famoso?</h2>
                <img style={{ 'width': '100%', 'height': '300px' }} src={data.imageUrl} />

                <p>{data.name}</p>
                <button onClick={onClick}>Descubrelo</button>
            </>
        );
    } else {
        return (
            <>
                <h2>Quién es el famoso?</h2>
                <div style={{ 'width': '100%', 'height': '300px', 'background': 'yellow' }}>escondido</div>
                <button onClick={onClick}>Descubrelo</button>
            </>
        )
    }

}

export default Famous
