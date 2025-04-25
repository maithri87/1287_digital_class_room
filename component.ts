import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../notice.service';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html'
})
export class NoticeBoardComponent implements OnInit {
  notices: any[] = [];

  constructor(private noticeService: NoticeService) {}

  ngOnInit() {
    this.noticeService.getNotices().subscribe((data: any) => {
      this.notices = data;
    });
  }
}