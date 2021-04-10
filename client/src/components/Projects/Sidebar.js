import { useStoreContext } from '../GlobalStore';

function Sidebar() {

  const [store] = useStoreContext();

  if (store.winX > 980) return(
    <div className="sidebar">
      <h3 className="sidebar-title">Demos</h3>
      <input className="sidebar-search" placeholder="Search" />
      <ul className="sidebar-btn-list">
        <li><button>Button</button></li>
        <li><button>Button</button></li>
        <li><button>Button</button></li>
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