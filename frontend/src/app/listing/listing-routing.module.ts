import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllListingComponent } from './all-listing/all-listing.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { AddListingsComponent } from './add-listings/add-listings.component'; 
import { AuthGuard } from '../user/guard/auth.guard';

const routes: Routes = [

  {path:"",component:AllListingComponent},
  {
    path:"add-listing", component: AddListingsComponent,
    canActivate:[AuthGuard]
  },
  {path:":id", component:ListingDetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
