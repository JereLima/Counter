const initialState = {
  counters: [
    {id: '1639768380535', title: 'Meu primeiro contador!', value: '5'},
  ],
};

export default (state = initialState, action) => {
  console.log(state);

  let newList = [...state.counters];
  switch (action.type) {
    case 'createCounter':
      newList.push({
        id: action.payload.id,
        title: action.payload.title,
        value: action.payload.value,
      });
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
      break;
    case 'DELETE_COUNTER':
      newList = newList.filter(item => item.id !== action.payload.id);
      break;
  }
  return {...state, counters: newList};
};
