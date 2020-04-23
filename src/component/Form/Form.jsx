import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import * as actionTypes from "../../store/actions/actions";
import "./Form.css";
class Form extends Component {
  render() {
    return (
      <div>
        <div className="btn-square-toy">
          <form onSubmit={(e) => e.preventDefault()}>
            <TextField
              style={{ width: "70%" }}
              value={this.props.value}
              onChange={(e) => this.props.onChangeHandler(e.target.value)}
            ></TextField>
            <Button
              onClick={() => {
                this.props.onChangeHandler("");
                this.props.onStoreResult(this.props.value);
              }}
              style={{ color: "#fff" }}
            >
              送信
            </Button>
          </form>
        </div>
        <ul className="todo">
          {this.props.add.map((l) => (
            <li key={l.id}>
              {l.value}
              <DeleteIcon
                onClick={() => {
                  this.props.onDeleteResult(l.id);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    value: state.change.value,
    add: state.add.todo
  };
};
const mapDisptchToProps = (dispatch) => {
  return {
    onStoreResult: (v) => dispatch({ type: actionTypes.ADD, value: v }),
    onChangeHandler: (e) => dispatch({ type: actionTypes.CHANGE, value: e }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.REMOVE, deleteResult: id })
  };
};
export default connect(mapStateToProps, mapDisptchToProps)(Form);
