import { Link } from 'react-router-dom'
import { Alert, Button } from "react-bootstrap";
import {useState} from "react";

const About = () => {
    const [ show, setShow ] = useState(false);

    return (
        <div style={aboutStyle}>
            <h4>Version 1.5.0</h4>

            <Alert show={show} variant="success">
                <Alert.Heading>How's it going?!</Alert.Heading>
                <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                    fermentum.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close me y'all!
                    </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
            <br/>
            <Link to="/">Go back</Link>
        </div>
    );
};

const aboutStyle = {
    textAlign: 'center',
};

export default About;