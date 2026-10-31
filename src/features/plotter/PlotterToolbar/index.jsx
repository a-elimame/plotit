import { ChartSpline, Settings } from "lucide-react";
import './index.css';
function PlotterToolbar() {



  return (<>

    <div className="plotter-toolbar">
      <div className="plotter-document-name">
        <div className="document-icon">
          <ChartSpline strokeWidth={1}></ChartSpline>
        </div>
        <div className="document-name">
          <input placeholder="Untitled document" />
        </div>
      </div>
      <div className="toolbar-actions">
        <div className="toolbar-action">
          <button className="btn btn-reversed ">Save</button>
        </div>
        <div className="toolbar-action">
          <button>
            <Settings></Settings>
          </button>

        </div>
      </div>
    </div>

  </>);
}


export default PlotterToolbar;
