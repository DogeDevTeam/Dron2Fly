import {
  droneImageA, droneImageB, droneImageC, ExampleDronePilot, OpinionAnonim,
  GalleryImageA, GalleryImageB, GalleryImageC, GalleryImageD,
  // eslint-disable-next-line import/no-unresolved, import/extensions
} from '../assetsManagement';

export default {
  home: {
    headerSection: {
      mainHeading: ['UWIECZNIJ', 'SWOJE CHWILE NA', 'WYŻSZYM', 'POZIOMIE'],
      underHeading: ['RAZEM Z', 'DRON2FLY'],
    },
    gallerySection: [
      {
        image: GalleryImageA,
      },
      {
        image: GalleryImageB,
      },
      {
        image: GalleryImageC,
      },
      {
        image: GalleryImageD,
      },
    ],
    flyingStaffSection: [
      {
        title: 'DJI Mavic Air 2S',
        subTitle: 'Dron nr. 1',
        description: 'W dronie zastosowano kamerę 5.4K z jednocalowym sensorem, co pozwala na wykonywanie wysokiej jakości zdjęć, a dzięki gimbalowi nagrania są stabilne i płynne.',
        image: droneImageA,
      },
      {
        title: 'Rekon 5',
        subTitle: 'Dron nr. 2',
        description: 'Dron charakteryzuje się dużą prędkością i zwrotnością. Dzięki zamontowanej kamerze sportowej umożliwia nagrywanie dynamicznych wideo w jakości 4k/60fps z możliwością stabilizacji obrazu.',
        image: droneImageB,
      },
      {
        title: 'Flywoo Cinerace 20',
        subTitle: 'Dron nr. 3',
        description: 'Dron dzięki małemu rozmiarowi i dużej stabilności umożliwia tworzenie nagrań wewnątrz budynków. W dronie została zamontowana kamera DJI 4k/60fps, a dzięki osłonom śmigieł pozwala na lot blisko ludzi/obiektów.',
        image: droneImageC,
      },
    ],
    offerSection: {
      firstService: 'Specjalne Ujęcia na Życzenie',
      secondService: 'Inspekcja Budynków',
      thirdService: 'Nagrywanie / Fotografowanie Obszaru',
    },
    aboutUsSection: [
      {
        pilotFullName: 'Jakub Halicki',
        pilotAbout: 'Pasjonuje się lotnictwem od wielu lat a w szczególności bezzałogowymi statkami powietrznymi. Interesuje się również nowoczesnymi zastosowaniami dronów w budownictwie oraz geodezji. Jestem w trakcie studiów na Politechnice Wrocławskiej na Wydziale Budownictwa Lądowego i Wodnego.',
        pilotImage: ExampleDronePilot,
      },
    ],
    portfolioSection: {
      mainVideoTitle: 'KRAJOBRAZ Z LOTU PTAKA',
    },
    opinionsSection: [
      {
        avatarImage: OpinionAnonim,
        fullName: 'Michał Zięta',
        opinionText: 'Znakomicie wykonana robota, firma godna polecenia 🙂.',
        rate: 10,
      },
      {
        avatarImage: OpinionAnonim,
        fullName: 'Wiktoria Buzun',
        opinionText: 'Bardzo solidnie i sprawnie wykonana usługa. Polecam serdecznie.',
        rate: 10,
      },
      {
        avatarImage: OpinionAnonim,
        fullName: 'Zu Zia',
        opinionText: 'Profesjonalnie i bardzo dobrze wykonana usługa. Polecam skorzystania z oferty firmy Dron2Fly.',
        rate: 10,
      },
      {
        avatarImage: OpinionAnonim,
        fullName: 'Bartłomiej Pietraszewski',
        opinionText: 'Polecam bardzo serdecznie !.',
        rate: 10,
      },
      {
        avatarImage: OpinionAnonim,
        fullName: 'Dawid Nowak',
        opinionText: 'Polecam!!',
        rate: 10,
      },
      {
        avatarImage: OpinionAnonim,
        fullName: 'Marcel',
        opinionText: 'Solidna firma, szybkie i profesjonalne wykonanie. Polecam każdemu!',
        rate: 10,
      },
    ],
  },
  footer: {
    longFooterText: 'Uwiecznij swoje chwile na wyższym poziomie razem z Dron2Fly.',
    bottomBarText: ['Drone2Fly | © Copyright 2023, Wszelkie prawa zastrzeżone | Stworzone przez', 'StormCastle.pl'],
  },
};
