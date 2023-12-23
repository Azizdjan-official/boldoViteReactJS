import { Component } from "react";
import { Link } from "react-router-dom";

class NavLink extends Component {
  render() {
    return (
      <div>
        <Link to={this.props.link}>
          {this.props.children}
        </Link>
      </div>
    );
  }
}

export default NavLink;