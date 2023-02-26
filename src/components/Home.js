import Bmi from "./Bmi";

const searchStyle = {
	// display: "flex",
	// padding: "20px",
	// justifyContent: "center",
	// gap: "50px",
  color: "black"
};

function Home() {
      
  return (
      <div className="card sizehomepgheight menu-container container-fluid centerhomemaindiv" style={searchStyle}>{/* */}
        <div className="card" style={{width: "18rem"}}>
          <div class="card-body">
            <h5 class="card-title">Begin by calculating your BMI below</h5>
            {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        <Bmi />
      </div>
  )
}
    
export default Home;