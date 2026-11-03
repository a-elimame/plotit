import { ArrowDownUp } from "lucide-react";

import './Unitselector.css'
import units from "../units/units"


function UnitSelector({fromUnit,setFromUnit,
                    toUnit,
                    setToUnit,selectedCategory}){

                  const swapUnits=()=>{
                    setFromUnit(toUnit);
                    setToUnit(fromUnit);
                  }   
                  const availableUnits=units[selectedCategory];   
                        

    return(
 <div className="Unit-selector">
                <div className="From-unit">
                    <label htmlFor="from-select">From</label>
                    <select id="from-select" className="f-select"
                    
                    value={fromUnit}
                    onChange={(e)=>{
                        setFromUnit(e.target.value)
                    }}
                    
                    
                    >
                       {availableUnits.map((unit) => (
                        <option key={unit.symbol} 
                        value={unit.symbol}
                        
                        >{unit.name} ({unit.symbol})</option>
                       ))}

                    </select>
                </div>
                <button className="swap-butt" onClick={swapUnits}><ArrowDownUp strokeWidth={2} style={{ transform :"rotate(90deg)"}} className="arrow-du"/></button>
                <div className="to-unit">
                    <label htmlFor="to-select">To</label>
                    <select id="to-select" className="t-select"
                    
                     value={toUnit}
                    onChange={(e)=>{
                        setToUnit(e.target.value)


                    }}
                    
                    >
                       {availableUnits.map((unit)=>(
                        <option key={unit.symbol} 
                        value={unit.symbol}
                        
                        >{unit.name} ({unit.symbol})</option>
                       ))}

                    </select>
                </div>
                </div>
    )



}
export default UnitSelector;