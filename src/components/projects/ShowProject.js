import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./posts/ProjectIndex.js";

const ShowProject = () => {
  return (
    <Switch>
      {routes.map((item, key) => (
        <Route
          exact
          path={`/projects/${item.slug_title}`}
          component={item.component}
          key={key}
        />
      ))}

      <Redirect to="/projects" />
    </Switch>
  );
};

export default ShowProject;
