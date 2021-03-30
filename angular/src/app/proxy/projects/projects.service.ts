import type { CreateProjectDto, ProjectDto, UpdateProjectDto } from './dto/models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  apiName = 'Default';

  create = (input: CreateProjectDto) =>
    this.restService.request<any, ProjectDto>({
      method: 'POST',
      url: `/api/app/projects`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/projects/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, ProjectDto>({
      method: 'GET',
      url: `/api/app/projects/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<ProjectDto>>({
      method: 'GET',
      url: `/api/app/projects`,
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting },
    },
    { apiName: this.apiName });

  update = (id: string, input: UpdateProjectDto) =>
    this.restService.request<any, ProjectDto>({
      method: 'PUT',
      url: `/api/app/projects/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
