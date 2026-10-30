import {ChartNoteAxesCombined,Settings,Plus,Undo2,Redo2,X,ZoomIn,ZoomOut,Settings2} from'lucide-react'
function Graph(){
    return(
       <div className="graph">
        <div className="graph-toolbar">
            <div>
            <ChartNoteAxesCombined/>
            <input type="text" className="graph-title"/>
        </div>
        <button id="save_butt" className="saveb">Save</button>
        <button id="sett_graph" className='settingsb'><Settings/></button>
        </div>
        

        
        <div className="exp-inputs">
            <div className="in-toolbar">
                <Plus/>
                <Undo2/>
                <Redo2/>
                <Settings/>

            </div>
        <div className='inputs'>
        
            <span className='colored-cir'></span>
            <input type="text" />
            <button className="deleteb" id="delet-butt"><X/></button>
        </div>
        </div>
        <div className="thegraph">
            <canvas className="area"></canvas>
             <button id="set2" className="sett2"><Settings2/></button>
            <button id="zi" className="zoomin"><ZoomIn/></button>
             <button id="zo" className="zoomout"><ZoomOut/></button>
             
        </div>

       </div> 
    )
}
export default Graph;