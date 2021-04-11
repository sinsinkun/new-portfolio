import { useStoreContext } from '../GlobalStore';
import { useHistory } from "react-router-dom";

function Sidebar() {

  const history = useHistory();
  const [store] = useStoreContext();

  function goToDemo(demo) {
    history.push("/demos/" + demo);
  }

  if (store.winX > 980) return(
    <div className="sidebar">
      <h3 className="sidebar-title">Demos</h3>
      <input className="sidebar-search" placeholder="Search" />
      <ul className="sidebar-btn-list">
        <li><button onClick={() => goToDemo("popout")}>Popout tabs</button></li>
        <li><button onClick={() => goToDemo("reactive")}>Reactive layouts</button></li>
        <li><button onClick={() => goToDemo("dragdrop")}>Drag and drop</button></li>
      </ul>
    </div>
  )
  else return(
    <div className="sidebar closed">
      [&nbsp;&nbsp;&nbsp;]
    </div>
  )
}

export default Sidebar;