import React from 'react';
import imageEdited from '../assets/images/fotoEditada.jpg';
import audioPoem from '../assets/audio/poemaFageda.mp3';
import imageFageda from '../assets/images/fagedaJorda.jpg';
import VolcanoAnimation from './VolcanoAnimation';

const Multimedia = () => {
    return (
        <section id="multimedia" className="section">
            <h1 className="section-title">Discover the magic of Olot</h1>
            <div>
                <div style={{ marginBottom: '30px' }}>
                    <img src={imageEdited} className="edited-image" />
                    <p className="edited-image-text">"Olot, where nature wakes you up"</p>
                </div>

                <div className="audio-and-animation">
                    <h3>Voices of La Garrotxa</h3>
                    <p style={{ marginBottom: '30px' }}> Listen to a recitation of “La Fageda d’en Jordà” by Joan Maragall</p>
                    <audio controls style={{ width: '100%' }}>
                        <source src={audioPoem} />
                        Audio tag is not supported.
                    </audio>
                    <img src={imageFageda} style={{ width: '50%' }} className="edited-image" />
                </div>

                <div className="audio-and-animation">
                    <h3>Virtual Volcano</h3>
                    <VolcanoAnimation />
                </div>
            </div>
        </section >
    );
};
export default Multimedia;
