import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
export { useFetch };



function useEdit(url) {
    const [idData, setIdData] = useState([]);
    async function fetchUrl() {
      const response = await fetch(url);
      const json = await response.json();
      setIdData(json);
    }
    useEffect(() => {
      fetchUrl();
    }, []);
    return [idData];
  }
  export { useEdit };

function useDelete(url){

}
export {useDelete};


