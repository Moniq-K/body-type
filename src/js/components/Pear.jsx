import React, {useState} from "react";
import {getFromLocalStorage} from "./Storage.jsx";
import pearImage from "../../assets/pear-alpha.png";
import Lightbox from "yet-another-react-lightbox";
import logoImage from "../../assets/logo1.png";
import {Link} from "react-router-dom";

const Pear = () => {
    const [images, setImages] = useState([]);
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        setImages(getFromLocalStorage("pear"));
        setOpen(true);
    };

    return (
        <section className="sectionShape">
            <Link to="/"><img src={logoImage} className="logoImage" height="90"/></Link>
            <div className="container1">
                <div className="columns">
                    <div className="shapeTypeDescription">
                        <span className="textBold">Jesteś gruszką.</span>
                        <p className="textNormal">Jeżeli Twoje biodra są szersze od ramion o więcej niż 5 cm, to
                            najprawdopodobniej Twój kształt sylwetki to gruszka. W tym przypadku, najważniejsze jest aby
                            zrównoważyć linię bioder i ramion. Powinnaś więc zamaskować biodra np. za pomocą ciemnych i
                            prostych spodni, a ramiona podkreślić jasną koszulką lub kolorowym, wzorzastym sweterkiem
                            czy marynarką.<br/><br/></p>
                        <div className="columns1">
                            <img src={pearImage} className="shapeImageToLeft" height="240"/>
                            <div className="DescriptionToRight">
                                <span className="textBold">Cechy charaktetystyczne:<br/></span>
                                <p className="textNormal">szerokie biodra<br/></p>
                                <span className="textBold">Co nosić?<br/></span>
                                <p className="textNormal">ciemne spodnie i spódnice z jasną górą,
                                    ołówkowe spódnice, sukienki rozkloszowane oraz z rękawem 3/4<br/></p>
                                <span className="textBold">Czego unikać?<br/></span>
                                <p className="textNormal">jasnych spodni ze zwężanymi
                                    nogawkami, ubrań w poziome paski.</p>
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
export default Pear;