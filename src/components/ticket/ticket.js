import React from 'react';
import TicketBtn from "../bord/ticket-btn";
import "./ticket.css";
import {connect} from 'react-redux';

const Ticket = ({onImportant, card, value, important, bord, id} ) => {
 
let classNames = "ticket";
if (important) {
    classNames += "-important";
}
        // console.log(2);
    return (
    <div className={classNames}>
        <p>{value}</p>
        <div className="form-check float-right">
            <TicketBtn
            important={important}
            id={id}
            bord={bord}/>
        </div>
    </div>
    );
    

};
const mapStateToProps = (state) => 
 ({
     card: state.tickets
 });
//  const mapDispatchToProps = (dispatch) => {
//      return {
//      onImportant: () => dispatch({type: 'IMPORTANT_CARD'})
//      }
//     };
export default connect(mapStateToProps)(Ticket);
