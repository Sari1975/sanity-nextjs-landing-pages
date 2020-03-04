export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5fcb6795106b942ed47f7a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3j3sfkfc',
                  apiId: '3dd3e585-7ce8-4de3-8ec4-f80b549a3d03'
                },
                {
                  buildHookId: '5e5fcb6790ba687898b2d0f5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-f3uzxoau',
                  apiId: '8e4ac00d-bd96-4764-a459-2883a8f8ff65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sari1975/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-f3uzxoau.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
