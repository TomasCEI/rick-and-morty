import styles from "./Alien.module.css"
import {useEffect, useRef} from 'react';
/**
 * AlienAI component
 * https://codepen.io/Chuloo/pen/RQYbvm
 * 
 * El color se lo asigno como prop 
 * Utilizo useRef para agarrar los elementos del DOM y dejo las clases para CSS
 *  */
const AlienAI = ({color="#7cb342"}) => {

    const eyesRef = useRef(null);
    const lidRef = useRef(null);

    useEffect(() => {

        

        document.body.addEventListener('mousemove', handleMouseMove);

        // Clean up the event listener when the component unmounts
        return () => {
            document.body.removeEventListener('mousemove', handleMouseMove);
        };

    }, []);


    const handleMouseMove = (e) => {
        const eyes = eyesRef.current;
        const eyeLid = lidRef.current;
        
        // Math.floor(Math.random() * (max - min + 1)) + min;
        const randomTime = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // generates a random number between 5 and 10
        eyeLid.style.animationDuration = randomTime + 's';


        const mouseX = (eyes.getBoundingClientRect().left); 
        const mouseY = (eyes.getBoundingClientRect().top);
        const radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
        const rotationDegrees = (radianDegrees * (180/ Math.PI) * -1) + 180;
        eyes.style.transform = `rotate(${rotationDegrees}deg)`
    };
    
    return ( 
        <div className={styles.monster} style={{color}}>
            <div className={styles.body}>
                <div className={styles.ear}></div>
                <div className={styles.ear}></div>
                <div className={styles["vampi-mouth"]}>
                    <div className={styles["vampi-tooth"]}></div>
                </div>
            </div>
            <div ref={lidRef} className={styles["eye-lid"]}>
                {/* <div ref={eyesRef} className={`eyes ${styles.eyes}`}> */}
                <div ref={eyesRef} className={styles.eyes}>
                    <div className={styles.eye}></div>
                </div>
            </div>
        </div>
     );
}
 
export default AlienAI;