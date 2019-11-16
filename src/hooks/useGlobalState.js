import { useEffect, useReducer } from "react";
import API, { graphqlOperation } from "@aws-amplify/api";

import { listEmployees } from "../graphql/queries";
import { onCreateEmployee } from "../graphql/subscriptions";

const useGlobalState = () => {
  const initialState = { employees: [] };
  const reducer = (state, action) => {
    switch (action.type) {
      case "QUERY":
        return { ...state, employees: action.employees };

      case "SUBSCRIPTION":
        return { ...state, employees: [...state.employees, action.employee] };

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getData();
    const subscription = API.graphql(
      graphqlOperation(onCreateEmployee)
    ).subscribe({
      next: eventData => {
        const employee = eventData.value.data.onCreateEmployee;
        dispatch({ type: "SUBSCRIPTION", employee });
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const getData = async () => {
    const employeeData = await API.graphql(graphqlOperation(listEmployees));
    dispatch({
      type: "QUERY",
      employees: employeeData.data.listEmployees.items
    });
  };

  return [state, dispatch];
};

export default useGlobalState;
