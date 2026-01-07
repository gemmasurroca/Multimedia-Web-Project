import heroImg from '../assets/images/hero-olot.jpg';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <img src={heroImg} className="hero-image" />
            <div className="hero-background">
                <h1 className="hero-title">
                    Olot
                </h1>
                <p className="hero-subtitle">
                    Land of Volcanoes and Nature
                </p>
                <button className="hero-button" onClick={() => document.getElementById('activities').scrollIntoView()} >
                    Explore activities
                </button>
            </div>
        </section>
    );
};
export default Hero;
