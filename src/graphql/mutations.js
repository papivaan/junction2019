/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployee = `mutation CreateEmployee($input: CreateEmployeeInput!) {
  createEmployee(input: $input) {
    id
    name
    phone
    tasks {
      items {
        id
        orderId
        description
        status
      }
      nextToken
    }
  }
}
`;
export const updateEmployee = `mutation UpdateEmployee($input: UpdateEmployeeInput!) {
  updateEmployee(input: $input) {
    id
    name
    phone
    tasks {
      items {
        id
        orderId
        description
        status
      }
      nextToken
    }
  }
}
`;
export const deleteEmployee = `mutation DeleteEmployee($input: DeleteEmployeeInput!) {
  deleteEmployee(input: $input) {
    id
    name
    phone
    tasks {
      items {
        id
        orderId
        description
        status
      }
      nextToken
    }
  }
}
`;
export const createTask = `mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
    id
    orderId
    description
    assignee {
      id
      name
      phone
      tasks {
        nextToken
      }
    }
    status
  }
}
`;
export const updateTask = `mutation UpdateTask($input: UpdateTaskInput!) {
  updateTask(input: $input) {
    id
    orderId
    description
    assignee {
      id
      name
      phone
      tasks {
        nextToken
      }
    }
    status
  }
}
`;
export const deleteTask = `mutation DeleteTask($input: DeleteTaskInput!) {
  deleteTask(input: $input) {
    id
    orderId
    description
    assignee {
      id
      name
      phone
      tasks {
        nextToken
      }
    }
    status
  }
}
`;
