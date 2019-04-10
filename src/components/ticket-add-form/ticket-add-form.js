import React from 'react';
import {connect} from 'react-redux';
import './ticket-ad-form.css';
import { closeModal, addTicket } from '../../actions';

class AddModal extends React.Component {
	state = {
		titleBord: 'bord',
		title: '',
		value: '',
		important: false
	};

	titleChange = (e) => {
		this.setState({
			title: e.target.value
		});
	};
	valueChange = (e) => {
		this.setState({
			value: e.target.value
		});
	};
	importantChange = (e) => {
		this.setState({
			important: e.target.checked
		});
	};

	saveTicket = () => {
		const {titleBord, title, value, important} = this.state;
		this.props.addTicket(titleBord, title, value, important);
		this.props.closeModal();
		this.setState({
			title: '',
			value: '',
			important: false
		});
		
	};
	// submit = (e) => {
	// 	e.preventDefault();
	// 	this.props.addTicket(this.state.title, '123', true)
	// }
    render() {
		const {onModal} = this.props.tickets;
		const {closeModal, value, important, title} = this.props;
		if(!onModal) return null;

        return (
		<form>
			// onSubmit={this.submit}>
			<div className="modal fade show">
			<div className="modal-dialog">
			  <div className="modal-content">
			  
				<div className="modal-header">
				  
				  <input
					onChange={this.titleChange}
					className="modal-title" id='titleInput' placeholder='123'/>
				  <button
				  onClick={() => closeModal()}
				   type="button" className="close" >
					<span aria-hidden="true">&times;</span>
				  </button>
				</div>
				<div className="modal-body">
				
					<tr>
				  <input
				  onChange={this.valueChange}
				   id='contentInput' placeholder='content'/></tr>
				  <tr>Important <input onClick={this.importantChange} type='checkbox'/></tr>
				  </div>
				
				
				<div className="modal-footer">
				  <button
				  onClick={() => closeModal()}
				   type="button" className="btn btn-secondary" >Close</button>
				  <button
				  onClick={this.saveTicket}
				  type="button" className="btn btn-primary">Save</button>
				</div>
			  </div>
			</div>
		  </div>
		  </form>
        )
    }
}
const mapStateToProps = (state) => ({
 tickets: state
});
const mapDispatchToProps = (dispatch) => {
	return {
	closeModal: () => dispatch(closeModal()),
	addTicket: (titleBord, title, value, important) => dispatch(addTicket(titleBord, title, value, important))

	}
};

export default connect(mapStateToProps,mapDispatchToProps)(AddModal);