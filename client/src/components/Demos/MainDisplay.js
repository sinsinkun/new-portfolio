import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MainDisplay() {

  const loc = useLocation();
  const [demo, setDemo] = useState();

  useEffect(() => {
    let newDemo = loc.pathname.replace("/demos/","");
    if (newDemo.includes("/demos")) newDemo = "none";
    setDemo(newDemo);
  }, [loc])

  return(
    <div className="projects-main">
      <div className="center">
        <span>Current demo: {demo}</span>
      </div>
    </div>
  )
}

export default MainDisplay;