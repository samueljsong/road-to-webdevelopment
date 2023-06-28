import './About.css';
import profile from '../assets/profile.jpg'

const About = () => {
    return (
        <div className='about-container'>
            
            <section className='about-textsection'>
                <div className='about-title'>
                    <h1>About Me</h1>
                    <span className='about-line'></span>
                </div>
                <p className='about-context about-textwrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Obcaecati quae eligendi, vel, beatae soluta maiores voluptate 
                        nisi ab dignissimos dolor aliquam culpa tempora. Cupiditate 
                        necessitatibus provident et veniam officia ipsa porro eaque 
                        corrupti suscipit vero asperiores possimus modi repudiandae 
                        vitae ad totam, minima consequatur! Ullam non neque
                </p>
                <p className='about-context about-textwrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Obcaecati quae eligendi, vel, beatae soluta maiores voluptate 
                        nisi ab dignissimos dolor aliquam culpa tempora. Cupiditate 
                        necessitatibus provident et veniam officia ipsa porro eaque 
                        corrupti suscipit vero asperiores possimus modi repudiandae 
                        vitae ad totam, minima consequatur! Ullam non neque
                </p>
                <p className='about-context about-textwrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Obcaecati quae eligendi, vel, beatae soluta maiores voluptate 
                        
                </p>


            </section>

            <section className='about-profilesection'>
                <img className='about-picture' src={profile} alt="" />
                <div className='about-outline'></div>
            </section>

        </div>
    );
}

export default About;