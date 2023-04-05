import React, { Component } from "react";
import shortid from "shortid";

class Form extends Component { 
    state = {
        inputValue: '',
        name: '',
        tag: '',
        experience: 'junior',
        licence: false
    };

    nameInput = shortid.generate();
    tagInput = shortid.generate();

//////////////////////////////////////////////////////////
    // handleNameChange = (event) => {
    //     console.log(event.currentTarget.value);
    //     this.setState({name: event.currentTarget.value});
    // }

    // handleTagChange = (event) => {
    //     console.log(event.currentTarget.value);
    //     this.setState({tag: event.currentTarget.value});
    // }
//////////////////////////////////////////////////////////
    

    handleChange = (event) => {

        const { name, value } = event.currentTarget;

        this.setState({ [name]: value, });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        

        this.props.onSubmiter(this.state)
        this.reset();
    };

    handleLicenceChange = (event) => { 
        console.log(event.currentTarget.checked);
        this.setState({ licence: event.currentTarget.checked });
    }

    reset = () => { 
        this.setState({name: '',tag: ''})
    }

    render() {

        const { inputValue } = this.state;
        const { name } = this.state;
        const {tag} = this.state;

        return (
            <form onSubmit={this.handleSubmit} >
                    <label htmlFor={this.nameInput}> 
                        Ім'я :
                        <input
                                type="text"
                                name="name"
                                value={name}
                        onChange={this.handleChange}
                        id={this.nameInput}
                            />
                </label>
                
                <br />
                
                <label htmlFor={this.tagInput}> 
                        Прізвище :
                    <input
                        type="text"
                        name="tag"
                        value={tag}
                        onChange={this.handleChange}
                        id={this.tagInput}
                            />
                </label>
                
                <p> Ваш рівень :</p>
                    <label>
                    <input
                        type="radio"
                        name="experience"
                        value="junior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'junior'}
                    />
                    junior 
                </label>
                
                    <label>
                    <input
                        type="radio"
                        name="experience"
                        value="middle"
                        onChange={this.handleChange}
                        checked={ this.state.experience ==='middle'}
                    />
                    middle 
                </label>
                
                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="senior"
                        onChange={this.handleChange}
                        checked={ this.state.experience ==='senior'}
                    />
                    senior 
                </label>

                <br />
                
                <label> 
                    <input
                        type="checkbox"
                        name="licence"
                        checked={this.state.licence}
                        onChange={this.handleLicenceChange}
                    />
                    Згоден з умовами
                </label>
                <br />

                    <button
                    type="submit"
                    disabled={!this.state.licence}
                >
                        Відправити
                    </button>
                </form>
        );
     }

}
export  default Form;