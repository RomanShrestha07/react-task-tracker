import {FaTimes} from "react-icons/all";
import {Col, ListGroup, Row} from "react-bootstrap";

const Task = ({task, onDelete, onToggle}) => {
    return (
        <ListGroup.Item className={`${task.reminder ? 'bg-success text-white' : ''}`}
                        onDoubleClick={() => onToggle(task.id)} style={itemStyle}>
                <h5>
                    <Row>
                        <Col md={11}>
                            {task.text}
                        </Col>
                        <Col md={1}>
                            <FaTimes
                                style={faStyle}
                                onClick={() => onDelete(task.id)}
                            />
                        </Col>
                    </Row>
                </h5>
                <p>{task.date} at {task.time}</p>
        </ListGroup.Item>
    );
};

const faStyle = {
    color: 'maroon',
    cursor: 'default'
}

const itemStyle = {
    cursor: 'pointer'
}

export default Task;