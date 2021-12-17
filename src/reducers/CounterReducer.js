const initialState = {
  counters: [],
};

export default (state = initialState, action) => {
  console.log('veeeem', action.payload);

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
  }
  return {...state, counters: newList};
};
