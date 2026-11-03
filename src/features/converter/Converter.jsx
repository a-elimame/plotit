

import './Converter.css';
import UnitList from "./Units-list/UnitsList";
import ConversionInput from "./Conversion-inputs/ConversionInputs";
import UnitSelector from "./Unit-selector/Unitselector";
import { useState,useEffect } from 'react';
import units from "./units/units";



function Converter(){
    const [fromUnit,setFromUnit]=useState("m");
    const [toUnit,setToUnit]=useState("m");
    const [selectedCategory,setSelectedCategory]=useState("Length");
    
    useEffect(()=>{
        const firstUnit=units[selectedCategory][0].symbol;
        setFromUnit(firstUnit);
        setToUnit(firstUnit);
    },[selectedCategory]);
    
    return(
        <>
        
        <div className="Converter-border">
            <div className="Converter-box">
                <div className="category-units">
                 <div className="titles-conversion">  
                <h1>Convert units</h1>
                <p>Choose a category and enter your value.</p>
                 </div>

               <UnitList className="CATEGORIES-list" 
               selectedCategory={selectedCategory}
               setSelectedCategory={setSelectedCategory}
               
               />
                </div>

               <div className="value-conversion">
                
                <h3>VALUE CONVERSION</h3>
                
                <ConversionInput
                selectedCategory={selectedCategory}
                fromUnit={fromUnit}
                toUnit={toUnit}
                />
               
                
                <UnitSelector
                    fromUnit={fromUnit}
                    setFromUnit={setFromUnit}
                    toUnit={toUnit}
                    setToUnit={setToUnit}
                    selectedCategory={selectedCategory}
                    />
                </div>

            </div>

        </div>
        
       
        </>

    )
}
export default Converter;