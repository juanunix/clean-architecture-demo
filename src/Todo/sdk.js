import shortid from "shortid";

const mockFetchResponse = (res) => {
  return { json: () => res };
};

// ** MOCK API ** //
const TodoSDK = {
  validateTodo: (description, name, creatorID, date) => {
    return new Promise((resolve, reject) => {
      let response = {
        valid: !!(description && name && creatorID),
      };
      resolve(mockFetchResponse(response));
    });
  },
  createTodo: async (description, name, creatorID, date) => {
    return new Promise((resolve, reject) => {
      let response = {
        id: shortid.generate(),
        description,
        name,
        creatorID,
        date,
      };

      resolve(mockFetchResponse(response));
    });
  },
};

export default TodoSDK;