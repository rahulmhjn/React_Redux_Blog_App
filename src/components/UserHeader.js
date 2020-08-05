import React from "react";
import { connect } from "react-redux";

const UserHeader = (props) => {
  return (
    <div>
      {props.user ? <div className="header"> {props.user.name} </div> : null}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
