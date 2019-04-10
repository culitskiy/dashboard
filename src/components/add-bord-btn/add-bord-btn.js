import React from 'react';
import {connect} from 'react-redux';
import {addBord} from '../../actions';
const AddBordBtn = ({addBord}) => {
    return(
        <div>
            <button
            onClick={addBord}
             type='button' className='btn btn-outline-success btn-sm float-left'>
                <i className='fa fa-plus'/>
            </button>
        </div>
    );

};
const mapStateToProps = (state) => ({
    state
   });
const mapDispatchToProps = (dispatch) => {
    return {
    addBord: () => dispatch(addBord())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBordBtn);