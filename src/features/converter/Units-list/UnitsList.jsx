import "./UnitsList.css";
import {Ruler,Square,FlaskConical,Weight,Clock,Thermometer,Gauge,Zap,HardDrive,GaugeCircle} from 'lucide-react';


function UnitList(){
    return(
 <div className="Units-list">
                <button><Ruler strokeWidth={1}/>Lenght</button>
                <button><Square strokeWidth={1}/>Area</button>
                <button><FlaskConical strokeWidth={1}/>Volume</button>
                <button><Weight strokeWidth={1}/>Mass</button>
                <button><Clock strokeWidth={1}/>Time</button>
                <button><Thermometer strokeWidth={1}/>Temperature</button>
                <button><Gauge strokeWidth={1}/>Speed</button>
                <button><GaugeCircle strokeWidth={1}/>Pressure</button>
                <button><Zap strokeWidth={1}/>Energy</button>
                <button><HardDrive strokeWidth={1}/>Digital storage</button>
                </div>
    )



}
export default UnitList;