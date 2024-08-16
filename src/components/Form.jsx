import PropTypes from "prop-types";

function Form(props) {
    function handleSubmit(event) {
        event.preventDefault()
        props.addTask(event.target.text.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    )
}

Form.propTypes = {
    addTask: PropTypes.func.isRequired,
}

export default Form;