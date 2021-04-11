import logoImg from '../../media/personal_logo_inverted.png';

function Home() {
  return(
    <div className="container">
      <div style={{ width:"80%" }}>
        <h1 style={{ textAlign:"center" }}>Hello!</h1>
        <div className="center">
          <img src={logoImg} className="logo-img" alt="logo" />
        </div>
        <p>
          My name is JingChang Xiao, but most people call me Chang. 
          Welcome to my portfolio website.
        </p>
        <p>
          With this portfolio, I am hoping to demonstrate that I have gained a high
          proficiency in web design, and am ready to apply my skills in the industry.
          This website was built using ReactJS and is fully responsive, meaning that it 
          will adapt the placement of page elements based on the screen size of your device.
          All functionality for the front end are in plain React and do not utilize any third
          party libraries, and all CSS is also custom written by me.
        </p>
        <p>
          Server based functionality for this website is also supported with a NodeJS server, 
          utilizing an interface built on ExpressJS and using a MongoDB database to save data.
          That means this website is a fully functional MERN stack project.
        </p>
        <p>
          With all that said, feel free to look around, and take a look at my Github if you 
          are interested in any of my other works (link in the about me page). 
          I hope you enjoy my website!
        </p>
      </div>
    </div>
  )
}

export default Home;