import React from 'react';
import AddTicketBtn from "./add-ticket-btn/";
import "./bord.css";
import Ticket from '../ticket';
// import AddModal from '..ticket-add-form/';
import {connect} from 'react-redux';
import BordHeader from '../bord-header/bord-header';

const Bord = ({state, items}) => {
    const elements = state[items].map((item) => {
        const { id, ...itemProps } = item;
    console.log(items);
    return (
 <div key={id}>
        <Ticket
        {...itemProps}
        bord={items}
        id={id}/>
    
</div>
    );
});
    return (
    <div>
        <div className='bord-header'>
        <BordHeader
        bord={items}/>
        </div>
        <div>
            {elements}
        </div>
        <div className="btn-group">
        <AddTicketBtn
        bord={items}/>
        </div>
    </div>
    )
};
const mapStateToProps = (state) => ({
    state: state.tickets
});

export default connect(mapStateToProps)(Bord);