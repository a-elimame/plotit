import {ChartLine,Settings,Plus,Undo2,Redo2,X,ZoomIn,ZoomOut,Settings2} from'lucide-react'
import "./Graph.css";
import Navbar from '../layouts/Navbar';

function PlotPage() {

 return(
        <>
        <Navbar/>
       <div className="graph">

        {/*graph tool bar */}
        <div className="graph-toolbar">
            <div className="title">
            <ChartLine className="icons" size={20} strokeWidth={1}/>
            <input type="text" className="graph-title" placeholder="Untitled Graph"/>
        </div>
        <div className="but-up">
        <button id="save_butt" className="saveb">Save</button>
        <button id="sett_graph" className='settingsb'><Settings strokeWidth={1} size={20}/></button>
        </div>
        </div>
        {/*------------------------------------------------------- */}
        

        <div className="graph_toolb">

          {/*expressions inputs */}
        <div className="exp-inputs">
            <div className="in-toolbar">
                <div className="iconss">
                <Plus size={20} className="iconst"strokeWidth={1}/>
                </div>

                 <div className="iconss">
                <Undo2 size={20} className="iconst"strokeWidth={1}/>
                <Redo2 size={20} className="iconst"strokeWidth={1}/>
                </div>

                 <div className="iconss">
                <Settings size={20} className="iconst"strokeWidth={1}/>
                </div>

            </div>
        <div className='inputs'>
            <div className="circle">
            <span className='colored-cir'></span>
            </div>
            <input type="text" className="fct-input"/>
            <button className="deleteb" id="delet-butt"><X size={20}strokeWidth={1} className="dlt-b"/></button>
        </div>
        </div>
        {/*-------------------------------------------------------- */}
        
        {/*graph area*/}
        <div className="thegraph">
            <canvas className="area"></canvas>
            <div className="x-axis"></div>
            <div className="y-axis"></div>

            <span className='x-lab'>x</span>
            <span className='y-lab'>y</span>
            <span className='o-lab'>o</span>

            <div className="x-numbers">
            <span>-3</span>
            <span>-2</span>
            <span>-1</span>
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            </div>

            <div className="y-numbers">
            <span>-3</span>
            <span>-2</span>
            <span>-1</span>
            <span></span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            </div>



            <div className="zoom-set">
             <button id="set2" className="sett2"><Settings2 strokeWidth={1}/></button>
            <button id="zi" className="sett2"><ZoomIn strokeWidth={1}/></button>
             <button id="zo" className="sett2"><ZoomOut strokeWidth={1}/></button>
             </div>
        </div>
        {/*-------------------------------------------------------- */}
        
        </div>

       </div>
      </>
    )
}


export default PlotPage;
