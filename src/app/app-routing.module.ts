import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { ModalComponent } from './components/modal/modal.component';
import { EditThoughtsComponent } from './components/thoughts/edit-thoughts/edit-thoughts.component';

const routes : Routes = [
    {
        path : '',
        redirectTo : 'listThoughts',
        pathMatch : 'full'
    },
    {
        path : 'createThoughts',
        component : CreateThoughtsComponent
    },
    {
        path : 'listThoughts',
        component : ListThoughtsComponent
    },
    {
        path : 'listThoughts/deleteThoughts/:id',
        component : ModalComponent
    },
    {
        path : 'listThoughts/editThoughts/:id',
        component : EditThoughtsComponent
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {
}

