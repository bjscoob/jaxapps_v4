import React from "react";
import HomePage from "./HomePage.js";
import ABPage from "./AboutMe.js";
import ContactPage from "./Contact.js";
import PortfoliPage from "./Portfolio.js";

class Interface extends React.Component {
  constructor(props) {
    super(props);

    this.imgs = [];
    this.portfolio = [];
    this.home_data = [];
    this.about_me = [];
    this.getPortfolio();
    this.getHomeData();
    this.getAboutMeData();

    this.state = {
      currentView: <HomePage home_data={this.home_data} />,
      currentState: 1,
      upImg: "arrowBtnUp",
      downImg: "arrowBtnDown",
      sec0: "imgHide",
      sec1: "",
      sec3: "",
      sec4: "imgHide",
      img0: 0,
      img1: 1,
      img2: 2,
      img3: 0,
      img4: 1,
      currIndex: 2,
      portFolioComplete: false
    };
    this.img2Ref = React.createRef();
    this.topOffsetRef = React.createRef();
  }

  carousel(index, parser) {
    //check for index 0 and -1
    if (index == 0 && parser == -1) {
      return this.imgs.length - 1;
    }
    //check for last index and +1
    if (index == this.imgs.length - 1 && parser == 1) {
      return 0;
    }
    //else return index + parser
    return index + parser;
  }

  async getPortfolio() {
    //fetch portfolio data
    const response = await fetch("https://jax-apps.com/portfolio.json");
    const json = await response.json();
    json.portfolio.forEach((data) => {
      this.imgs = [...this.imgs, data.icon];
      this.portfolio = [...this.portfolio, data];
    });
    this.setState({ portFolioComplete: true });
  }
  async getHomeData() {
    //fetch Home Data data
    const response = await fetch("https://jax-apps.com/home_data.json");
    const json = await response.json();
    json.home_data.forEach((data) => {
      this.home_data = [...this.home_data, data];
    });
    this.setState({
      currentView: <HomePage home_data={this.home_data} />
    });
  }
  async getAboutMeData() {
    //fetch ABOUT ME data
    const response = await fetch("https://jax-apps.com/about_me.json");
    const json = await response.json();
    json.about_me.forEach((data) => {
      this.about_me = [...this.about_me, data];
    });
  }
  render() {
    return (
      <div class="interfaceGrid">
        <div class="menuGrid" ref={this.topOffsetRef}>
          <div class="flip-container">
            <div class="flipper">
              <div class="front1">
                <button
                  class="menuButton"
                  id="btn1"
                  onClick={() =>
                    this.setState({
                      currentView: <HomePage home_data={this.home_data} />,
                      currentState: 1
                    })
                  }
                >
                  HOME
                </button>
              </div>
              <div class="back"></div>
            </div>
          </div>
          <div class="flip-container">
            <div class="flipper">
              <div class="front2">
                <button
                  class="menuButton"
                  id="btn2"
                  onClick={() =>
                    this.setState({
                      currentView: <ABPage about_me={this.about_me} />,
                      currentState: 2
                    })
                  }
                >
                  ABOUT ME
                </button>
              </div>
              <div class="back"></div>
            </div>
          </div>
          <div class="flip-container">
            <div class="flipper">
              <div class="front3">
                <button
                  class="menuButton"
                  id="btn3"
                  onClick={() =>
                    this.setState({
                      currentView: <ContactPage />,
                      currentState: 3
                    })
                  }
                >
                  CONTACT
                </button>
              </div>
              <div class="back"></div>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <div class="carouselCont" onMouseMove={this.onMouseMove}>
            <div>
              <img
                class={this.state.upImg}
                onClick={() => {
                  this.setState({
                    upImg: "arrowBtnUpClicked",
                    sec3: "imgHide",
                    sec0: ""
                  });

                  var newImg0 = this.carousel(this.state.img0, -1);
                  var newImg1 = this.carousel(this.state.img1, -1);
                  var newImg2 = this.carousel(this.state.img2, -1);
                  var newImg3 = this.carousel(this.state.img3, -1);
                  var newImg4 = this.carousel(this.state.img4, -1);
                  var newData = this.portfolio[newImg2];
                  setTimeout(() => {
                    this.setState({
                      upImg: "arrowBtnUp",
                      downImg: "arrowBtnDown",
                      sec0: "imgHide",
                      sec1: "",
                      sec3: "",
                      sec4: "imgHide",
                      img0: newImg0,
                      img1: newImg1,
                      img2: newImg2,
                      img3: newImg3,
                      img4: newImg4,
                      currentView: <PortfoliPage data={newData} />
                    });
                  }, 100);
                }}
                width="100%"
                height="100%"
              />
            </div>
            <div class="carousel">
              <div id={this.state.sec0}>
                <img
                  alt="caroImg"
                  class="caroImg"
                  id="img0"
                  src={this.imgs[this.state.img0]}
                />
              </div>
              <div id={this.state.sec1}>
                <img
                  alt="caroImg"
                  class="caroImg"
                  id="img1"
                  src={this.imgs[this.state.img1]}
                />
              </div>
              <div id="img2Cont" ref={this.img2Ref}>
                <img
                  alt="caroImg"
                  class="caroImg"
                  id="img2"
                  src={this.imgs[this.state.img2]}
                />
              </div>
              <div id={this.state.sec3}>
                <img
                  alt="caroImg"
                  class="caroImg"
                  id="img3"
                  src={this.imgs[this.state.img3]}
                />
              </div>
              <div id={this.state.sec4}>
                <img
                  alt="caroImg"
                  class="caroImg"
                  id="img4"
                  src={this.imgs[this.state.img4]}
                />
              </div>
            </div>
            <div>
              <img
                class={this.state.downImg}
                onClick={() => {
                  this.setState({
                    downImg: "arrowBtnDownClicked",
                    sec4: "",
                    sec1: "imgHide"
                  });

                  var newImg0 = this.carousel(this.state.img0, 1);
                  var newImg1 = this.carousel(this.state.img1, 1);
                  var newImg2 = this.carousel(this.state.img2, 1);
                  var newImg3 = this.carousel(this.state.img3, 1);
                  var newImg4 = this.carousel(this.state.img4, 1);
                  var newData = this.portfolio[newImg2];
                  setTimeout(() => {
                    this.setState({
                      upImg: "arrowBtnUp",
                      downImg: "arrowBtnDown",
                      sec0: "imgHide",
                      sec1: "",
                      sec3: "",
                      sec4: "imgHide",
                      img0: newImg0,
                      img1: newImg1,
                      img2: newImg2,
                      img3: newImg3,
                      img4: newImg4,
                      currentView: <PortfoliPage data={newData} />
                    });
                  }, 100);
                }}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>

        <div class="grid-item">
          <div class="contentContainer">{this.state.currentView}</div>
        </div>
      </div>
    );
  }
  async componentDidUpdate() {}
}
export default Interface;
