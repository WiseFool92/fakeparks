import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const {id, name, address, phone_number, website} = action;
  switch(action.type) {
    case c.SELECTED_PARK: 
      return Object.assign({}, state, {
        [id]: {
          name: name, 
          address: address, 
          phone_number: phone_number, 
          website: website,
          id: id
        }
      });
    default: return state;
  }
} 