import { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectsService } from '@proxy/projects';
import { ProjectDto } from '@proxy/projects/dto';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  projects: ProjectDto[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private getProjects(): void {
    this.projectsService.getList({ maxResultCount: 20 })
      //.pipe(takeUntil(this.destroy$))
      .pipe(first())
      .subscribe((pagedProjectResultDto: PagedResultDto<ProjectDto>) => {
        this.projects = pagedProjectResultDto.items || [];
      });
  }
}
