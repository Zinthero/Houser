const initialState = {
    name: '',
    address:'',
    city:'',
    state:'',
    zipcode:0,
    image_url:'',
    mortgage:'',
    rent:''
}

const UPDATE_NAME= "UPDATE_NAME";
const UPDATE_ADDRESS= "UPADE_ADDRESS";
const UPDATE_CITY="UPDATE_CITY";
const UPDATE_STATE= "UPDATE_STATE";
const UPDATE_ZIPCODE = "UPDATE_ZIPCODE"
const UPDATE_IMAGE_URL = "UPDATE_IMAGE_URL";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";


export function updateName(newName) {
    return {
      type: UPDATE_NAME,
      payload: newName
    };
  }
  export function updateAddress(newAddress) {
    return {
      type: UPDATE_ADDRESS,
      payload: newAddress
    };
  }
  export function updateCity(newCity) {
    return {
      type: UPDATE_CITY,
      payload: newCity
    };
  }
  export function updateState(newState) {
    return {
      type: UPDATE_STATE,
      payload: newState
    };
  }
  export function updateZipcode(newZipcode) {
    return {
      type: UPDATE_ZIPCODE,
      payload: newZipcode
    };
  }
  export function updateImage_Url(newImage_Url) {
    return {
      type: UPDATE_IMAGE_URL,
      payload: newImage_Url
    };
  }export function updateMortgage(newMortgage) {
    return {
      type: UPDATE_MORTGAGE,
      payload: newMortgage
    };
  }
  export function updateRent(newRent) {
    return {
      type: UPDATE_RENT,
      payload: newRent
    };
  }
  export default function reducer(state = initialState , action) {
    switch (action.type) {
        case UPDATE_NAME:
            return {
           ...state,
           name: action.payload
    };
    case UPDATE_ADDRESS:
            return {
           ...state,
           address: action.payload
    };
    case UPDATE_CITY:
            return {
           ...state,
           city: action.payload
    };
    case UPDATE_STATE:
            return {
           ...state,
           state: action.payload
    };
    case UPDATE_ZIPCODE:
            return {
           ...state,
           zipcode: action.payload
    };
    case UPDATE_IMAGE_URL:
            return {
           ...state,
           image_url: action.payload
    };
    case UPDATE_MORTGAGE:
            return {
           ...state,
           mortgage: action.payload
    };
    case UPDATE_RENT:
            return {
           ...state,
           rent: action.payload
    };
    default:
            return state
    }
}