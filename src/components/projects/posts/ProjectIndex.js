import NamecheapApi from "./NamecheapApi";
import NepseApi from "./NepseApi";

export const Posts = [
  {
    title: "AWS Cli cheatsheet for S3",
    slug_title: "aws_cli_cheatsheet_for_s3",
    summary: "Collection of helpful  cli commands for S3 bucket",
    tags: "aws, s3, aws cli",
    status: "publish",
    created_at: "2021-10-20",
    updated_at: "2021-10-20",
    component: NepseApi,
  },

  {
    title: "Git me some knowledge",
    slug_title: "git_me_some_knowledge_2",
    summary: "A post on funny issue I encountered with git.",
    tags: "Git",
    status: "publish",
    created_at: "2021-02-21",
    updated_at: "2021-06-01",
    component: NamecheapApi,
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
