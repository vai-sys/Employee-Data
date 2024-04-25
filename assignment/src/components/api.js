// api.js

export const deleteEmployee = (id) => {
    return fetch(`http://localhost:8000/employee/${id}`, {
      method: "DELETE"
    })
   .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to delete data');
      }
      return res.json();
    })
   .catch((err) => {
      console.error(err.message);
      throw err;
    });
  };