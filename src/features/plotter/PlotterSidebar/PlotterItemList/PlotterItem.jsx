import ExpressionItem from "./items/ExpressionItem";
import './index.css';


function PlotterItem({ type }) {


  return (
    <div className="plotter-item">
      <ExpressionItem />
    </div>
  );
}


export default PlotterItem;
