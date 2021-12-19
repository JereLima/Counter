const initialState = {
  counters: [
    {id: '1639768380535', title: 'Meu primeiro contador!', value: '5'},
  ],
};

export default (state = initialState, action) => {
  let newList = [...state.counters];
  switch (action.type) {
    case 'CREATE_COUNTER':
      newList.push(action.payload.counters);
      return {...state, counters: newList};
      break;
    case 'EDIT_COUNTER':
      newList.map((item, index) => {
        if (item.id === action.payload.id) {
          newList[index] = {
            ...item,
            title: action.payload.title,
            value: action.payload.value,
          };
        }
      });
      return {...state, counters: newList};
      break;
    case 'DELETE_COUNTER':
      newList = newList.filter(item => item.id !== action.payload.id);
      return {...state, counters: newList};
      break;
  }
  return state;
};
