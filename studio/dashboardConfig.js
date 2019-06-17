export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d078f636e336d1abe83ba46',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qqmwr4wd',
                  apiId: '29b7d312-0814-4713-aca5-d6bf2a0c0360'
                },
                {
                  buildHookId: '5d078f6315091cb155650612',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ie1x8jgu',
                  apiId: '7ba9ddd5-23e1-4cc1-b32b-ca7c18175f31'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simonbelg1325/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ie1x8jgu.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
