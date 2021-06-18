import PropTypes from 'prop-types';
import Button from "./Button";
import {useLocation} from 'react-router-dom';
import {Container, Row, Col} from "react-bootstrap";

const Header = ({title, onAdd, showForm}) => {
    const location = useLocation()

    // Display button only if url is '/'
    return (
        <header className='header'>
            <Container>
                <Row>
                    <Col md={10}><h1 style={headerStyle}>{title}</h1></Col>

                    <Col md={2}>
                        {
                            location.pathname === '/' &&
                            <Button
                                color={showForm ? 'btn-danger' : 'btn-success'}
                                text={showForm ? 'Close' : 'Add'}
                                onClick={onAdd}
                            />
                        }
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onAdd: PropTypes.func,
    showForm: PropTypes.bool,
}

const headerStyle = {
    color: 'grey',
}

export default Header;