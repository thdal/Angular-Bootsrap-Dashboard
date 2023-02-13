import { Component, OnInit } from '@angular/core';
import {TicketCategoriesService} from "../../../../core/api/ticketCategories/ticket-categories.service";
import {SnackbarService} from "../../../../shared/components/snackbar/snackbar.service";

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {

  ticketCategoriesList: any;

  constructor(private ticketCategoriesService: TicketCategoriesService, private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.getTicketCategories();
  }

  getTicketCategories(): void {
    this.ticketCategoriesService.findAll().subscribe((response: any) => {
      this.ticketCategoriesList = response;
    }, (error: any) => {
      this.snackbarService.showNotification('bottom', 'right', error.message , "danger");
    })
  }

  getTicketCategoryString(id: any): string {
    let catString =  this.ticketCategoriesList ? this.ticketCategoriesList.find(c => c.id === id).label : "" ;
    return catString.length > 45 ? catString.substring(0,45).concat("...") : catString;
  }

}
