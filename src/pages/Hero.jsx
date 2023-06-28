import "./Hero.css";
import purplejourney from "../assets/purplejourney.png";
import hammer from "../assets/hammer.png";

const Hero = () => {
    return (
        <div className="hero-container">
            <p className="hero-intro">Hi, my name is</p>
            <h1 className="hero-name">Samuel Song.</h1>
            <h1 className="hero-subtitle">Digital Craftsman.</h1>
            <p className="hero-context">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Pariatur possimus doloremque exercitationem. 
                Aspernatur esse vero officia consequuntur natus 
                voluptatibus unde facilis illo neque debitis.
            </p>
            <img className="hero-image" src={hammer} alt="" />
            
        </div>
    );
}

export default Hero;