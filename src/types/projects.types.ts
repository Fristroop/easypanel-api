import { RestResponse } from "ft-rest/dist/types/index.js";

/**
 * Params
 */

export interface ProjectName {
  name: string;
}

export interface ProjectInfo extends ProjectName {
  createdAt: string;
}

export interface ProjectQueryConf {
  projectName: string;
}

/**
 * Returns
 */

export interface CanCreate extends RestResponse {
  data?: boolean;
}

export interface Create extends RestResponse {
  data?: ProjectInfo;
}

export interface Project extends RestResponse {
  data?: {
    project: ProjectInfo;
    services: [];
  };
}

export interface ListProjects extends RestResponse {
  data?: ProjectInfo[];
}

export interface ListWithServices extends RestResponse {
  data?: {
    projects: ProjectInfo[];
    services: [];
  };
}
