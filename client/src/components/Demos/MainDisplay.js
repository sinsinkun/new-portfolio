import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MainDisplay() {

  const loc = useLocation();
  const [demo, setDemo] = useState("none");

  useEffect(() => {
    let newDemo = loc.pathname.replace("/demos/","");
    if (newDemo.includes("/demos")) newDemo = "none";
    setDemo(newDemo);
  }, [loc])

  return(
    <div className="projects-main">
      <div className="center">
        {demo==="none" ? <span>Demos page still in progress</span> : ""}
        {demo!=="none" ? <span>{demo} demo coming soon...</span> : ""}
      </div>
    </div>
  )
}

export default MainDisplay;