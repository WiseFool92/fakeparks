import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const {id, name, address, phone_number, website} = action;
  switch(action.type) {
    case c.SELECTED_PARK: 
      return { 
        name: name, 
        address: address, 
        phone_number: phone_number, 
        website: website,
        id: id
      };
    case c.UNSELECT_PARK: 
      state = null;
      return state; 
    default: return state;
  }
} 