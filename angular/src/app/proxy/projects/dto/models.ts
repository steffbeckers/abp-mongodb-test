import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';

export interface CreateProjectDto extends EntityDto<string> {
  name: string;
}

export interface ProjectDto extends AuditedEntityDto<string> {
  name?: string;
}

export interface UpdateProjectDto extends EntityDto<string> {
  name: string;
}
