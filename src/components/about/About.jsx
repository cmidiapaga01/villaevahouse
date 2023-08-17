import React from "react";
import "./About.css";
import aboutImage from "../../assets/images/img_2.jpg";

const About = () => {
  return (
    <section className="about section-p bg-dark" id="about">
      <div className="container">
        <div className="about-content grid text-center">
          <div className="content-left">
            <img src={aboutImage} alt="Onde estamos" />
          </div>
          <div className="content-right text-white">
            <div className="section-t">
              <h3>Onde estamos?</h3>
            </div>
            <p className="text mb-1">
            A Villa Eva House é uma propriedade com área de praia privativa situada em Beberibe,
            a 200 metros da Praia das Fontes, a 2,2 km da Praia do Diogo e a 6 km da Igreja Matriz.
            Situada à beira-mar, esta propriedade dispõe de piscina ao ar livre, jardim e terraço.

            Esta casa de temporada de 6 quartos dispõe de sala de estar com TV de tela plana, 
            cozinha totalmente equipada e 8 banheiros. Para sua comodidade, a casa de temporada oferece estacionamento
            privativo gratuito.

            O aeroporto mais próximo é o Aeroporto de Aracati, a 73 km da Villa Eva House.
            </p>
            <p className="text">
              Adicionar informação complementar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
