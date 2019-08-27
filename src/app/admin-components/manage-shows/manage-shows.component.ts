import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/Show.model';
import { ManagementModeValues } from 'src/app/enums/mode-enums';
import { BooleanUtilities } from 'src/app/utilities/boolean.utilities';

@Component({
  selector: 'app-manage-shows',
  templateUrl: './manage-shows.component.html',
  styleUrls: ['./manage-shows.component.scss']
})
export class ManageShowsComponent implements OnInit {
  public showList: Show[] = [
    {
      _id: "1",
      title: "The Wohlfahrt Haus Dinner Threatre",
      details: `Andrew will be heading to the Wohlfahrt Haus Dinner Theatre in Wytheville, VA ` +
        `to be a part of their holiday show "Hollywood Christmas"`,
      month: "December",
      year: 2018,
      past: false,
    },
    {
      _id: "2",
      title: "Woodstock Playhouse",
      details: "Spent the the summer at the Woodstock Playhouse, playing a variety of roles as part of their core company ",
      month: "July",
      year: 2018,
      past: true,
    },
    {
      _id: "3",
      title: "The Highwood Theatre",
      details: "Performed in SOON by Nick Blaemire at The Highwood Theatre ",
      month: "October",
      year: 2018,
      past: true,
    },
  ];
  public formItem: Show;
  public showErrors = false;

  public admin = true;
  public mode: ManagementModeValues = ManagementModeValues.OVERVIEW;

  public get overviewReady(): boolean {
    return true;
  }

  public get formReady(): boolean {
    return true;
  }

  public get overviewActive(): boolean {
    return this.mode === ManagementModeValues.OVERVIEW;
  }

  public get formActive(): boolean {
    return this.addActive || this.editActive;
  }

  public get addActive(): boolean {
    return this.mode === ManagementModeValues.ADD;
  }

  public get editActive(): boolean {
    return this.mode === ManagementModeValues.EDIT;
  }

  public get titleError(): boolean {
    return !BooleanUtilities.hasValue(this.formItem.title);
  }

  public get detailsError(): boolean {
    return !BooleanUtilities.hasValue(this.formItem.details);
  }

  public get yearError(): boolean {
    return !BooleanUtilities.hasValue(this.formItem.year);
  }

  public get errors(): String[] {
    const errors: String[] = [];
    if (this.titleError) {
      errors.push("Please add a title.");
    }
    if (this.detailsError) {
      errors.push("Please add details.");
    }
    if (this.yearError) {
      errors.push("Please add a year.");
    }
    return errors;
  }

  private get valid(): boolean {
    return this.errors.length === 0;
  }

  constructor() { }

  public ngOnInit() {
  }

  public switchToOverviewMode(): void {
    this.showErrors = false;
    this.mode = ManagementModeValues.OVERVIEW;
  }

  public switchToAddMode(): void {
    this.showErrors = false;
    this.formItem = {
      title: "",
      details: "",
      month: "January",
      year: 2019,
      past: false,
    };
    this.mode = ManagementModeValues.ADD;
  }

  public switchToEditMode(id: string): void {
    this.showErrors = false;
    const focusItem = this.showList.find((show) => {
      return show._id === id;
    });
    this.formItem = {
      _id: focusItem._id,
      title: focusItem.title,
      details: focusItem.details,
      month: focusItem.month,
      year: focusItem.year,
      past: focusItem.past,
    };
    this.mode = ManagementModeValues.EDIT;
  }

  public deleteShow(id: string): void {
    this.showList = this.showList.filter((show) => {
      return show._id !== id;
    });
  }

  public submit(): void {
    this.showErrors = true;
    if (this.valid) {
      if (this.addActive) {
        this.submitAdd();
      } else {
        this.submitEdit();
      }
    }
  }

  private submitAdd(): void {
    const newId = (this.showList.length + 5).toString();
    this.formItem._id = newId;
    this.showList.push(this.formItem);
    this.concludeSubmit();
  }

  private submitEdit(): void {
    this.showList = this.showList.filter((show) => {
      return show._id !== this.formItem._id;
    });
    this.showList.push(this.formItem);
    this.concludeSubmit();
  }

  private concludeSubmit(): void {
    this.formItem = {
      title: "",
      details: "",
      month: "January",
      year: 2019,
      past: false,
    };
    this.showErrors = false;
    this.switchToOverviewMode();
  }

}
