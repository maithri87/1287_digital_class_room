
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NoticeService {
  private URL = 'http://localhost:3000/api/notices';

  constructor(private http: HttpClient) {}

  getNotices() {
    return this.http.get(this.URL);
  }

  createNotice(notice: any) {
    return this.http.post(this.URL, notice);
  }

  updateNotice(id: string, data: any) {
    return this.http.put(`${this.URL}/${id}`, data);
  }

  deleteNotice(id: string) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
