import { Component, ElementRef, ViewChild } from '@angular/core';
import { ThreeDComponent } from "../three-d/three-d.component";

@Component({
  selector: 'app-start-banner',
  standalone: true,
  imports: [ThreeDComponent],
  templateUrl: './start-banner.component.html',
  styleUrl: './start-banner.component.css',
})
export class StartBannerComponent {

  roles: string[] = ['Frontend Developer', 'Code Engineer', 'Tech Explorer'];
  currentRole: string = '';
  private roleIndex = 0;
  private charIndex = 0;
  private typingSpeed = 120;
  private deletingSpeed = 60;
  private pauseTime = 6000;

  ngOnInit(): void {
    this.typeRole();
  }

  typeRole() {
    const role = this.roles[this.roleIndex];

    if (this.charIndex < role.length) {
      this.currentRole += role.charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.typeRole(), this.typingSpeed);
    } else {
      setTimeout(() => this.deleteRole(), this.pauseTime);
    }
  }

  deleteRole() {
    if (this.charIndex > 0) {
      this.currentRole = this.currentRole.substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.deleteRole(), this.deletingSpeed);
    } else {
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      setTimeout(() => this.typeRole(), this.typingSpeed);
    }
  }


  

}
