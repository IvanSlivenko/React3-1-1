import React from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';


class Counter extends React.Component { 

    static defaultProps = {

        initialValue:0,
    }

    static propTypes = {

    }


    state = {
        value: this.props.initialValue,
    };

    handleIncrement = () => {
        
        // this.setState({ value: 123123 });

        this.setState(
            prevState => ({
            value: prevState.value+1,   
                        })
                    );
     }

    handleDeckrement = () => {
        this.setState(
            prevState => ({
            value: prevState.value-1,   
                        })
                    );
    }

    render() { 
        const { value } = this.state;
        return (
            <div className="Counter">
               <Value value={value}/>
               <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDeckrement}
                />
            </div>
        );        
    }
}



export default Counter;