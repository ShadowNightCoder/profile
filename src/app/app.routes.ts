import { Routes } from '@angular/router';
import { StartBannerComponent } from './components/start-banner/start-banner.component';
import { ProtfolioComponent } from './components/protfolio/protfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/about/resume/resume.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: StartBannerComponent },
    { path: 'about', component: ResumeComponent },
    { path: 'protfolio', component: ProtfolioComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' },
];
