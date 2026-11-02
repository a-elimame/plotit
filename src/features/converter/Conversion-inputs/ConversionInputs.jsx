import './ConversionInputs.css'




function ConversionInput(){
    return(
 <div className="Conversion-inputs">
    
                        <div className="conversionInput">

                            <label for="input-num">Input value</label>
                        
                        <div className="inputValue">
                        <input type="number" id="input-num" />
                        <span>meter</span>
                        </div>
                        </div>
                        <p>=</p>
                        <div className="conversionInput">
                        <label for="result">Result</label>
                        <div className="inputValue">
                        <input type="text" id="result" readOnly />
                        <span>meter</span>
                        </div>
                        </div>

                </div>
    )



}
export default ConversionInput;