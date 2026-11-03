import './ConversionInputs.css'

import { useState } from 'react';
import conversionUnits from "../plotit-conversion-units.json"


function ConversionInput({fromUnit,toUnit,selectedCategory}){

const availableUnits=conversionUnits.filter(unit=>unit.type === selectedCategory);
const from =availableUnits.find(unit=>unit.symbol === fromUnit);
const to =availableUnits.find(unit=>unit.symbol === toUnit);
const [inputValue,setInputValue]=useState("");
const result= inputValue === "" || !from || !to
? ""
: ((Number(inputValue) * from.conversion + (from.offset ?? 0))-(to.offset ?? 0))/to.conversion;
    return(
 <div className="Conversion-inputs">
    
                        <div className="conversionInput">

                            <label for="input-num">Input value</label>
                        
                        <div className="inputValue">
                        <input type="number" id="input-num" 
                        
                        value={inputValue}
                        onChange={(e)=>setInputValue(e.target.value)}
                        />
                        <span>{from?.symbol}</span>
                        </div>
                        </div>
                        <p>=</p>
                        <div className="conversionInput">
                        <label for="result">Result</label>
                        <div className="inputValue">
                        <input type="text" id="result" 
                        value={result === "" ? "" : Number(result.toFixed(8))}
                        
                        readOnly 
                        />
                        <span>{to?.symbol}</span>
                        </div>
                        </div>

                </div>
    )



}
export default ConversionInput;