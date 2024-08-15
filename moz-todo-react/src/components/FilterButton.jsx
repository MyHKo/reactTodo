import PropTypes from "prop-types";

function FilterButton(props) {
    return (
        <button type="button" className="btn toggle-btn" aria-pressed={props.pressed}>
            <span className="visually-hidden">Show </span>
            <span>{props.type}</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    )
}

FilterButton.propTypes = {
    type: PropTypes.string.isRequired,
    pressed: PropTypes.string.isRequired,
}

export default FilterButton