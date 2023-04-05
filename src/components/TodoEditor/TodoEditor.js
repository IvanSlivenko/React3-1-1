import React, { Component } from "react";
import './TodoEditor.scss';




class  TodoEditor extends Component { 
    state = {
        message: '',
    }

    handleChange = event => {
        this.setState({ message: event.currentTarget.value })
    };

    handleSabmit = event => {

        event.preventDefault();
        this.props.onSubmit(this.state.message)
        this.setState({ message: '' })
    };

    render() {
        return (
            <form
                className="TodoEditor"
                onSubmit={this.handleSabmit}
            
            
            >
                <textarea
                    className="TodoEditor__textarea"
                    value={this.state.message}
                    onChange={this.handleChange}
                >
                </textarea>
                <button
                    type="submit"
                    className="TodoEditor__button"
                    // onClick={this.handleSabmit}
                >
                    Зберегти
                </button>

            </form>
        )
    }
}

export default TodoEditor  ;
