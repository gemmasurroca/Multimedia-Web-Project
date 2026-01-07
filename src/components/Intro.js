import React from 'react';
import '../App.css';
import volcansImg from '../assets/images/volcans.jpg';
import boscosImg from '../assets/images/boscos.jpg';
import montsacopaImg from '../assets/images/montsacopa.jpg';

function Intro() {
    return (
        <section className="section" id="intro">
            <h2 className="section-title">Olot: nature, volcanoes, and unique landscape</h2>
            <p className="intro-text">
                Olot is a city located in the heart of the Garrotxa Volcanic Zone.
                Its surroundings are formed by dormant volcanoes, lush forests, and green valleys creating an exceptional landscape all year round.
                This combination makes Olot an ideal place to enjoy outdoor activities, culture, and unique experiences.
            </p>

            <div className="intro-graella">
                <div className="intro-card">
                    <img src={volcansImg} className="intro-image" />
                    <h3>Land of volcanoes</h3>
                    <p>
                        La Garrotxa has more than 40 volcanic cones and various visible lava flows.
                        Volcanoes like Montsacopa, Santa Margarida, or Croscat are part of the daily landscape.
                    </p>
                </div>

                <div className="intro-card">
                    <img src={boscosImg} className="intro-image" />
                    <h3>Forests and natural spaces</h3>
                    <p>
                        One of the most iconic spaces is La Fageda d’en Jordà, a beech forest grown on an old lava flow.
                        The forests surrounding Olot offer ideal routes for walking, cycling, or simply disconnecting.
                    </p>
                </div>

                <div className="intro-card">
                    <img src={montsacopaImg} className="intro-image" />
                    <h3>A city integrated with nature</h3>
                    <p>
                        Olot combines urban life with an immediate natural environment.
                        From the city center, you can walk to volcanoes, viewpoints, and green spaces.
                        This proximity allows enjoying natural experiences without leaving the city.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Intro;
