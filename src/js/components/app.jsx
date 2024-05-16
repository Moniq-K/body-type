import React from "react";
import {useState} from "react";
import {createRoot} from 'react-dom/client';

const ROZEK = "rozek";
const GRUSZKA = "gruszka";
const KLEPSYDRA = "klepsydra";
const GAZETA = "gazeta";
const JABLKO = "jablko";


// const requiedFields = ["arms", "waist", "hips"];


const Form = () => {
    const [arms, setArms] = useState("");
    const [waist, setWaist] = useState("");
    const [hips, setHips] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [errMsg, setErrMsg] = useState(null);


    const getShape = () => {
        if (arms - hips > 5) {
            return ROZEK;
        }
        if (hips - arms > 5 && (arms < waist)) {
            return GRUSZKA;
        }
        if (hips - waist > 5 && (arms > waist)) {
            return KLEPSYDRA;
        }
        if (Math.abs(hips - waist) < 5) {
            return GAZETA;
        }
        return JABLKO;
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

        console.log('Shape', getShape());
    }


    const handleArmsChange = (e) => setArms(e.target.value);

    const handleWaistChange = (e) => setWaist(e.target.value);

    const handleHipsChange = (e) => setHips(e.target.value);

    const handleWeightChange = (e) => setWeight(e.target.value);

    const handleHeightChange = (e) => setHeight(e.target.value);


    return (
        <>
            <div className="form">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="header">e-Shape.me</div>
                    <div className="formHeaders">
                        <h1 className="formTextH1">Znajdź swój typ sylwetki</h1>
                    </div>

                    <div className={["formToLeft", "form1"].join(" ")}>
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
                    <div className={["formToRight", "form1"].join(" ")}>
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
                            <p style={{color: "red"}}>{errMsg}</p>
                        </label>
                    </div>

                </form>

            </div>
        </>
    );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Form/>);
