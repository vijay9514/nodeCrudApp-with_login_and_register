import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { AllListingComponent } from './all-listing/all-listing.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { AddListingsComponent } from './add-listings/add-listings.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AllListingComponent,
    ListingDetailComponent,
    AddListingsComponent
    
    
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
    ReactiveFormsModule
  ]
})
export class ListingModule { }
