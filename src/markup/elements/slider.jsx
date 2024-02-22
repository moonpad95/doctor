import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";
import img0 from "../../images/banner1.png"
import img1 from "../../images/medicina.webp"
import img2 from "../../images/psicologia.jpg"
import img3 from "../../images/services/pic1.jpg"
import img4 from "../../images/nutri.jpg"
import Zoom from "react-reveal/Zoom"


const GradientImage = styled("div")(({ theme }) => ({
    backgroundImage: `linear-gradient(to bottom, rgba(41, 255, 242,0.2) 0%, rgba(41, 73, 255,0.8) 100%), url(${img1})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    height: "60vh", // Ajusta la altura según tus necesidades
    width: "100%",
    position: "relative",
    "& h3": {
        fontSize: "1.7vmax",
        position: "absolute",
        bottom: "150px",
        left: "12%",
        right: "12%",
        color: "#f0f0f0",
        fontFamily: "italic",
        textAlign: "justify",
        textShadow: "2px 2px 1px #0263EF" /* Sombreado azul fuerte */
    },
    "& h1": {
        fontSize: "4vmax",
        position: "absolute",
        fontWeight: "bold",
        bottom: "250px",
        left: "12%",
        right: "12%",
        color: "#fff",
        textAlign: "justify",
        textShadow: "2px 2px 3px #0263EF" /* Sombreado azul fuerte */
    },
    "& a": {
        position: "absolute",
        bottom: "70px",
        left: "12%",
        color: "#f0f0f0",
        margin: 0,
        textAlign: "center",
        alignItems: "center",
        textShadow: "2px 2px 1px #0263EF" /* Sombreado azul fuerte */
    },
}));

class Carrusel extends React.Component {
    render(){
    return (
        <Zoom>

        <Carousel fluid>
            <Carousel.Item>
                <GradientImage style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255,0.1) 0%, rgba(62, 129, 227, 1) 100%), url(${img0})` }}>
                    <h1>Bienvenido a MEDI-KT</h1>
                    <h3>Por que tu salud y tu economía son nuestra prioridad.</h3>
                </GradientImage>
            </Carousel.Item>
            <Carousel.Item>
                <GradientImage style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255,0.1) 0%, rgba(62, 129, 227, 1) 100%), url(${img1})` }}>
                    <h1>Atención Médica general</h1>
                    <h3>Contamos con servicio médico general y consultas con especialistas.</h3>
                    <a href="/servicios" className="btn btn-primary">Consultar servicios</a>
                </GradientImage>
            </Carousel.Item>
            <Carousel.Item>
                <GradientImage style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255,0.1) 0%, rgba(62, 129, 227, 1) 100%), url(${img2})` }}>
                    <h1>Servicios psicológicos</h1>
                    <h3>Terapia psicológica enfocada y a tu alcance.</h3>
                </GradientImage>
            </Carousel.Item>
            <Carousel.Item>
                <GradientImage style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255,0.1) 0%, rgba(62, 129, 227, 1) 100%), url(${img3})` }}>
                    <h1>Servicios dentales</h1>
                    <h3>Servicio dental especializado.</h3>
                </GradientImage>
            </Carousel.Item>
            <Carousel.Item>
                <GradientImage style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255,0.1) 0%, rgba(62, 129, 227, 1) 100%), url(${img4})` }}>
                    <h1>Servicios nutricionales</h1>
                    <h3>Servicio de nutriólogo especializado.</h3>
                </GradientImage>
            </Carousel.Item>
        </Carousel>
        </Zoom>

    );
    }
};

export default Carrusel;