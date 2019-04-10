import {ADD_BORD, ADD_TICKET, IMPORTANT_CARD,REMOVE_TICKET, OPEN_MODAL, CLOSE_MODAL} from '../constants';
const initialState = {
    onModal: false,
    bord: '',
    tickets: {
        tickets1:[
        {
            id: 1,
            title: 'New Ticketчс1', 
            value: 'Here will be your ticket1', 
            important: false
        },
        {
            id: 2,
            title: 'New Ticket2',
            value: 'Here will be your ticket2', 
            important: false
        },
        {
            id: 3,
            title: 'New Ticket3',
            value: 'Here will be your ticket3',
            important: true
        }
],
    tickets2:[ 
    {
        id: 4,
        title: 'New Ticket4', 
        value: 'Here will be your ticket4', 
        important: false
    },
    {
        id: 5,
        title: 'New Ticket5',
        value: 'Here will be your ticket5', 
        important: false
    },
    {
        id: 6,
        title: 'New Ticket6',
        value: 'Here will be your ticket6',
        important: true
    }
]}
};
// const changeCardProps = (arr, id, propName) => {
//  const idx = arr.findIndex((el) => el.id === id);
// }


const card = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_TICKET:
        return {
            ...state, 
            tickets: {
                ...state.tickets,
               [state.bord]: [...state.tickets[state.bord],
                {id: (new Date()).getTime(),
                title: action.title,
                value: action.value,
                important: action.important}
            ]
            },
            
        };

        case ADD_BORD:
        return{
            ...state,
            tickets: { ...state.tickets,
            [(new Date()).getTime()]: [
                {
                    id: 1,
                    title: 'New Ticket1', 
                    value: 'Here will be your card1', 
                    important: false
                },
                {
                    id: 2,
                    title: 'New Ticket2',
                    value: 'Here will be your card2', 
                    important: false
                },
                {
                    id: 3,
                    title: 'New Ticket3',
                    value: 'Here will be your card3',
                    important: true
                }
            ]
        }};
       
        
        case IMPORTANT_CARD:
        return {
            ...state,
            tickets: { ...state.tickets,
                [action.bord]: [
            ...state.tickets[action.bord].map(ticket => {
            if(ticket.id === action.id) {
                ticket.important = !ticket.important;
            }
            return ticket;
        })]}
    };
        case REMOVE_TICKET:
        return {
            ...state,
            tickets: { ...state.tickets,
                [action.bord]:[
             ...state.tickets[action.bord].filter((ticket) => ticket.id !== action.id)
        // return console.log(action.id);
                ]}};

        case OPEN_MODAL:
        return {
            ...state,
            onModal: true,
            bord: action.bord
        };
        // return console.log(123);
        case CLOSE_MODAL:
        return {
            ...state,
            onModal: false
        };
       
        default:
            return state;
    }
    
    
};
export default card;


// import {ADD_BORD, ADD_TICKET, IMPORTANT_CARD,REMOVE_TICKET, OPEN_MODAL, CLOSE_MODAL} from '../constants';
// const initialState = {
//     onModal: false,
//     tickets: {
//     tickets1:[ 
//         {
//             id: 1,
//             title: 'New Ticket1', 
//             value: 'Here will be your card1', 
//             important: false
//         },
//         {
//             id: 2,
//             title: 'New Ticket2',
//             value: 'Here will be your card2', 
//             important: false
//         },
//         {
//             id: 3,
//             title: 'New Ticket3',
//             value: 'Here will be your card3',
//             important: true
//         }
// ],
//     tickets2:[ 
//     {
//         id: 4,
//         title: 'New Ticket4', 
//         value: 'Here will be your card4', 
//         important: false
//     },
//     {
//         id: 5,
//         title: 'New Ticket5',
//         value: 'Here will be your card5', 
//         important: false
//     },
//     {
//         id: 6,
//         title: 'New Ticket6',
//         value: 'Here will be your card6',
//         important: true
//     }
// ]}
// };
// // const changeCardProps = (arr, id, propName) => {
// //  const idx = arr.findIndex((el) => el.id === id);
// // }


// const card = (state = initialState, action) => {
    
//     switch (action.type) {
//         case ADD_TICKET:
//         return {
//             ...state, 
//             tickets: [
//                 ...state.tickets,
//                 {
//                 id: (new Date()).getTime(),
//                 title: action.title,
//                 value: action.value,
//                 important: action.important
//                 }
//                 ],
//              [action.titleBord]: [
//                 {
//                     id: (new Date()).getTime(),
//                     title: 'action.title',
//                     value: 'action.value',
//                     important: false  
//                 }
//             ]
//         };

//         case ADD_BORD:
//         return{
//             ...state,
//             [(new Date()).getTime()]: [
//                 {
//                     id: 1,
//                     title: 'New Ticket1', 
//                     value: 'Here will be your card1', 
//                     important: false
//                 },
//                 {
//                     id: 2,
//                     title: 'New Ticket2',
//                     value: 'Here will be your card2', 
//                     important: false
//                 },
//                 {
//                     id: 3,
//                     title: 'New Ticket3',
//                     value: 'Here will be your card3',
//                     important: true
//                 }
//             ]
//         };
       
        
//         case IMPORTANT_CARD:
//         return {
//             ...state,
//             tickets: [
//             ...state.tickets.map(ticket => {
//             if(ticket.id === action.id) {
//                 ticket.important = !ticket.important;
//             }
//             return ticket;
//         })]
//     };
//         case REMOVE_TICKET:
//         return {
//             ...state,
//             tickets: [
//              ...state.tickets.filter((ticket) => ticket.id !== action.id)
//         // return console.log(action.id);
//             ]};

//         case OPEN_MODAL:
//         return {
//             ...state,
//             onModal: true
//         };
//         // return console.log(123);
//         case CLOSE_MODAL:
//         return {
//             ...state,
//             onModal: false
//         };
       
//         default:
//             return state;
//     }
    
    
// };
// export default card;

