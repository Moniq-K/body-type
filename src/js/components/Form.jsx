import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import logoImage from "../../assets/logo1.png";


const TRIANGLE = "triangle";
const PEAR = "pear";
const HOURGLASS = "hourglass";
const RECTANGLE = "rectangle";
const APPLE = "apple";


const Form = () => {
    const [arms, setArms] = useState("");
    const [waist, setWaist] = useState("");
    const [hips, setHips] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [errMsg, setErrMsg] = useState(null);
    const navigate = useNavigate();


    const getShape = () => {
        if (arms - hips > 5) {
            return TRIANGLE; // 40 30 20
        }
        if (hips - arms > 5 && (arms < waist)) {
            return PEAR; // 30 40 40
        }
        if (hips - waist > 5 && (arms > waist)) {
            return HOURGLASS; // 40 30 40
        }
        if (Math.abs(hips - waist) < 5) {
            return RECTANGLE; // 38 38 40
        }
        return APPLE; // 30 40 30
    }

    const validation = () => {
        if (hips <= 0 || waist <= 0 || arms <= 0) {
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validation()) {
            setErrMsg("Podaj wartości większe niż O.");
            return;
        }
        const shape = getShape();
        navigate(`/${shape}`);
    }


    const handleArmsChange = (e) => setArms(e.target.value);

    const handleWaistChange = (e) => setWaist(e.target.value);

    const handleHipsChange = (e) => setHips(e.target.value);

    const handleWeightChange = (e) => setWeight(e.target.value);

    const handleHeightChange = (e) => setHeight(e.target.value);


    return (
        <section className="sectionForm">
            <Link to="/"><img src={logoImage} className="logoImage" height="120"/></Link>
            <div className="container1">
                <form className="columns" onSubmit={handleSubmit}>
                    <div className="formHeader">
                        <h1 className="formTextH1">Znajdź swój typ sylwetki</h1>
                    </div>
                    <div className="formToLeft">
                        <label>
                            <p className="labelName">Twoja waga</p>
                            <input className="input" placeholder={"podaj wymiar w kg"}
                                   onChange={handleWeightChange}
                                   value={weight} type="number"/>
                        </label>
                        <label>
                            <p className="labelName">Twój wzrost</p>
                            <input className="input" placeholder={"podaj wymiar w cm"}
                                   onChange={handleHeightChange}
                                   value={height} type="number"/>
                        </label>

                    </div>
                    <div className="formToRight">
                        <label>
                            <p className="labelName">Obwód ramion</p>
                            <input className="input" placeholder={"podaj wymiar w cm"}
                                   onChange={handleArmsChange} value={arms}
                                   type="number" required/>
                        </label>
                        <label>
                            <p className="labelName">Obwód talii</p>
                            <input className="input" placeholder={"podaj wymiar w cm"}
                                   onChange={handleWaistChange} value={waist}
                                   type="number" required/>
                        </label>

                        <label>
                            <p className="labelName">Obwód bioder</p>
                            <input className="input" placeholder={"podaj wymiar w cm"}
                                   onChange={handleHipsChange} value={hips}
                                   type="number" required/>
                        </label>

                        <label>
                            <input className="submit" type="submit" value="zatwierdź"/>
                            <p className="error">{errMsg}</p>
                        </label>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Form;
