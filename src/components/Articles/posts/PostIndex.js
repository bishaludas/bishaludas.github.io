import GitMeSomeKnowledge from "./GitMeSomeKnowledge";
import AwsCliCheatsheet from "./AwsCliCheatsheet";

export const Posts = [
  {
    title: "Creating user in Postgres, SQL Server and Mysql",
    slug_title: "creating_user_in_postgres_sqlserver_mysql",
    summary: "Collection of helpful  cli commands for S3 bucket",
    tags: "Database, Postgres, SQL server, Mysql",
    status: "publish",
    created_at: "2021-12-01",
    updated_at: "2021-12-01",
    component: "",
  },
  {
    title: "AWS Cli cheatsheet for S3",
    slug_title: "aws_cli_cheatsheet_for_s3",
    summary: "Collection of helpful  cli commands for S3 bucket",
    tags: "aws, s3, aws cli",
    status: "publish",
    created_at: "2021-10-20",
    updated_at: "2021-10-20",
    component: AwsCliCheatsheet,
  },
  {
    title: "Articles worth reading",
    slug_title: "articles_worth_reading_2",
    summary:
      "Here is a list of articles that I stumbled upon when going through Hackernews and surfing the web that are worth reading.",
    tags: "Reads, Knowledge",
    status: "publish",
    created_at: "2021-09-02",
    updated_at: "2021-11-11",
    component: "",
  },
  {
    title: "Updating a nested object in Javascript",
    slug_title: "updating_a_nested_object_in_javascript_2",
    summary: "Updating a specific key in Object using spread operator.",
    tags: "Javascript",
    status: "publish",
    created_at: "2021-06-18",
    updated_at: "2021-06-18",
    component: "",
  },
  {
    title: "Migrating from Material-table to React-table",
    slug_title: "migrating_from_material_table_to_react_table_2",
    summary:
      "Material Ui has been my go to UI library for every react projects and I have been using material-table as it plays nice with the former. But considering the dependencies that comes along with it might be worth considering other options.",
    tags: "React, Optimization",
    status: "publish",
    created_at: "2021-05-19",
    updated_at: "2021-06-01",
    component: "",
  },
  {
    title: "Securely Connecting to remote Postgresql database",
    slug_title: "securely_connecting_to_remote_postgresql_database_2",
    summary:
      "In this article , we discuss on how to remotely connect to Postgres SQl database in secure manner.",
    tags: "Database, Postgres, Dbeaver",
    status: "publish",
    created_at: "2021-05-09",
    updated_at: "2021-06-01",
    component: "",
  },
  {
    title: "Issues with building a stable Dev team",
    slug_title: "issues_with_building_a_stable_dev_team_2",
    summary: "Things I learned when managing a team.",
    tags: "Slice of Life",
    status: "publish",
    created_at: "2021-03-03",
    updated_at: "2021-06-01",
    component: "",
  },
  {
    title: "Git me some knowledge",
    slug_title: "git_me_some_knowledge_2",
    summary: "A post on funny issue I encountered with git.",
    tags: "Git",
    status: "publish",
    created_at: "2021-02-21",
    updated_at: "2021-06-01",
    component: GitMeSomeKnowledge,
  },
];

const sortDataByDates = (a, b) => {
  if (a.created_at > b.created_at) {
    return -1;
  }
  if (a.created_at < b.created_at) {
    return 1;
  }
  return 0;
};

export const routes = Posts.sort(sortDataByDates);
