import React from "react";

class ABPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown1: "0px",
      dropDown2: "0px",
      dropDown3: "0px",
      dropDown4: "0px",
      recentCaller: 0
    };
    this.hd1Ref = React.createRef();
    this.hd2Ref = React.createRef();
    this.hd3Ref = React.createRef();
    this.hd4Ref = React.createRef();
  }

  render() {
    return (
      <div>
        <div id="bannerGrid">
          <hr />
          <img
            alt="circleImg"
            id="aboutmeImg"
            src="https://jax-apps.com/images/aboutme1.png"
            width="100px"
            height="100px"
          />
          <hr />
        </div>
        <h1>
          <span style={{ color: "#3bb5d9" }}> Brandon</span>{" "}
          <span style={{ color: "#1FB18C" }}>Jackson </span>
        </h1>

        <button
          type="button"
          class="collapsible"
          onClick={() =>
            this.setState({
              recentCaller: this.state.dropDown1 === "0px" ? 1 : 0,
              dropDown1: this.state.dropDown1 === "0px" ? "800px" : "0px"
            })
          }
        >
          PAST
        </button>
        <div
          ref={this.hd1Ref}
          class="content"
          style={{ maxHeight: this.state.dropDown1 }}
        >
          <p>{this.props.about_me[0].desc}</p>
        </div>

        <button
          type="button"
          class="collapsible"
          onClick={() =>
            this.setState({
              recentCaller: this.state.dropDown2 === "0px" ? 2 : 0,
              dropDown2: this.state.dropDown2 === "0px" ? "800px" : "0px"
            })
          }
        >
          PRESENT
        </button>
        <div
          ref={this.hd2Ref}
          class="content"
          style={{ maxHeight: this.state.dropDown2 }}
        >
          <p>{this.props.about_me[1].desc}</p>
        </div>

        <button
          type="button"
          class="collapsible"
          onClick={() =>
            this.setState({
              recentCaller: this.state.dropDown3 === "0px" ? 3 : 0,
              dropDown3: this.state.dropDown3 === "0px" ? "800px" : "0px"
            })
          }
        >
          FUTURE
        </button>
        <div
          ref={this.hd3Ref}
          class="content"
          style={{ maxHeight: this.state.dropDown3 }}
        >
          <p>{this.props.about_me[2].desc}</p>
        </div>
      </div>
    );
  }
  componentDidUpdate() {
    switch (this.state.recentCaller) {
      case 1:
        setTimeout(() => {
          this.hd1Ref.current.scrollIntoView({
            alignToTop: "false",
            behavior: "smooth",
            block: "end"
          });
        }, 500);
        break;

      case 2:
        setTimeout(() => {
          this.hd2Ref.current.scrollIntoView({
            alignToTop: "false",
            behavior: "smooth",
            block: "end"
          });
        }, 500);
        break;

      case 3:
        setTimeout(() => {
          this.hd3Ref.current.scrollIntoView({
            alignToTop: "false",
            behavior: "smooth",
            block: "end"
          });
        }, 500);
        break;

      case 4:
        setTimeout(() => {
          this.hd4Ref.current.scrollIntoView({
            alignToTop: "false",
            behavior: "smooth",
            block: "end"
          });
        }, 500);
        break;

      default:
        var lastOpen = 0;
        if (this.state.dropDown1 === "800px") {
          lastOpen = 1;
        }
        if (this.state.dropDown2 === "800px") {
          lastOpen = 2;
        }
        if (this.state.dropDown3 === "800px") {
          lastOpen = 3;
        }
        if (this.state.dropDown4 === "800px") {
          lastOpen = 4;
        }
        switch (lastOpen) {
          case 1:
            setTimeout(() => {
              this.hd1Ref.current.scrollIntoView({
                alignToTop: "false",
                behavior: "smooth",
                block: "end"
              });
            }, 500);
            break;

          case 2:
            setTimeout(() => {
              this.hd2Ref.current.scrollIntoView({
                alignToTop: "false",
                behavior: "smooth",
                block: "end"
              });
            }, 500);
            break;

          case 3:
            setTimeout(() => {
              this.hd3Ref.current.scrollIntoView({
                alignToTop: "false",
                behavior: "smooth",
                block: "end"
              });
            }, 500);
            break;

          case 4:
            setTimeout(() => {
              this.hd4Ref.current.scrollIntoView({
                alignToTop: "false",
                behavior: "smooth",
                block: "end"
              });
            }, 500);
            break;
          default:
            break;
        }
        return;
    }
  }
}

export default ABPage;
