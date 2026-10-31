import { ArrowDownUp } from "lucide-react";





function UnitSelector(){
    return(
 <div className="Unit-selector">
                <div className="From-unit">
                    <label htmlFor="from-select">From</label>
                    <select id="from-select" className="f-select">
                       <option value="m">Meter (m)</option>
                       <option value="km">kilometer (km)</option>
                       <option value="mm">Milimeter (mm)</option>
                       <option value="cm">Centimeter (cm)</option>
                       <option value="in">Inch (in)</option>
                       <option value="ft">Foot (ft)</option>
                       <option value="mi">Mile (mi)</option>
                       <option value="yd">Yard (yd)</option> 

                    </select>
                </div>
                <button className="swap-butt"><ArrowDownUp/></button>
                <div className="to-unit">
                    <label htmlFor="to-select">To</label>
                    <select id="to-select" className="t-select">
                       <option value="m">Meter (m)</option>
                       <option value="km">kilometer (km)</option>
                       <option value="mm">Milimeter (mm)</option>
                       <option value="cm">Centimeter (cm)</option>
                       <option value="in">Inch (in)</option>
                       <option value="ft">Foot (ft)</option>
                       <option value="mi">Mile (mi)</option>
                       <option value="yd">Yard (yd)</option> 

                    </select>
                </div>
                </div>
    )



}
export default UnitSelector;