import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'


const MiApi = ({ valorBusqueda }) => {
    const [personajes, setPersonajes] = useState([]);
    const [cargado, setCargado] = useState(false);


    useEffect(() => {
        getData();

    }, []);

    async function getData() {
        const res = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=20");
        const data = await res.json();
        setPersonajes(data);
        setCargado(true);
        
    };



    return (
        cargado ?
            <Row>

                {
                    personajes
                    .filter((p) => {
                        return p.character.toLowerCase().includes(valorBusqueda.toLowerCase());
                    })
                   
                    .map((p, i) => {
                        return (
                            <Col key={i} style={{
                                display: "flex",
                                width: "250px",
                                padding: "2px",
                                borderRadius: "10px",
                                margin: "50px",
                                
                                }} >

                                <Card style={{ width: '15rem'}}>
                                    <Card.Img variant="top" src={p.image} />
                                    <Card.Body style={{backgroundColor: '#F6A925'}}>
                                        <Card.Title>{p.character}</Card.Title>
                                        <Card.Text>
                                            {p.quote}
                                        </Card.Text>
                                        <Button variant="primary">Give more information</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }

            </Row> :
            <h1>Cargando datos</h1>
    )







}

export default MiApi