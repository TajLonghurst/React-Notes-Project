import { useState, useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { NoteItemArry, notesActions } from "../Store/notes.slice";

type RequestConfig = {
  method: string;
  url: string;
  data?: NoteItemArry;
  headers: {};
  typeOfRequest: string;
};

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const sendRequest = useCallback(
    async (requestConfig: RequestConfig) => {
      setIsLoading(true);
      try {
        const axiosMethod = requestConfig.method;
        const axiosUrl = requestConfig.url;
        const axiosData = requestConfig.data
          ? JSON.stringify(requestConfig.data)
          : null;
        const axiosHeaders = requestConfig.headers ? requestConfig.headers : {};
        const typeOfRequest = requestConfig.typeOfRequest;

        const response = await axios({
          method: axiosMethod,
          url: axiosUrl,
          data: axiosData,
          headers: axiosHeaders,
        });

        if (typeOfRequest === "NOTELISTS") {
          dispatch(notesActions.addNote({ res: response.data }));
        }

        //Could use a useReducer() Hook
      } catch (err) {
        console.log(err || "useHttpHook caught an error");
      }
      setIsLoading(false);
    },
    [dispatch]
  );

  return { isLoading, sendRequest };
};

export default useHttp;
