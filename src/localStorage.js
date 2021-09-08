const useStorage = () => {
    const setItem = (data, name = '') => {
      window.localStorage.setItem(name, JSON.stringify(data));
    };
  
    const getItem = (name = '') => {
      const retrievedObject = JSON.parse(window.localStorage.getItem(name));
      return retrievedObject;
    };

    return [getItem, setItem];
  };
  
  export default useStorage;