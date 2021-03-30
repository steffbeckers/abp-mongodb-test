using System;
using Test.Projects.Dto;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Test.Projects
{
    public interface IProjectsAppService :
        ICrudAppService<
            ProjectDto,
            Guid,
            PagedAndSortedResultRequestDto,
            CreateProjectDto,
            UpdateProjectDto
        >
    {
    }
}
