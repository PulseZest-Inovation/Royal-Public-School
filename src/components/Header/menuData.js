const menuData = [
  { title: 'Home', path: '/' },
  {
    title: 'About',
    submenu: [
      { title: 'Founder', path: '/founder' },
      { title: 'President ', path: '/president' },
      { title: 'Vice President', path: '/vice-president' },
      { title: 'Principle ', path: '/principle' },
      { title: 'Vice Principle ', path: '/vice-principle' },

    ],
  },
  { title: 'Achievements',
  submenu: [
    { title: 'Academic', path: '/academic' },
    { title: 'Non Academic ', path: '/non-academic' },
  ],
},
  { title: 'Career', path: '/career' },
  { title: 'Contact', path: '/contact' },

  
];

export default menuData;
