import { ChartLine, Settings, Plus, Undo2, Redo2, X, ZoomIn, ZoomOut, Settings2 } from 'lucide-react'
import "../styles/graph.css";
import Navbar from '../layouts/Navbar';
import Plotter from '../../features/plotter';
function PlotPage() {

    return (
        <>
            <Navbar />
            <Plotter />
        </>
    )
}


export default PlotPage;
