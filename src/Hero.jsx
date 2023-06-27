import classes from './Hero.module.css';
import { motion } from "framer-motion";
import base from './img/base.png';
import front from './img/front.png';
import middle from './img/middle.png';



const Hero = () => {
    return (
        <div className='hero-container'>
            <motion.img className={classes.heroImg} src={base}></motion.img>
            <motion.img className={classes.heroImg} src={middle}></motion.img>
            <motion.img className={classes.heroImg} src={front}></motion.img>
        </div>
    );
}

export default Hero;
