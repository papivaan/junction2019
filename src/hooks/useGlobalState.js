import { useEffect, useReducer } from "react";
import API, { graphqlOperation } from "@aws-amplify/api";

import { listEmployees, listTasks } from "../graphql/queries";
import { onCreateEmployee } from "../graphql/subscriptions";

const useGlobalState = () => {
  const initialState = { employees: [] };
  const reducer = (state, action) => {
    switch (action.type) {
      case "QUERY":
        return { ...state, employees: action.employees, tasks: action.tasks };

      case "SUBSCRIPTION":
        return {
          ...state,
          employees: [...state.employees, action.employee],
          tasks: [...state.tasks, action.tasks]
        };

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
    const employeePromise = API.graphql(graphqlOperation(listEmployees));
    const taskPromise = API.graphql(graphqlOperation(listTasks));

    const [employeeData, taskData] = await Promise.all([
      employeePromise,
      taskPromise
    ]);

    dispatch({
      type: "QUERY",
      employees: employeeData.data.listEmployees.items,
      tasks: taskData.data.listTasks.items
    });
  };

  return [state, dispatch];
};

export default useGlobalState;
