import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch data");
        return res.json();
      })
      .then((data) => {
        return setData(data);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setMessage(error.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);
  return { data, message };
};

export default useFetch;
