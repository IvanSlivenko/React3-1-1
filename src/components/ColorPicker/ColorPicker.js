import React, { PureComponent } from "react";
import classNames from "classnames";
import './ColorPicker.css';


class ColorPicker extends PureComponent { 
    
    state = {
        activeOptionIdx: 0,
    };

    setActiveIdx =(index)=> {
        this.setState({activeOptionIdx: index})
    }

    makeOptionClassName = (index) => { 


        
        return classNames('ColorPicker__option', 'q', 'a', {
            'ColorPicker__option--active': index === this.state.activeOptionIdx,
        });
        
   
   ///////////////////////////////////////////////////////////////////////////////////     
    //         const optionClasses = ['ColorPicker__option'];

    //                     if (index === this.state.activeOptionIdx) { 

    //                         optionClasses.push('ColorPicker__option--active');
    //                     }
    //     return optionClasses.join(' ');
    ///////////////////////////////////////////////////////////////////////////////////
    }
  


    render() { 
        const { activeOptionIdx } = this.state;
        const { options } = this.props;


        // const {label} = this.props.options[this.state.activeOptionIdx];
        const {label} = options[activeOptionIdx];

        // console.log(activeOption);

        return (
        <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <p>Обрано колір : {label }</p>
          <div>
                    {this.props.options.map(({ label, color }, index) => {
                        return (
                            <button
                                key={label}
                                className={this.makeOptionClassName(index)}
                                style={{
                                    backgroundColor: color,
                                }}
                                onClick={() => {this.setActiveIdx( index)}}
                            ></button>
                        );
                    })}
         </div>
    </div> 
        )
    }
}

//////////////////////////////////////////////////////////////////
// const ColorPicker = ({ options }) => (

//     <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <div>
//             {options.map(({ label, color }) => (
//                 <span
              
//                     key={label}
//                     className='ColorPicker__option'
//                     style={{ backgroundColor: color}}
//                 ></span>
//             ))}
//         </div>
//     </div>
    
  
// );

/////////////////////////////////////////////////////////////////////
 

export default ColorPicker;