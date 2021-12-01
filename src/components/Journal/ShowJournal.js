import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./posts/JournalIndex.js";

const ShowJournal = () => {
  return (
    <Switch>
      {routes.map((item, key) => (
        <Route
          exact
          path={`/journal/${item.slug_title}`}
          component={item.component}
          key={key}
        />
      ))}

      <Redirect to="/projects" />
    </Switch>
  );
};

export default ShowJournal;
