import { Component, OnInit, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { JsonPipe , CommonModule} from '@angular/common';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [JsonPipe , CardModule , CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  isLoading = true; 
  postList = signal<any[]>([]);
  auth = inject(AuthService);
  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.isLoading = true;
    this.auth.getAllPost().subscribe(
      (res: any) => {
        this.postList.set(res);
        this.isLoading = false;  
      },
      (error) => {
        console.error('Error fetching posts', error);
        this.isLoading = false;
      }
    );
  }
}
