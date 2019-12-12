import { Injectable } from "@angular/core";
import { Show } from "../models/Show.model";
import { ShowStatusValues } from "../enums/show-status-enums";

@Injectable({
  providedIn: "root"
})
export class ShowService {
  public showList: Show[] = [
    {
      _id: "1",
      title: "The Wohlfahrt Haus Dinner Threatre",
      details: `Andrew will be heading to the Wohlfahrt Haus Dinner Theatre in Wytheville, VA ` +
        `to be a part of their holiday show "Hollywood Christmas"`,
      month: "December",
      year: 2018,
      status: ShowStatusValues.UPCOMING,
    },
    {
      _id: "2",
      title: "Woodstock Playhouse",
      details: "Spent the the summer at the Woodstock Playhouse, playing a variety of roles as part of their core company ",
      month: "July",
      year: 2018,
      status: ShowStatusValues.PAST,
    },
    {
      _id: "3",
      title: "The Highwood Theatre",
      details: "Performed in SOON by Nick Blaemire at The Highwood Theatre ",
      month: "October",
      year: 2018,
      status: ShowStatusValues.PAST,
    },
    {
      _id: "4",
      title: "Not a Real Play",
      details: "Performed on February 31st",
      month: "February",
      year: 1900,
      status: ShowStatusValues.ARCHIVED,
    },
  ];

  constructor() { }
}