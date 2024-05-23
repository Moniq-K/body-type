import React, {useState} from "react";
import {getFromLocalStorage} from "./Storage.jsx";
import appleImage from "../../assets/apple-alpha2.png";
import Lightbox from "yet-another-react-lightbox";
import logoImage from "../../assets/logo1.png";
import {Link} from "react-router-dom";

const Apple = () => {
    const [images, setImages] = useState([]);
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        setImages(getFromLocalStorage("apple"));
        setOpen(true);
    };

    return (
        <section className="sectionShape">
            <Link to="/"><img src={logoImage} className="logoImage" height="90"/></Link>
            <div className="container1">
                <div className="columns">
                    <div className="shapeTypeDescription">
                        <span className="textBold">Jesteś jabłkiem.</span>
                        <p className="textNormal">Kobiety z figurą jabłka mają duży biust, brak wcięcia w talii i
                            najczęściej, wystający brzuszek ale także zgrabne, szczupłe nogi. Najważniejsze w tym
                            przypadku jest nadanie sylwetce smukłości poprzez noszenie ubrań z miękkich materiałów. Na
                            górze najlepiej stosować ciemne barwy a na dole – jasne. Ciemny top pod kurtką sprawi, że
                            biust i brzuszek będą wydawały się mniejsze.<br/><br/></p>
                        <div className="columns1">
                            <img src={appleImage} className="shapeImageToLeft" height="200"/>
                            <div className="DescriptionToRight">
                                <span className="textBold">Cechy charaktetystyczne:<br/></span>
                                <p className="textNormal"> duży biust, brak wcięcia w talii.<br/></p>
                                <span className="textBold">Co nosić?<br/></span>
                                <p className="textNormal">bluzki i sukienki z dekoltem V, szerokie paski w talii.<br/>
                                </p>
                                <span className="textBold">Czego unikać?<br/></span>
                                <p className="textNormal">dużych wzorów na koszulach.</p>
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


export default Apple;