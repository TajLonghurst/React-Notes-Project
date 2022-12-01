import React, { useCallback, useEffect } from "react";
import classes from "./NotesList.module.css";
import "../../index.css";
import NoteItems from "./NoteItems";
import useHttp from "../../Hooks/use-http";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";

const NotesList = () => {
  const { sendRequest } = useHttp();
  const noteItems = useSelector((state: RootState) => state.notes.noteItems);
  const fakeItems = useSelector((state: RootState) => state.notes.fakeData);

  const noteListApi = useCallback(() => {
    sendRequest({
      typeOfRequest: "NOTELISTS",
      method: "GET",
      url: `${process.env.REACT_APP_ADDNOTES_FIREBASE_API}.json`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [sendRequest]);

  useEffect(() => {
    noteListApi();
  }, [noteListApi]);

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className="row">
          {fakeItems.map((items) => {
            return (
              <div key={items.id} className={`col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <NoteItems
                  fbId={items.fbId}
                  key={items.id}
                  id={items.id}
                  subject={items.subject}
                  title={items.title}
                  categorie={items.categorie}
                  description={items.description}
                  color={items.color}
                  date={items.date}
                />
              </div>
            );
          })}
          {noteItems.map((items) => {
            return (
              <div key={items.id} className={`col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <NoteItems
                  fbId={items.fbId}
                  key={items.id}
                  id={items.id}
                  subject={items.subject}
                  title={items.title}
                  categorie={items.categorie}
                  description={items.description}
                  color={items.color}
                  date={items.date}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    /*NoteItem*/
  );
};

export default NotesList;
