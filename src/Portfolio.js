import React from "react";

class PortfolioPage extends React.Component {
  render() {
    return (
      <div>
        <div id="bannerGrid">
          <hr />
          <img
            alt="circleImg"
            id="aboutmeImg"
            src={this.props.data.icon}
            width="100px"
            height="100px"
          />
          <hr />
        </div>

        <h1>{this.props.data.name}</h1>
        <div class="content" style={{ paddingBottom: "20px" }}>
          <h2>{this.props.data.date}</h2>
          <p>{this.props.data.desc} </p>
          <a
            id="portfolioLink"
            href={
              this.props.data.link == "Link Unavailable"
                ? "#"
                : this.props.data.link
            }
            style={{
              background:
                this.props.data.link == "Link Unavailable" ? "grey" : "white"
            }}
          >
            {this.props.data.link == "Link Unavailable"
              ? "Link Unavailable"
              : "View Here"}
          </a>
        </div>
      </div>
    );
  }
  componentDidUpdate() {}
}

export default PortfolioPage;
