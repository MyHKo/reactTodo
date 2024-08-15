import Todo from "./components/Todo"
import Form from "./components/Form"
import FilterButton from "./components/FilterButton.jsx";
import PropTypes from 'prop-types'

function App(props) {
    const taskList = props.tasks?.map((task) => (
        <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
    ));
    
    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <Form />
            <div className="filters btn-group stack-exception">
               <FilterButton type={"All"} pressed={"true"} />
                <FilterButton type={"Active"} pressed={"false"} />
                <FilterButton type={"Completed"} pressed={"false"} />
            </div>`
            <h2 id="list-heading">3 tasks remaining</h2>
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
