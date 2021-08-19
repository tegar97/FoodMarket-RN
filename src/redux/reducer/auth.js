const initialState = {
  name: '',
  email: '',
  password: '',
  address: '',
  city: '',
  houseNumber: '',
  phoneNumber: '',
};

export const registerReducer = (state = initialState, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
    };
  }
  if (action.type === 'SET_ADDRESS') {
    return {
      ...state,
      address: action.value.address,
      city: action.value.city,
      houseNumber: action.value.houseNumber,
      phoneNumber: action.value.phoneNumber,
    };
  }
  return state;
};
