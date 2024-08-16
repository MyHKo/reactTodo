import Todo from "./components/Todo"
import Form from "./components/Form"
import FilterButton from "./components/FilterButton.jsx";
import PropTypes from 'prop-types'
import {useState} from "react";
import {nanoid} from "nanoid";

function App(props) {
    const [tasks, setTasks] = useState(props.tasks);

    function toggleTaskCompleted(id){
        const updatedTasks = tasks.map((task) => {
            if(task.id === id){
                return {...task, completed: !task.completed}
            }
            return task
        });
        setTasks(updatedTasks);
    }

    function deleteTask(id){
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }

    function editTask(id, newName){
        const updatedTasks = tasks.map((task) => {
            if(task.id === id){
                return {...task, name:newName}
            }
            return task
        })
        setTasks(updatedTasks);
    }

    const taskList = tasks?.map((task) => (
        <Todo
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
        />
    ));

    const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
    const headingText = `${taskList.length} ${tasksNoun} remaining`;

    function addTask(name){
        const newTask = { id: `todo-${nanoid()}`, name, completed: false };
        setTasks([...tasks, newTask]);
    }

    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <Form addTask={addTask}/>
            <div className="filters btn-group stack-exception">
               <FilterButton type={"All"} pressed={"true"} />
                <FilterButton type={"Active"} pressed={"false"} />
                <FilterButton type={"Completed"} pressed={"false"} />
            </div>`
            <h2 id="list-heading">{headingText}</h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">
                {taskList}
            </ul>
        </div>
    );
}

App.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default App;
