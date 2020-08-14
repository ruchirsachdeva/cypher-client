import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit {
  title1_1: string = "Marketplace for exchange of sneakers";
  title1_2: string = "and hype products in India";

  subTitle1: string = `Sign up to enter free raffle`;

  title2: string = "Find the Heat";
  subTitle2_1: string =
    "Scouting for your desired pair on Social Media can be a tedious task.";
  subTitle2_2: string =
    "Find the perfect fit for your style and your wallet, all in one place.";
  subTitle2_3: string =
    "Get the right price and size brought to you by numerous verified resellers.";

  title3: string = "Take a seat";
  subTitle3_1: string = "We know how special it is to cop a pair of sneakers.";
  subTitle3_2: string =
    "Needless to say, the exchange of fake kicks is the ultimate crime.";
  subTitle3_3: string = "We use a combination of physical authentication and";
  subTitle3_4: string =
    "machine learning to guarantee authenticity. Moreover, end-to-end";
  subTitle3_5: string = "protection keeps every transaction secure.";

  title4: string = "Own the streets";
  subTitle4_1: string =
    "Hustle and take your passion to the bank with cypher’s effortless";
  subTitle4_2: string =
    "buy and sell process. You are only one step away from turning your";
  subTitle4_3: string = "interests into income. Now, anyone can be a reseller.";

  title5: string = "Our story";
  subTitle5_1: string =
    "‘Cypher’ is an informal gathering of rappers, beatboxers, break dancers and";
  subTitle5_2: string =
    "spectators from the ‘street’, who come together to jam. Akin to the name,";
  subTitle5_3: string =
    "we at Cypher strive to organise the hype culture by providing seamless";
  subTitle5_4: string =
    "shared experiences between the ever-so-passionate sneakerheads in India.";

  footerText5: string = "Sign up to enter free raffle";

  constructor() {}

  ngOnInit() {}
}
