
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListingService } from '../service/listing.service';

@Component({
  selector: 'app-add-listings',
  templateUrl: './add-listings.component.html',
  styleUrls: ['./add-listings.component.css']
})
export class AddListingsComponent implements OnInit {
listingForm=new FormGroup({
  title:new FormControl("",[Validators.required]),
  price:new FormControl("",[Validators.required]),
  locality:new FormControl("",[(Validators.required)]),
  details:new FormControl("",[Validators.required])
})
  constructor(private listingService:ListingService, private router:Router) { }

  ngOnInit(): void {
  }
newListing(){
  if(this.listingForm.valid){
    this.listingService.addListing(this.listingForm.value).subscribe(res=>{
      this.listingForm.reset();
      this.router.navigate(["/listings"]);

    })
  }
}
}
