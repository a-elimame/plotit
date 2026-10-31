import { AudioWaveform, SquareFunction } from "lucide-react";


function ExpressionItem() {
  return (<>

    <div className="item-actions">
      <div className="item-actions-drag"></div>
      <span className="item-number">1</span>
      <div className="item-action">
        <button>
          <AudioWaveform />
        </button>
      </div>

      {/* <div className="item-action"> */}
      {/*   <button> */}
      {/*     <AudioWaveform /> */}
      {/*   </button> */}
      {/* </div> */}
    </div>
    <div className="item-content">
      <div class="item-custom-input" contentEditable >

      </div>
    </div>

  </>);
}
export default ExpressionItem;


