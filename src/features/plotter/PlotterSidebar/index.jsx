

import { ChevronsLeft, ChevronsRight, Plus, Redo2, Settings, Undo2 } from 'lucide-react';
import './index.css';
import PlotterItemList from './PlotterItemList';
import { useState } from 'react';

function PlotterSidebar() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={collapsed ? "plotter-sidebar collapsed" : "plotter-sidebar"}>
      <div className="sidebar-actions">
        <div className="sidebar-action">
          <button>
            <Plus />
          </button>

        </div>
        <div className="sidebar-action sidebar-action-large">
          <button>
            <Undo2 />
          </button>
          <button>
            <Redo2 />
          </button>
        </div>
        <div className="sidebar-action sidebar-action-large">
          <button>
            <Settings />
          </button>
          <button onClick={() => {
            setCollapsed(prev => !prev);
          }}>
            {collapsed ? <ChevronsRight /> : <ChevronsLeft />}
          </button>
        </div>
      </div>

      <PlotterItemList />

    </div>
  );
}


export default PlotterSidebar;
