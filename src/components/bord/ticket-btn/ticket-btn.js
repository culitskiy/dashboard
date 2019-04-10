import React from "react";
import {connect} from 'react-redux';
import "./ticket-btn.css";
import {onImportant, removeTicket} from '../../../actions/index';

const TicketBtn = ({card, onImportant1, bord, id, removeTicket}) => {
  
  // console.log(card);  
  return (
        <div>
            <button type="button"
            onClick={() => removeTicket(bord, id)}
              className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
            <button
            onClick={() => onImportant1(bord, id)}
              type="button"
              className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"/>
                </button>
        </div>
    );
};
const mapStateToProps = (state) => ({
  card: state.tickets
});
const mapDispatchToProps = (dispatch) => {
  return {
    onImportant1: (bord, id) => dispatch(onImportant(bord, id)),
    removeTicket: (bord, id) => dispatch(removeTicket(bord, id))
    
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(TicketBtn);
