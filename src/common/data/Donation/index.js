import italy from '../../assets/image/donation/italy.png';
import china from '../../assets/image/donation/china.png';
import usa from '../../assets/image/donation/usa.png';
import suggestion1 from '../../assets/image/donation/suggestions/1.png';
import suggestion2 from '../../assets/image/donation/suggestions/2.png';
import suggestion3 from '../../assets/image/donation/suggestions/3.png';
import suggestion4 from '../../assets/image/donation/suggestions/4.png';

export const data = {
  navItems: [
    {
      label: 'Home',
      path: '/',
      offset: '70',
    },
    {
      label: 'Informazioni',
      path: '/#informazioni',
      offset: '70',
    },
    {
      label: 'Prevenzione',
      path: '/#prevenzione',
      offset: '120',
    },
    {
      label: 'Trattamento',
      path: '/#trattamento',
      offset: '70',
    },
    {
      label: 'Cliniche',
      path: '/#cliniche',
      offset: '70',
    },
    // {
    //   label: 'Dona',
    //   path: '/posts/chirurgia',
    //   offset: '70',
    // },
  ],
  services: [
    {
      id: 1,
      // icon: serviceIcon1,
      title: '🍎 Segui una dieta sana',
      desc: `Una dieta sana, associata al movimento fisico, è un ottimo strumento preventivo.`,
      link: '/posts/dietasana',
    },
    {
      id: 2,
      // icon: serviceIcon2,
      title: '🚭 Non fumare',
      desc: `Il fumo rappresenta un importante fattore di rischio nell'insorgenza di neoplasie.`,
      link: '/posts/nonfumare',
    },
    {
      id: 3,
      // icon: serviceIcon3,
      title: '🏃‍♀️ Mantieniti in attività',
      desc: `L'esercizio fisico, anche poche ore a settimana, riduce significativamente il rischio del cancro.`,
      link: '/posts/mantienitiattivo',
    },
    {
      id: 4,
      // icon: serviceIcon4,
      title: '🍷 Limita il consumo di alcolici',
      desc: `Il consumo di bevande alcoliche costituisce un fattore moltiplicativo nel rischio di tumori.`,
      link: '/posts/limitaalcolici',
    },
    {
      id: 5,
      // icon: serviceIcon5,
      title: '🩺 Effettua esami di screening',
      desc: `Gli screening oncologici sono fondamentale per individuare precocemente i tumori o loro precursori.`,
      link: '/posts/esamiscreening',
    },
    {
      id: 6,
      // icon: serviceIcon5,
      title: "🥵 Evita l'eccessiva esposizione al sole",
      desc: `Il sole fa bene, purché l'esposizione ai raggi UV non sia eccessiva.`,
      link: '/posts/evitasole',
    },
  ],
  presetAmounts: [
    {
      id: 1,
      value: 5,
      label: '$5',
    },
    {
      id: 2,
      value: 20,
      label: '$20',
    },
    {
      id: 3,
      value: 50,
      label: '$50',
    },
    {
      id: 4,
      value: 100,
      label: '$100',
    },
  ],
  effectedCountries: [
    {
      id: 1,
      name: 'Italy',
      flag: italy,
      amount: 10023,
    },
    {
      id: 2,
      name: 'China',
      flag: china,
      amount: 3300,
    },
    {
      id: 3,
      name: 'USA',
      flag: usa,
      amount: 2277,
    },
  ],
  suggestions: [
    {
      id: 1,
      thumb: suggestion1,
      title: 'Chirurgia',
    },
    {
      id: 2,
      thumb: suggestion2,
      title: 'Radioterapia',
    },
    {
      id: 3,
      thumb: suggestion3,
      title: 'Chemioterapia',
    },
    {
      id: 4,
      thumb: suggestion4,
      title: 'Immunoterapia',
    },
    {
      id: 5,
      thumb: suggestion4,
      title: 'Terapia ormonale',
    },
    {
      id: 6,
      thumb: suggestion4,
      title: 'Farmaci a bersaglio molecolare',
    },
  ],
  footerNav: [
    {
      id: 1,
      url: '#home',
      title: 'Home',
    },
    {
      id: 2,
      url: '#',
      title: 'Privacy',
    },
    {
      id: 3,
      url: '#',
      title: 'Licence',
    },
    {
      id: 4,
      url: '#',
      title: 'Contact us',
    },
  ],
};
