using System;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Application.Dtos;
using XRM.Projects;

namespace Test.Projects.Dto
{
    public class CreateProjectDto : EntityDto<Guid?>
    {
        [Required]
        [StringLength(ProjectConsts.NameMaxLength)]
        public string Name { get; set; }
    }
}
