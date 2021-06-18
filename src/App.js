import {useState, useEffect} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

import {Card, Col} from "react-bootstrap";

function App() {
    const [showForm, setShowForm] = useState(false)

    const [tasks, setTasks] = useState([])

    // Set the tasks from db into the state
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks2() // getting the tasks from the db
            setTasks(tasksFromServer) // setting the tasks into the state
        }

        getTasks()
    }, [])

    // Fetch the tasks list from the db
    const fetchTasks = async () => {
        const response = await fetch('http://localhost:5000/tasks')
        const data = await response.json()

        console.log(data)
        return data
    }

    const fetchTasks2 = async () => {
        const response = await fetch('https://todo-api.tusharbohara.com.np/todo/', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Content-type': 'application/json'
            },
        })
        const data = await response.json()

        console.log(data)
        return data
    }

    // Add the task into the db and in the state
    const addTask = async (task) => {
        console.log(task)

        // const id = Math.floor(Math.random() * 10000) + 1
        // const newTask = { id, ...task }
        // setTasks([...tasks, newTask])

        const response = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const data = await response.json()

        setTasks([...tasks, data])
    }

    // Delete a task according to the id from the db
    const deleteTask = async (id) => {
        console.log('Deleted -', id)

        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        })

        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Fetch a task according to the id from the db
    const fetchTask = async (id) => {
        const response = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await response.json()

        console.log(data)
        return data
    }

    // Edit the reminder of a task in the db
    const toggleReminder = async (id) => {
        console.log('Reminder -', id)

        const taskToToggle = await fetchTask(id)

        const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

        const response = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })

        const data = await response.json()

        setTasks(
            tasks.map((
                task) => task.id === id ? {...task, reminder: data.reminder} : task
            ))
    }

    return (
        <Router>
            <Col md='4' className='mx-auto' style={{ marginTop: 30 }}>
                <Card>
                    <Card.Header>
                        <Header
                            onAdd={() => setShowForm(!showForm)}
                            showForm={showForm}
                        />
                    </Card.Header>

                    <Card.Body>
                        <Route
                            path='/' exact
                            render={(props) => (
                                <>
                                    {showForm && <AddTask onAdd={addTask}/>}

                                    {tasks.length > 0 ? <Tasks
                                        tasks={tasks}
                                        onDelete={deleteTask}
                                        onToggle={toggleReminder}/> : 'No tasks.'
                                    }
                                </>
                            )}
                        />

                        <Route path='/about' component={About}/>
                    </Card.Body>

                    <Card.Footer>
                        <Footer/>
                    </Card.Footer>
                </Card>
            </Col>
        </Router>
    );
}

export default App;
