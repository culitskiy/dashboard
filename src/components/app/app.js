import React from 'react';
import Bord from '../bord/bord';
import './app.css';
import AddModal from '../ticket-add-form';
import AddBordBtn from '../add-bord-btn/add-bord-btn';
import {connect} from 'react-redux';

const App = ({state}) => { 

    const bords = Object.keys(state.tickets).map(item => {
        
       return ( <div className="bord">
                <Bord
                 items={item}/>
            </div>)
    });
    // console.log(bords);

    return ( <div> 
            <AddBordBtn/>
            {bords}
            
            <div>
                <AddModal/>
            </div>
            </div>   
    )
};

const mapStateToProps = (state) => ({
 state
});

export default connect(mapStateToProps) (App);

// const App = ({state}) => { 

//     const bords = Object.keys(state).map(item => {
        
//         console.log(item);
//     });
//     console.log(bords);

//     return ( <div> 
//             <AddBordBtn/>
//             {bords}
//             <div className="bord">
//                 <Bord/>
//             </div>
//             <div>
//                 <AddModal/>
//             </div>
//             </div>   
//     )
// };

// const mapStateToProps = (state) => ({
//  state
// });

// export default connect(mapStateToProps) (App);