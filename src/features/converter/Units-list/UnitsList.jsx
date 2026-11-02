import "./UnitsList.css";
import {Ruler,Square,FlaskConical,Weight,Clock,Thermometer,Gauge,Zap,HardDrive,GaugeCircle} from 'lucide-react';


function UnitList(){
    return(
 <div className="Units-list">
                <h3>CATEGORIES</h3>
                <button><Ruler size={30} strokeWidth={1.5} className="iconx"/>Lenght</button>
                <button><Square size={30} strokeWidth={1.5} className="iconx"/>Area</button>
                <button><FlaskConical size={30} strokeWidth={1.5} className="iconx"/>Volume</button>
                <button><Weight size={30} strokeWidth={1.5} className="iconx"/>Mass</button>
                <button><Clock size={30} strokeWidth={1.5} className="iconx"/>Time</button>
                <button><Thermometer size={30} strokeWidth={1.5} className="iconx"/>Temperature</button>
                <button><Gauge size={30} strokeWidth={1.5} className="iconx"/>Speed</button>
                <button><GaugeCircle size={30} strokeWidth={1.5} className="iconx"/>Pressure</button>
                <button><Zap size={30} strokeWidth={1.5} className="iconx"/>Energy</button>
                <button><HardDrive size={30} strokeWidth={1.5} className="iconx"/>Digital storage</button>
                </div>
    )



}
export default UnitList;