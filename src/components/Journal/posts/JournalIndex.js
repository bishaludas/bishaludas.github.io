import FiveYearsAsSWE from "./FiveYearsAsSWE";

export const Posts = [
  {
    title: "5 years as Software Engineer",
    slug_title: "5_years_as_software_engineer",
    summary: "A post on funny issue I encountered with git.",
    tags: "Git",
    status: "publish",
    created_at: "2023-03-12",
    updated_at: "2023-03-12",
    component: FiveYearsAsSWE,
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
