import { useEffect, useState } from "react";


 const useGetFetch = (url, options) => {

  const [status, setStatus] = useState({
    loading: false,
    data: undefined,
    error: null
  });

  function fetchNow(url, options) {
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        setStatus({ loading: true, data: res });
      })
      .catch((error) => {
        setStatus({ loading: true, error });
      });
  }

  useEffect(() => {
    if (url) {
      fetchNow(url, options);
    }
  }, []);

  return { ...status, fetchNow };
}

export default useGetFetch