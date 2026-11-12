import { useEffect, useState } from 'react';
import ExpressionItem from "./items/ExpressionItem";
import './index.css';

import InputStream from "../../../../engine/lexer/InputStream.ts";

function PlotterItem({ type, lexer }) {


  const [inputStream] = useState(new InputStream("", lexer.tokenize));
  const [inputStreamUpdated, setInputStreamUpdated] = useState(0);

  const handleUpdate = (e) => {
    inputStream.input = e.target.value;
    setInputStreamUpdated(prev => prev + 1);
  }
  useEffect(() => {
    console.log(inputStream.tokenList);
  }, [inputStreamUpdated])
  return (
    <div className="plotter-item">
      <ExpressionItem handleUpdate={handleUpdate} />
    </div>
  );
}


export default PlotterItem;

