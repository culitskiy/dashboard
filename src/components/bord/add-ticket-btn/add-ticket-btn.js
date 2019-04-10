import React from 'react';
import { connect } from "react-redux";
import {addTicket, openModal} from '../../../actions/index';

const AddTicketBtn = ({addTicket1, bord, card}) => {
    // let idMin = 100
    // const setId = (id) => {
    //   id = id++;
    // };
    
    
    // console.log(card.onModal);
  
    return (
      <div>
        <button type="button"
        onClick={() => addTicket1(bord)}
        className="btn btn-outline-success btn-sm float-right">
                  <i className="fa fa-plus"/>
        </button>
      </div>
    );
  };
  const mapStateToProps = (state) => ({
    card: state
  });
  const mapDispatchToProps = (dispatch) => {
      return{
        addTicket1: (bord) => dispatch(openModal(bord))
      }
  };
  export default connect(mapStateToProps,mapDispatchToProps)(AddTicketBtn);