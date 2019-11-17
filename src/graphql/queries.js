/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployee = `query GetEmployee($id: ID!) {
  getEmployee(id: $id) {
    id
    name
    phone
    tasks {
      items {
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
          createdAt
        }
        status
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const listEmployees = `query ListEmployees(
  $filter: ModelEmployeeFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      phone
      tasks {
        items {
          id
          orderId
          description
          assignee {
            id
            name
            phone
            createdAt
          }
          status
          createdAt
        }
        nextToken
      }
      createdAt
    }
    nextToken
  }
}
`;
export const getTask = `query GetTask($id: ID!) {
  getTask(id: $id) {
    id
    orderId
    description
    assignee {
      id
      name
      phone
      tasks {
        items {
          id
          orderId
          description
          assignee {
            id
            name
            phone
            createdAt
          }
          status
          createdAt
        }
        nextToken
      }
      createdAt
    }
    status
    createdAt
  }
}
`;
export const listTasks = `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      orderId
      description
      assignee {
        id
        name
        phone
        tasks {
          items {
            id
            orderId
            description
            status
            createdAt
          }
          nextToken
        }
        createdAt
      }
      status
      createdAt
    }
    nextToken
  }
}
`;
