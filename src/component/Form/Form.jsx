import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { add, remove } from "../../store/actions/add";
const Form = () => {
  return (
    <div>
      <form>
        <TextField>koko</TextField>
        <Button style={{ color: "black" }}>送信</Button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    add: state.add.todo
  };
};

const mapDisptchToProps = (dispatch) => {
  return {
    onStoreResult: (result) => dispatch(actionCreater.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreater.deleteResult(id))
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(Form);
