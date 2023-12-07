import {
  Component,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';

export interface PostsItem {
  id: number;
  userId: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  standalone: true,
  imports: [MatTableModule, CommonModule],
})
export class PostsComponent {

  private postsService = inject(PostsService);

  dataSource: WritableSignal<PostsItem[]> = signal([]);

  displayedColumns = ['id', 'userId', 'title', 'body'];

  constructor() {
    this.postsService.getPosts().subscribe((request: any) => {
      this.dataSource.set(request);
    });
  }
}
