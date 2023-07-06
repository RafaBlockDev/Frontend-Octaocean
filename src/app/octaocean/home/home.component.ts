import { Component, OnDestroy, OnInit } from '@angular/core';

import { HomeService } from '../services/home.service';

import { Home } from '../models/home';
import { MarqueeGroup } from '../models/marquee-group';
import { InfoSection } from '../models/info-section';
import { ButtonCardInfoPictureGroup } from '../models/button-card-info-picture-group';
import { ButtonCardTableGroup } from '../models/button-card-table-group';
import { Footer } from '../models/footer';
import { ButtonCardInfoGroup } from '../models/button-card-info-group';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // marquees: MarqueeGroup = {
  //   marquees: [
  //     {
  //       icon: '',
  //       title: 'Building',
  //       description: 'We are working hard in this section'
  //     },
  //     {
  //       icon: '',
  //       title: 'Building',
  //       description: 'We are working hard in this section'
  //     },
  //     {
  //       icon: '',
  //       title: 'Building',
  //       description: 'We are working hard in this section'
  //     },
  //     {
  //       icon: '',
  //       title: 'Building',
  //       description: 'We are working hard in this section'
  //     },
  //     {
  //       icon: '',
  //       title: 'Building',
  //       description: 'We are working hard in this section'
  //     },
  //     {
  //       icon: '',
  //       title: 'Building',
  //       description: 'We are working hard in this section'
  //     },
  //     {
  //       icon: '',
  //       title: 'Building',
  //       description: 'We are working hard in this section'
  //     }
  //   ]
  // };

  // infoSection: InfoSection = {
  //   picture: '',
  //   title: 'Lorem Ipsum is simply dummy text of the',
  //   subtitle: '',
  //   description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
  //   buttonName: 'Lorem Ipsum',
  //   buttonIcon: 'fa-solid fa-arrow-right',
  //   buttonUrl: '#',
  // };

  // cardsPicture: ButtonCardInfoPictureGroup = {
  //   cardsPerRow: 2,
  //   cards: [
  //     {
  //       title: 'Lorem',
  //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  //       picture: '',
  //       borderColor: '#d62898',
  //       buttonName: 'Lorem Ipsum',
  //       buttonColor: '#d62898',
  //       buttonUrl: '#',
  //       visible: true
  //     },
  //     {
  //       title: 'Lorem',
  //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  //       picture: '',
  //       borderColor: '#00fc22',
  //       buttonName: 'Lorem Ipsum',
  //       buttonColor: '#00fc22',
  //       buttonUrl: '#',
  //       visible: true
  //     }
  //   ]
  // };

  // cardsInfo: ButtonCardInfoGroup = {
  //   title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  //   buttonName: 'Lorem Ipsum is simply',
  //   buttonUrl: '#',
  //   cardsPerRow: 3,
  //   cards: [
  //     {
  //       title: 'Lorem',
  //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  //       buttonName: 'Lorem Ipsum',
  //       buttonUrl: '#',
  //       buttonColor: '#d62898',
  //       visible: true
  //     },
  //     {
  //       title: 'Lorem',
  //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  //       buttonName: 'Lorem Ipsum',
  //       buttonUrl: '#',
  //       buttonColor: '#d62898',
  //       visible: true
  //     },
  //     {
  //       title: 'Lorem',
  //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  //       buttonName: 'Lorem Ipsum',
  //       buttonUrl: '#',
  //       buttonColor: '#d62898',
  //       visible: true
  //     }
  //   ]
  // };

  // cardsTable: ButtonCardTableGroup = {
  //   cardsPerRow: 2,
  //   title: 'Lorem Ipsum is',
  //   subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //   cards: [
  //     {
  //       title: 'Building',
  //       titleIcon: '',
  //       subtitle: 'Lorem Ipsum is simply',
  //       subtitleIcon: 'fa-solid fa-info',
  //       subtitleBackground: '#48b3ba9a',
  //       contentHeader: ['Title 1', 'Title 2'],
  //       contentBody: ['Value 1', 'Value 2'],
  //       buttonName: 'Lorem Ipsum',
  //       buttonIcon: 'fa-solid fa-angles-right',
  //       buttonUrl: '#',
  //       visible: true
  //     },
  //     {
  //       title: 'Building',
  //       titleIcon: '',
  //       subtitle: 'Lorem Ipsum is simply',
  //       subtitleIcon: 'fa-solid fa-check',
  //       subtitleBackground: '#d62898dd',
  //       contentHeader: ['Title 1', 'Title 2'],
  //       contentBody: ['Value 1', 'Value 2'],
  //       buttonName: 'Lorem Ipsum',
  //       buttonIcon: 'fa-solid fa-angles-right',
  //       buttonUrl: '#',
  //       visible: true
  //     },
  //     {
  //       title: 'Building',
  //       titleIcon: '',
  //       subtitle: 'Lorem Ipsum is simply',
  //       subtitleIcon: 'fa-solid fa-info',
  //       subtitleBackground: '#48b3ba9a',
  //       contentHeader: ['Title 1', 'Title 2'],
  //       contentBody: ['Value 1', 'Value 2'],
  //       buttonName: 'Lorem Ipsum',
  //       buttonIcon: 'fa-solid fa-angles-right',
  //       buttonUrl: '#',
  //       visible: true
  //     },
  //     {
  //       title: 'Building',
  //       titleIcon: '',
  //       subtitle: 'Lorem Ipsum is simply',
  //       subtitleIcon: 'fa-solid fa-check',
  //       subtitleBackground: '#d62898dd',
  //       contentHeader: ['Title 1', 'Title 2'],
  //       contentBody: ['Value 1', 'Value 2'],
  //       buttonName: 'Lorem Ipsum',
  //       buttonIcon: 'fa-solid fa-angles-right',
  //       buttonUrl: '#',
  //       visible: true
  //     },
  //     {
  //       title: 'Building',
  //       titleIcon: '',
  //       subtitle: 'Lorem Ipsum is simply',
  //       subtitleIcon: 'fa-solid fa-check',
  //       subtitleBackground: '#d62898dd',
  //       contentHeader: ['Title 1', 'Title 2'],
  //       contentBody: ['Value 1', 'Value 2'],
  //       buttonName: 'Lorem Ipsum',
  //       buttonIcon: 'fa-solid fa-angles-right',
  //       buttonUrl: '#',
  //       visible: true
  //     },
  //     {
  //       title: 'Building',
  //       titleIcon: '',
  //       subtitle: 'Lorem Ipsum is simply',
  //       subtitleIcon: 'fa-solid fa-check',
  //       subtitleBackground: '#d62898dd',
  //       contentHeader: ['Title 1', 'Title 2'],
  //       contentBody: ['Value 1', 'Value 2'],
  //       buttonName: 'Lorem Ipsum',
  //       buttonIcon: 'fa-solid fa-angles-right',
  //       buttonUrl: '#',
  //       visible: true
  //     },
  //     {
  //       title: 'Building',
  //       titleIcon: '',
  //       subtitle: 'Lorem Ipsum is simply',
  //       subtitleIcon: 'fa-solid fa-check',
  //       subtitleBackground: '#d62898dd',
  //       contentHeader: ['Title 1', 'Title 2'],
  //       contentBody: ['Value 1', 'Value 2'],
  //       buttonName: 'Lorem Ipsum',
  //       buttonIcon: 'fa-solid fa-angles-right',
  //       buttonUrl: '#',
  //       visible: true
  //     },
  //     {
  //       title: 'Building',
  //       titleIcon: '',
  //       subtitle: 'Lorem Ipsum is simply',
  //       subtitleIcon: 'fa-solid fa-check',
  //       subtitleBackground: '#d62898dd',
  //       contentHeader: ['Title 1', 'Title 2'],
  //       contentBody: ['Value 1', 'Value 2'],
  //       buttonName: 'Lorem Ipsum',
  //       buttonIcon: 'fa-solid fa-angles-right',
  //       buttonUrl: '#',
  //       visible: true
  //     }
  //   ],
  //   buttonName: 'Lorem Ipsum is',
  //   buttonUrl: '#',
  //   buttonIcon: ''
  // };

  // footer: Footer = {
  //   titleCommunity: 'Lorem Ipsum is',
  //   titleFooter: 'Lorem Ipsum is simply dummy',
  //   subtitleFooter: 'Lorem Ipsum',
  //   community: [
  //     {
  //       icon: 'fa-brands fa-facebook-f',
  //       url: '#'
  //     },
  //     {
  //       icon: 'fa-brands fa-linkedin',
  //       url: '#'
  //     },
  //     {
  //       icon: 'fa-brands fa-instagram',
  //       url: '#'
  //     },
  //     {
  //       icon: 'fa-brands fa-youtube',
  //       url: '#'
  //     },
  //     {
  //       icon: 'fa-brands fa-whatsapp',
  //       url: '#'
  //     }
  //   ]
  // };

  marquees!: MarqueeGroup;
  infoSection!: InfoSection;
  cardsPicture!: ButtonCardInfoPictureGroup;
  cardsInfo!: ButtonCardInfoGroup;
  cardsTable!: ButtonCardTableGroup;
  footer!: Footer;

  constructor(private readonly homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getHome()
      .subscribe((res: Home) => {
        this.marquees = res.marquees;
        this.infoSection = res.infoSection;
        this.cardsPicture = res.buttonCardInfoPicture;
        this.cardsInfo = res.buttonCardInfo;
        this.cardsTable = res.buttonCardTableGroup;
        this.footer = res.footer;
      })
  }

  ngOnDestroy(): void {

  }
}
