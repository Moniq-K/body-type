import React, {useState} from "react";
import {getFromLocalStorage} from "./Storage.jsx";
import hourglassImage from "../../assets/hourglass-alpha2.png";
import logoImage from "../../assets/logo1.png";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {Link} from "react-router-dom";


const HourGlass = () => {
    const [images, setImages] = useState([]);
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        setImages(getFromLocalStorage("hourglass"));
        setOpen(true);
    };

    return (
        <section className="sectionShape">
            <Link to="/"><img src={logoImage} className="logoImage" height="90"/></Link>
            <div className="container1">
            <div className="columns">
                    <div className="shapeTypeDescription">
                        <span className="textBold">Jesteś klepsydrą.</span>
                        <p className="textNormal">Jeśli Twoje biodra są szersze od talii o co najmniej 5 cm – masz się z
                            czego cieszyć! Jesteś w gronie kobiet z najbardziej pożądaną sylwetką. Kobiety posiadające
                            figurę klepsydry są w bardzo komfortowej sytuacji, gdyż ich ciała mają idealne proporcje i w
                            dużej mierze mogą nosić wszystkie typy ubrań.<br/><br/></p>
                        <div className="columns1">
                            <img src={hourglassImage} className="shapeImageToLeft" height="210"/>
                            <div className="DescriptionToRight">
                                <span className="textBold">Cechy charaktetystyczne:<br/></span>
                                <p className="textNormal">wąska talia, ramiona i biodra równej szerokości.<br/></p>
                                <span className="textBold">Co nosić?<br/></span>
                                <p className="textNormal">sukienki z wcięciem w talii, minimalistyczne, przylegające
                                    stroje w jednolitych kolorach.<br/></p>
                                <span className="textBold">Czego unikać?<br/></span>
                                <p className="textNormal">luźnych, workowatych i wzorzystych ubrań, dużych dekoltów.</p>
                            </div>

                        </div>
                        <button type="button" onClick={handleClick}>Dopasuj ubrania do sylwetki</button>
                        <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            slides={
                                images.map(image => ({src: image}))
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HourGlass;