import { useState, useEffect } from "react";
import axios from 'axios';

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

function useAdd(url){

}
export {useAdd};

function useEdit(url){
    
}
export {useEdit};

function useDelete(url){

}
export {useDelete};

