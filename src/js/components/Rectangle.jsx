import React, {useState} from "react";
import {getFromLocalStorage} from "./Storage.jsx";
import rectangleImage from "../../assets/rectangle-alpha.png";
import Lightbox from "yet-another-react-lightbox";
import logoImage from "../../assets/logo1.png";
import {Link} from "react-router-dom";

const Rectangle = () => {
    const [images, setImages] = useState([]);
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        setImages(getFromLocalStorage("rectangle"));
        setOpen(true);
    };

    return (
        <section className="sectionShape">
            <Link to="/"><img src={logoImage} className="logoImage" height="90"/></Link>
            <div className="container1">
                <div className="columns">
                    <div className="shapeTypeDescription">
                        <span className="textBold">Jesteś prostokątem.</span>
                        <p className="textNormal">Gdy po zmierzeniu szerokości talii i bioder,
                            różnica między nimi nie przekracza 5cm, jesteś prostokątem. Wybierając stroje powinnaś dążyć
                            do stworzenia talii i podkreślenia bioder za pomocą grubych pasków oraz rozszerzanych
                            spódnic.<br/><br/></p>
                        <div className="columns1">
                            <img src={rectangleImage} className="shapeImageToLeft" height="210"/>
                            <div className="DescriptionToRight">
                                <span className="textBold">Cechy charaktetystyczne:<br/></span>
                                <p className="textNormal">wąskie ramiona i biodra, brak wcięcia w talii.<br/></p>
                                <span className="textBold">Co nosić?<br/></span>
                                <p className="textNormal">rozkloszowane spódnice, lekko dopasowane lub proste sukienki z
                                    cieńkim ciemnym paskiem.<br/></p>
                                <span className="textBold">Czego unikać?<br/></span>
                                <p className="textNormal">oversizowych ubrań bez wcięcia w talii, jasnych pasków - mogą
                                    optycznie pogrubiać.</p>
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

export default Rectangle;