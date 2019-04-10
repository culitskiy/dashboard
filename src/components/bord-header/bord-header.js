import React from 'react';
import {connect} from 'react-redux';


class BordHeader extends React.Component {
    state = {
        bordHeader: '',
        onInput1: false
    };

    onInput = () => {
        this.setState({
            onInput1: !this.state.onInput1
        });
        // console.log(this.state.onInput1);
    };

    titleChange = (e) => {
		this.setState({
			bordHeader: e.target.value
        });
	};
    
    showInput = () => {
        if (this.state.onInput1) {
            return (
                <div>
                <input
                onChange={this.titleChange}
                 placeholder={this.props.bord}/>
                </div>
            )
        } else {
            return (
                <div>
                {this.state.bordHeader}
                </div>
            )
        }
    }

    rename = () => {

    };
    
    render() {
        const onInput1 = this.state.onInput1;
        // const {bord} = this.props.bord;
        return(
        <div>
            <span>{this.showInput()}</span>
            <button
            onClick={this.onInput}
             type="button" className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-pencil"/>
            </button>
        </div>
        );
    };
    };

const mapStateToProps = (state) => ({
    bord1: state.tickets
});

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BordHeader);