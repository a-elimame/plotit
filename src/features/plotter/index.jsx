import PlotterToolbar from './PlotterToolbar/';
import PlotterSidebar from './PlotterSidebar';
import PlotterSpace from './PlotterSpace';




function Plotter() {

  return (<>

    <PlotterToolbar />
    <div className="plotter">
      <PlotterSidebar />
      <PlotterSpace />
    </div>

  </>);

}


export default Plotter;
