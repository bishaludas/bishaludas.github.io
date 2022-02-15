import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./posts/PostIndex";

const ShowArticle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Switch>
      {/* Route to post component along with dates */}
      {routes.map((item, key) => (
        <Route
          exact
          path={`/articles/${item.slug_title}`}
          render={(props) =><item.component {...props}  createdAt={item.created_at} 
          updatedAt={item.updated_at} tags={item.tags}/>}
          key={key}
        />
      ))}

      <Redirect to="/articles" />
    </Switch>
  );
};

export default ShowArticle;
