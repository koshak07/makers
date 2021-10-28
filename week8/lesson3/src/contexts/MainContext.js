import axios from "axios";
import React, { useReducer } from "react";

export const mainContext = React.createContext();
const INIT_STATE = {
    countries: []
};
const API = "http://localhost:8000/countries";

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
      case 'GET_CONTRIES':
          return {...state, countries: action.payload}
    default:
      return state;
  }
};

const MainContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getData = () => {
    console.log("Hello");
  };
  const addCountry = async (country) => {
    try {
      await axios.post(API, country);
    } catch (e) {
      console.log(e);
    }
  };

  const getCountries = async () => {
    try {
      const response = await axios(API);
      dispatch({
          type: "GET_CONTRIES",
          payload: response.data
      })
    } catch (e) {
      console.log(e);
    }
  };
  console.log(state);
  return (
    <mainContext.Provider
      value={{
        getData: getData,
        addCountry: addCountry,
        getCountries: getCountries,
        countries: state.countries
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export default MainContextProvider;
