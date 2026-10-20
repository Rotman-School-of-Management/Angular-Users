import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({  selector: 'app-home', templateUrl: 'home.component.html' })


export class HomeComponent {
    user: User | null;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
    
     courses = [
        {
         "id": "AI, Analytics and Big Data",
          "header": "The rich parents of AI",
          "description": "Will AI truly unleash the power of creativity, or will it just be an extraordinarily average tool?",
          "extendedDescription": "",
          "imageUrl": "https://insightshub.rotman.utoronto.ca/userfiles/brownbags/researchhub/headerimage/Insigths-Rich-Parents-AI-Feature.jpg"
        },
        {
          "id": "AI, Analytics and Big Data",
          "header": "Building resilience in the age of AI",
          "description": "Artificial intelligence can help leaders identify signs of employee strain earlier — but how they interpret and respond to those signals matters.",
          "extendedDescription": "",
          "imageUrl": "https://insightshub.rotman.utoronto.ca/userfiles/brownbags/researchhub/headerimage/Insights-reputation-at-work-FEATURE.jpg"
        },
 	{
      "id": "Leadership and Career Development",
          "header": "Reputation at work: Who do your colleagues think you are?",
          "description": "Your reputation at work isn’t just about how you see yourself — it’s about the version of you that other people see. So how do reputations form, can shape career success, and if you have a bad rep, can you change it?",
          "extendedDescription": "",
          "imageUrl": "https://insightshub.rotman.utoronto.ca/userfiles/brownbags/researchhub/headerimage/Insights-bidding-rig-Feature.jpg"
        },
  	{
      "id": "Behavioural Economics and Marketing",
          "header": "The biggest obstacle for online sellers? Invisibility",
          "description": "",
          "extendedDescription": "Less than one per cent of new online sellers succeed. But customers are willing to buy from new merchants — if they can actually find them, new research suggests.",
          "imageUrl": "https://insightshub.rotman.utoronto.ca/userfiles/brownbags/researchhub/headerimage/Insights-lazy-workers-feature.jpg"
        },
        {
          "id": "Behavioural Economics and Marketing",
          "header": "How language moves markets: The hidden power of press releases",
          "description": "The language used in earnings news releases can affect stock prices as much as the numbers a company reported, new research finds.",
          "extendedDescription": "",
          "imageUrl": "https://insightshub.rotman.utoronto.ca/userfiles/brownbags/researchhub/headerimage/Insights-press-releases-move-markets-Feature.jpg"
        },
        {
          "id": "AI, Analytics and Big Data",
          "header": "Building resilience in the age of AI",
          "description": "Artificial intelligence can help leaders identify signs of employee strain earlier — but how they interpret and respond to those signals matters.",
          "extendedDescription": "",
          "imageUrl": "https://insightshub.rotman.utoronto.ca/userfiles/brownbags/researchhub/headerimage/Insights-agility-quotient-Feature.jpg"
        },
 	{
      "id": "Leadership and Career Development",
          "header": "Reputation at work: Who do your colleagues think you are?",
          "description": "Your reputation at work isn’t just about how you see yourself — it’s about the version of you that other people see. So how do reputations form, can shape career success, and if you have a bad rep, can you change it?",
          "extendedDescription": "",
          "imageUrl": "https://insightshub.rotman.utoronto.ca/userfiles/brownbags/researchhub/headerimage/Insights-Feedback101-Feature.jpg"
        },
  	{
      "id": "Behavioural Economics and Marketing",
          "header": "The biggest obstacle for online sellers? Invisibility",
          "description": "",
          "extendedDescription": "Less than one per cent of new online sellers succeed. But customers are willing to buy from new merchants — if they can actually find them, new research suggests.",
          "imageUrl": "https://insightshub.rotman.utoronto.ca/userfiles/brownbags/researchhub/headerimage/Insights-lazy-workers-feature.jpg"
        } 
,
        {
          "id": "Talent Management and Inclusion",
          "header": "Feedback 101: Getting constructive with your criticism",
          "description": "Giving feedback is one of the most important things you do as a manager… and also one of the hardest to get right. The latest episode of Manage This! gets into what works, what doesn’t and why most of us are probably doing it wrong.",
          "extendedDescription": "",
          "imageUrl": "https://insightshub.rotman.utoronto.ca/userfiles/brownbags/researchhub/headerimage/Insigths-Rich-Parents-AI-Feature.jpg"
        },
        {
          "id": 10,
          "header": "Building resilience in the age of AI",
          "description": "Artificial intelligence can help leaders identify signs of employee strain earlier — but how they interpret and respond to those signals matters.",
          "extendedDescription": "",
          "imageUrl": "https://insightshub.rotman.utoronto.ca/userfiles/brownbags/researchhub/headerimage/Insights-agility-quotient-Feature.jpg"
        },
 	{
          "id": 11,
      "header": "Do lazy workers influence their colleagues to slack off?",
      "description": "Employees don't mimic indolent coworkers — and they may even respond by working harder, new research suggests",
          "extendedDescription": "",
          "imageUrl": "https://insightshub.rotman.utoronto.ca/userfiles/brownbags/researchhub/headerimage/Insights-Feedback101-Feature.jpg"
        },
  	{
      "id": "Leadership and Career Development",
      "header": "Why adaptability is the most important skill you'll ever develop",
          "description": "",
          "extendedDescription": "Less than one per cent of new online sellers succeed. But customers are willing to buy from new merchants — if they can actually find them, new research suggests.",
          "imageUrl": "https://insightshub.rotman.utoronto.ca/userfiles/brownbags/researchhub/headerimage/Insights-lazy-workers-feature.jpg"
        }              
  ]
}
