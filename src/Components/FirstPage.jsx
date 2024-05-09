import { useNavigate } from 'react-router-dom';
import image1 from "../Images/images.png";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpeg";
import image4 from "../Images/image4.jpeg";
import image6 from "../Images/image6.png";
import "../Styles/FirstPage.css";

const FirstPage = () =>{
  let navigate=useNavigate();
  function secondpage() {
    navigate("secondpage")
  }
  return (
    <div className="firstpage">
      <div className="navbar">
        <img id="img1" src={image1} alt="" />
        <button onClick={secondpage} id="btn1">Get Projects</button> <br />
        <button id="btn2">Onboard Talent</button>
      </div>
      <div className="heading">
        <h3>Success stories</h3>
        <h1>
          Every success journey <br /> we've encountered.
        </h1>
      </div>
      <div className="section">
        <div className="left">
          <img id="img2" src={image2} alt="" />
        </div>
        <div className="right">
          <h2>
            Enhance fortune 50 <br /> company's insights <br />
            teams research <br />
            capabilities
          </h2>
          <button id="btn3">
            <section>Explore More →</section>
          </button>
        </div>
      </div>
      <div className="box1">
        <img id="img3" src={image3} alt="" />
        <h3>
          Achieved reduction in <br />
          project execution time <br />
          by optimising team <br /> availability
        </h3>
      </div>
      <div className="box2">
        <div className="img4">
          <img id="img4" src={image4} alt="" />
        </div>
        <div className="text">
          <h3 id="p1">10 DAYS</h3>
          <h4 id="p2">Staff Deployment</h4>
        </div>
      </div>
      <div className="box3">
        <div className="text2">
          <div className="dollor">
            <h1>$0.5</h1>
          </div>
          <div className="million">
            <h3>MILLION</h3>
          </div>
        </div>
        <div className="text3">
          <h3>
            Reduced client expenses <br /> by saving on hiring and <br />{" "}
            employee costs.
          </h3>
        </div>
      </div>
      <div className="box">
        <div className="boxleft">
          <h3>What's on your mind</h3>
          <h1>Ask Questions</h1>
        </div>
        <div className="boxright">
          <div className="one">
            <div className="qn1">
              <h3>Do you offer freelancers?</h3>
            </div>
            <div className="pl1">
              <h3>+</h3>
            </div>
          </div>
          <hr />
          <div className="two">
            <div className="qn2">
              <h3>
                What's the guarantee that I will be satisfied <br /> with the
                hired talent?
              </h3>
            </div>
            <div className="pl2">
              <h3>+</h3>
            </div>
          </div>
          <hr />
          <div className="three">
            <div className="qn3">
              <h3>Can I hire multiple talents at once?</h3>
              <p>
                If unhappy with a project, communicate with the freelancer,allow
                for revisions, and <br />
                refer to the agreement. Escalate to platform support if needed,
                considering <br /> mediation. Review policies, seek
                collaborative solutions for resolution.
              </p>
            </div>
            <div className="pl3">
              <h3>-</h3>
            </div>
          </div>
          <hr />
          <div className="four">
            <div className="qn4">
              <h3>Why should I not go to an agency directly?</h3>
            </div>
            <div className="pl4">
              <h3>+</h3>
            </div>
          </div>
          <hr />
          <div className="five">
            <div className="qn5">
              <h3>
                Who can help me pic a right skillset <br /> and duration for me?
              </h3>
            </div>
            <div className="pl5">
              <h3>+</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="r1">
          <div className="symbol"><img src={image6} alt="" /></div>
          <div className="writing">Talup 2023. All rights reserved</div>
        </div>
        <div className="r2">
          <div className="side1"><a href="">Terms & Conditions</a></div>
          <div className="side2"><a href="">Privacy Policy</a></div>
        </div>
      </div>
    </div>
  );
};
export default FirstPage;
