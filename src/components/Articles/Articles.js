import React from "react";
import { Switch, Route } from "react-router-dom";

import ListArticles from "./ListArticles";
import ShowArticle from "./ShowArticle";

const Article = () => {
  return (
    <Switch>
      <Route exact path="/articles" component={ListArticles} />
      <Route exact path="/articles/:slug" component={ShowArticle} />
    </Switch>
  );
};

export default Article;
