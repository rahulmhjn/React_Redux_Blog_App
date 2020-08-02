import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = (props) => {
  useEffect(() => {
    props.fetchUser(props.userId);
  }, []);

  return (
    <div>
      {props.user ? <div className="header"> {props.user.name} </div> : null}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
