

import './Converter.css';
import UnitList from "./Units-list/UnitsList";
import ConversionInput from "./Conversion-inputs/ConversionInputs";
import UnitSelector from "./Unit-selector/Unitselector";





function Converter(){
    return(
        <>
        
        <div className="Converter-border">
            <div className="Converter-box">
                <div className="category-units">
                 <div className="titles-conversion">  
                <h1>Convert units</h1>
                <p>Choose a category and enter your value.</p>
                 </div>

               <UnitList className="CATEGORIES-list"/>
                </div>

               <div className="value-conversion">
                
                <h3>VALUE CONVERSION</h3>
                
                <ConversionInput/>
               
                
                <UnitSelector/>
                </div>

            </div>

        </div>
        
       
        </>

    )
}
export default Converter;