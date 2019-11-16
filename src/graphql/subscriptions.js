/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = `subscription OnCreateEmployee {
  onCreateEmployee {
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
export const onUpdateEmployee = `subscription OnUpdateEmployee {
  onUpdateEmployee {
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
export const onDeleteEmployee = `subscription OnDeleteEmployee {
  onDeleteEmployee {
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
export const onCreateTask = `subscription OnCreateTask {
  onCreateTask {
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
export const onUpdateTask = `subscription OnUpdateTask {
  onUpdateTask {
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
export const onDeleteTask = `subscription OnDeleteTask {
  onDeleteTask {
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
