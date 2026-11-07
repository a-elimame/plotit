

import "./calculator.css"; 
import CalculatorBox from "./Calculator-box/Calculator-box";






function Calculator(){
    return(
        <>
        <div className="Calculator-container">
        <div className="Calculator-header">
        <h1>Calculus Calculator</h1>
        <p>Compute derivatives, integrals, and more</p>
        </div>
        <CalculatorBox/>
        </div>

        </>


        
    )
}
export default Calculator;