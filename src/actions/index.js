import { ADD_TICKET, IMPORTANT_CARD, REMOVE_TICKET, OPEN_MODAL, CLOSE_MODAL, ADD_BORD } from '../constants';

export const onImportant = (bord, id) => ({
        type: IMPORTANT_CARD,
        id,
        bord
});
 export const addTicket = (titleBord, title, value, important) => ({
        type: ADD_TICKET,
        titleBord,
        title,
        value,
        important
});
export const removeTicket = (bord, id) => ({
        type: REMOVE_TICKET,
        id,
        bord
});
export const openModal = (bord) => ({
        type: OPEN_MODAL,
        bord
});
export const closeModal = () => ({
        type: CLOSE_MODAL
});
export const addBord = () => ({
        type: ADD_BORD
});