import {useState} from "react";
import {Card, Col, Row, Form, Button} from "react-bootstrap";

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add task.')
            return
        }
        if (!date) {
            alert('Please add date.')
            return
        }

        onAdd({text, date, time, reminder})

        setText('')
        setDate('')
        setTime('')
        setReminder(false)
    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Task</Form.Label>
                        <Form.Control type='text'
                                      placeholder='Add Task'
                                      value={text}
                                      onChange={(e) => setText(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control type='text'
                                      placeholder='Add Date'
                                      value={date}
                                      onChange={(e) => setDate(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Time</Form.Label>
                        <Form.Control type='text'
                                      placeholder='Add Time'
                                      value={time}
                                      onChange={(e) => setTime(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Check
                            type='checkbox'
                            value={reminder}
                            checked={reminder}
                            label='Reminder'
                            onChange={(e) => setReminder(e.currentTarget.checked)}
                        />
                        {/*<Form.Label>Reminder</Form.Label>*/}
                    </Form.Group>

                    <Row>
                        <Col md={9}/>
                        <Col md={3}><Button as='input' type='submit' variant='outline-dark' value='Submit'/></Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddTask;