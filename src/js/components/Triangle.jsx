import React, {useState} from "react";
import {getFromLocalStorage} from "./Storage.jsx";
import triangleImage from "../../assets/triangle-alpha.png";
import Lightbox from "yet-another-react-lightbox";
import logoImage from "../../assets/logo1.png";
import {Link} from "react-router-dom";

const Triangle = () => {
    const [images, setImages] = useState([]);
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        setImages(getFromLocalStorage("triangle"));
        setOpen(true);
    };
    return (
        <section className="sectionShape">
            <Link to="/"><img src={logoImage} className="logoImage" height="90"/></Link>
            <div className="container1">
                <div className="columns">
                    <div className="shapeTypeDescription">
                        <span className="textBold">Jesteś trójkątem.</span>
                        <p className="textNormal">Jeśli Twoje ramiona są szersze niż biodra o więcej niż 5cm, to
                            znak, że to właśnie od tej części ciała powinnaś odwracać uwagę. Najprościej zrobić to
                            poprzez noszenie jasnego dołu do ciemnej góry. Warto także podkreślić biust i zaakcentować
                            talię.<br/><br/></p>
                        <div className="columns1">
                            <img src={triangleImage} className="shapeImageToLeft" height="260"/>
                            <div className="DescriptionToRight">
                                <span className="textBold">Cechy charaktetystyczne:<br/></span>
                                <p className="textNormal">szerokie ramiona.<br/></p>
                                <span className="textBold">Co nosić?<br/></span>
                                <p className="textNormal">jasne spodnie lub z spódnice z ciemną górą, sukienki na
                                    szerokich ramiączkach lub z delikatnymi rękawkami.<br/></p>
                                <span className="textBold">Czego unikać?<br/></span>
                                <p className="textNormal"> sukienek i koszulek z cienkimi ramiączkami, bufiastych
                                    rękawów.
                                </p>
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
export default Triangle;