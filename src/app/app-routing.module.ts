import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UnicornsListComponent} from './pages/unicorns-list/unicorns-list.component';
import {HomeComponent} from './pages/home/home.component';
import {UnicornComponent} from './pages/unicorn/unicorn.component';
import {MagicalUnicornGuard} from './pages/unicorn/magical-unicorn.guard';
import {UnicornsResolver} from './pages/unicorns-list/unicorns.resolver';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'unicorns', component: UnicornsListComponent, resolve: {unicorns: UnicornsResolver}},
    {path: 'unicorn/:id', component: UnicornComponent, canActivate: [MagicalUnicornGuard]},
    {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
