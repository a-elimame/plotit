import './ConversionInputs.css'




function ConversionInput(){
    return(
 <div className="Conversion-inputs">
                    
                        <input type="number" id="input-num" className="conversionInput"/>
                        <p>=</p>
                        <input type="text" className="conversionInput" id="result" readOnly />
                   

                </div>
    )



}
export default ConversionInput;