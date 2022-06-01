import Eisei from "./Eisei";
import NepseApi from "./NepseApi";
import NamecheapApi from "./NamecheapApi";
import DockerImage from "./DockerImage";
import MyFirstCloudArchitecture from "./MyFirstCloudArchitecture";

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
  {
    title: "Docker Image to run legacy codebase",
    slug_title: "Docker_image_to_run_legacy_codebase",
    tags: "Docker",
    status: "publish",
    created_at: "2020-12-21",
    updated_at: "2020-12-21",
    component: DockerImage,
  },
  {
    title: "My First Cloud Architecture",
    slug_title: "aws_cloud_architecture",
    summary:
      "I build an auto-scalable cloud architecture build on top of AWS Elastic container service using Fargate as compute resource.",
    tags: "AWS, Cloud, DevOps, Container",
    status: "publish",
    created_at: "2022-06-01",
    updated_at: "2022-06-01",
    component: MyFirstCloudArchitecture,
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
