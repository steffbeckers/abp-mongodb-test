using JetBrains.Annotations;
using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using XRM.Projects;

namespace Test.Projects
{
    public class Project : FullAuditedAggregateRoot<Guid>
    {
        public string Name { get; set; }

        public Project()
        {
            // This constructor is for deserialization / ORM purpose
        }

        public Project(
            Guid id,
            [NotNull] string name
        ) : base(id)
        {
            SetName(name);
        }

        private void SetName([NotNull] string name)
        {
            Name = Check.NotNullOrWhiteSpace(
                name,
                nameof(name),
                maxLength: ProjectConsts.NameMaxLength
            );
        }
    }
}
