import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit {
  title1: string = `Marketplace for exchange of sneakers
  and hype products in India`;
  subTitle1: string = `Sign up to enter free raffle`;

  title2: string = "Find the Heat";
  subTitle2: string = `Scouting for your desired pair on Social Media can be a tedious task.
  Find the perfect fit for your style and your wallet, all in one place.
  Get the right price and size brought to you by numerous verified resellers.`;

  title3: string = "Take a seat";
  subTitle3: string = `We know how special it is to cop a pair of sneakers.
  Needless to say, the exchange of fake kicks is the ultimate crime.
  We use a combination of physical authentication and
  machine learning to guarantee authenticity. Moreover, end-to-end
  protection keeps every transaction secure.`;

  title4: string = "Own the streets";
  subTitle4: string = `Hustle and take your passion to the bank with cypher’s effortless
  buy and sell process. You are only one step away from turning your
  interests into income. Now, anyone can be a reseller.`;

  title5: string = "Our story";
  subTitle5: string = `‘Cypher’ is an informal gathering of rappers, beatboxers, break dancers and
  spectators from the ‘street’, who come together to jam. Akin to the name,
  we at Cypher strive to organise the hype culture by providing seamless
  shared experiences between the ever-so-passionate sneakerheads in India.`;
  footerText5: string = "Sign up to enter free raffle";

  constructor() {}

  ngOnInit() {}
}
