import { useHistory  } from "react-router-dom";
import { useState } from "react";
import { Input } from "../components/Input";

export const CountactUs = () => {
    

    const history = useHistory();

    const [email, setEmail] = useState("Please enter your Email");
    const [about, setAbout] = useState("About");
    const handleClick = () => {
        history.push("/Posts");
    }
    return (
        <>
            <h1>CountactUs</h1>
            <Input value={email} setValue={setEmail} label="Title" />
            <Input value={about} setValue={setAbout} label="Body" />

            <button onClick={handleClick} className="btn btn-primary">
                Submit
            </button>
        </>
    );
};
