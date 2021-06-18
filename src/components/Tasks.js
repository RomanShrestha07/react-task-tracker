import Task from "./Task";
import {Card, ListGroup} from "react-bootstrap";

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <div>
            <Card>
                <ListGroup>
                    {tasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onDelete={onDelete}
                            onToggle={onToggle}
                        />
                    ))}
                </ListGroup>
            </Card>
        </div>
    );
};

export default Tasks;