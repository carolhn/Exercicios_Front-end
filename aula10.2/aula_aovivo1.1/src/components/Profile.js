import React from "react";
import { ReactPropTypes } from "react";

class Profile extends React.Component {
    render () {
        return (
            <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.age}</p>
          </div>
        )
    }
}
Profile.prototype = {
    name = prototype.string;
    age = prototype.Number;
}

export default Profile;