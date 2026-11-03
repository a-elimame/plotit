import "./UnitsList.css";
import {Ruler,Square,FlaskConical,Weight,Clock,Thermometer,Gauge,Zap,HardDrive,GaugeCircle} from 'lucide-react';
import { useState } from "react";

function UnitList({selectedCategory,setSelectedCategory}){
    
    return(
 <div className="Units-list">
                <h3>CATEGORIES</h3>
                <button onClick={()=> setSelectedCategory("Length")} 
                    className={ `${selectedCategory === "Length"? "active" : ""}`}
                    
                    ><Ruler size={30} strokeWidth={1.5} className="iconx"/>Length</button>
                
                
                
                <button 
                onClick={()=> setSelectedCategory("Area")} 
                    className={`${selectedCategory === "Area"? "active" : ""} `}
                
                ><Square size={30} strokeWidth={1.5} className="iconx"/>Area</button>
                
                
                
                <button
                onClick={()=> setSelectedCategory("Volume")} 
                    className={`${selectedCategory === "Volume"? "active" : ""} `}
                
                
                ><FlaskConical size={30} strokeWidth={1.5} className="iconx"/>Volume</button>
                
                
                <button
                
                onClick={()=> setSelectedCategory("Mass")} 
                    className={`${selectedCategory === "Mass"? "active" : ""} `}
                
                
                
                ><Weight size={30} strokeWidth={1.5} className="iconx"/>Mass</button>
                
                
                <button
                onClick={()=> setSelectedCategory("Time")} 
                    className={`${selectedCategory === "Time"? "active" : ""} `}
                
                ><Clock size={30} strokeWidth={1.5} className="iconx"/>Time</button>
                
                
                <button 
                onClick={()=> setSelectedCategory("Temperature")} 
                    className={`${selectedCategory === "Temperature"? "active" : ""} `}
                
                
                ><Thermometer size={30} strokeWidth={1.5} className="iconx"/>Temperature</button>
                
                
                <button
                
                onClick={()=> setSelectedCategory("Speed")} 
                    className={`${selectedCategory === "Speed"? "active" : ""} `}
                
                ><Gauge size={30} strokeWidth={1.5} className="iconx"/>Speed</button>
                
                
                <button 
                onClick={()=> setSelectedCategory("Pressure")} 
                    className={`${selectedCategory === "Pressure"? "active" : ""} `}
                
                ><GaugeCircle size={30} strokeWidth={1.5} className="iconx"/>Pressure</button>
                
                
                <button  
                onClick={()=> setSelectedCategory("Energy")} 
                    className={`${selectedCategory === "Energy"? "active" : ""} `}
                
                
                ><Zap size={30} strokeWidth={1.5} className="iconx"/>Energy</button>
                <button
                onClick={()=> setSelectedCategory("Digital storage")} 
                    className={`${selectedCategory === "Digital storage"? "active" : ""} `}
                
                ><HardDrive size={30} strokeWidth={1.5} className="iconx"/>Digital storage</button>
                </div>
    )



}
export default UnitList;