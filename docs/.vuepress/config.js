module.exports = {
	serviceWorker: true,
    title: 'HBlog', 
    description: 'Welcome.',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
  themeConfig: {
	lastUpdated: 'Last Updated', 
	displayAllHeaders: false,
	activeHeaderLinks: true,
  home: true,
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Project', items: [
      { text: 'project', link : '/notes/project/project1'},
      { text: 'personal', link : '/notes/personal/default'},
      { text: 'document', link : '/notes/document/default'},
    ]
    },
    { text: 'About me', link: '/about/' }
  ],
  sidebar:{                      
    '/notes/project/': [
      {
        title:  'Python',
        collapsable: true,
        children: [
          '/notes/project/project1',
          '/notes/project/project2'
        ]
      },{
        title:  '.net core',
        collapsable: true,
        children: [
          '/notes/project/project1',
          '/notes/project/project2'
        ]
      },{
        title:  'others',
        collapsable: true,
        children: [
          '/notes/project/project1',
          '/notes/project/project2'
        ]
      }
    ],
    '/notes/personal/': [
      {
        title: '2018-11',
        collapsable: true,
        children: [
          '/notes/personal/default'
        ]
      },
      {
        title: '2018-12',
        collapsable: true,
        children: [
          '/notes/personal/20181221'
        ]
      },
    ],  '/notes/document/': [
      {
        title: '2018-11',
        collapsable: true,
        children: [
          '/notes/document/default'
        ]
      },
      {
        title: '2018-12',
        collapsable: true,
        children: [
          '/notes/document/default'
        ]
      }
    ]
  }
  }
}