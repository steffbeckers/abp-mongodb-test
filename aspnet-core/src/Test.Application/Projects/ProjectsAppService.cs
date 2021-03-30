using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Test.Projects.Dto;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Test.Projects
{
    public class ProjectsAppService :
        CrudAppService<
            Project,
            ProjectDto,
            Guid,
            PagedAndSortedResultRequestDto,
            CreateProjectDto,
            UpdateProjectDto
        >,
        IProjectsAppService
    {
        public ProjectsAppService(IRepository<Project, Guid> projectRepository) : base(projectRepository)
        {
        }
    }
}
