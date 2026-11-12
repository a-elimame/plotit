
import PlotterItem from './PlotterItem.jsx';
import Lexer from '../../../../engine/lexer/Lexer.ts';


const lexer = new Lexer();

function PlotterItemList() {
  return (
    <div className="plotter-item-list">

      <PlotterItem type={'expression'} lexer={lexer} />
    </div>
  );
}


export default PlotterItemList;
