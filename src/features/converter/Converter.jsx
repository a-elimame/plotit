

import './Converter.css';
import UnitList from "./Units-list/UnitsList";
import ConversionInput from "./Conversion-inputs/ConversionInputs";
import UnitSelector from "./Unit-selector/Unitselector";





function Converter(){
    return(
        <>
        <div className="spacee">
        <div className="Converter-border">
            <div className="Converter-box">
                {/*Units choose */}
               <UnitList/>
                {/*------*/}

                {/*inputs*/}
                <ConversionInput/>
                {/*----------------*/}
                
                <UnitSelector/>

            </div>

        </div>
        </div>
       
        </>

    )
}
export default Converter;