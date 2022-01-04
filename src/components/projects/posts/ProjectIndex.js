import Eisei from "./Eisei";
import NepseApi from "./NepseApi";
import NamecheapApi from "./NamecheapApi";

export const Posts = [
  {
    title: "NEPSE-Api",
    slug_title: "nepse-api",
    tags: "aws, s3, aws cli",
    status: "publish",
    created_at: "2020-10-20",
    updated_at: "2020-10-20",
    component: NepseApi,
  },

  {
    title: "Eisei : A space adventure game",
    slug_title: "eisei",
    tags: "Git",
    status: "publish",
    created_at: "2020-02-21",
    updated_at: "2020-06-01",
    component: Eisei,
  },
  {
    title: "Namecheap Api",
    slug_title: "namecheap_api",
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
