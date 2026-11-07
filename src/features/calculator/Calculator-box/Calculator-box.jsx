import "./Calculator-box.css";
import CalculatorInputs from "./calculator-inputs/CalculatorInputs";
import CalculatorNumpad from "./calculator-numPad/CalculatorNumpad"
import CalculatorSymFunc from "./calculator-SymFunc/CalculatorSymFunc"
function CalculatorBox(){



    return(
        <>
        <div className="calculator-box">
            <div>
            <p>Enter an expression</p>
            </div>
            <CalculatorInputs />
            <div>
            <CalculatorNumpad/>
            <CalculatorSymFunc/>

            </div>

        </div>
        </>
    )
}
export default CalculatorBox;