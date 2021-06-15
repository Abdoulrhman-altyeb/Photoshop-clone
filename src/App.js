import React,{useState} from 'react';
import './App.css';
import {data} from './data'

// components
import SidebarBTN from './SidebarBTN'
import Slider from './Slider'

const App = () => {

    const [options, setOptions] = useState(data);
    const [activeOption, setActiveOption] = useState(0);
    const selectedOption = options[activeOption];


    // const handelActiveOption =(index, e) => {
    //     // setOptions(currentOption => {
    //     //     if(index !== activeOption) return currentOption;
    //     //     return {}
    //     // })
    //     return '';
    // }   
    const handleValueChange = ({target}) =>{
        setOptions(currentOption => {
            return currentOption.map((option,index ) => {
                if(index !== activeOption) return option;
                return {...option, value : target.value}
            })
        })
    }

    const handelStyle =() => {
        const properties = options.map(option => {
            return `${option.property}(${option.value}${option.symbol})`;
        })
        return {filter: properties.join(' ')}
    }


    console.log(handelStyle())
    return (
        <div className='container'>
            <div className='bg-img'  style={handelStyle()}/>
            <div className='sidebar'>
                {options.map((option,index) => {
                    return(
                        <SidebarBTN 
                            key={index} 
                            {...option} 
                            active={index === activeOption} 
                            handelChange = {() => setActiveOption(index)}
                            />
                    )
                })}
            </div>
            <Slider 
                min={selectedOption.scale.min}
                max={selectedOption.scale.max}
                value = {selectedOption.value}
                handelValue={handleValueChange}
                />
        </div>
    )
}

export default App;