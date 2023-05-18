import React, { useState, useEffect } from "react";

function Image() {
    const [image, setImage] = useState([]);
    useEffect(() => {
        setInterval(() => {
            fetch("https://some-random-api.ml/img/cat")
                .then(response => response.json())
                .then(data => {
                    setImage(data.link);
                    console.log(data.link);
                })
                .catch((err) => { console.log(err) })
        }, 5000);
    }, []);
    return (
        <>
            <img src={image}></img>
        </>
    );
}
export default Image;
