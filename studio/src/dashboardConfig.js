export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f38e587d56b5b2d2eb421a3',
                  title: 'Sanity Studio',
                  name: 'ravitejamanchala-studio',
                  apiId: '49071864-bacf-4693-a40b-695dfeb20e5a'
                },
                {
                  buildHookId: '5f38e5874699797c44135616',
                  title: 'Blog Website',
                  name: 'ravitejamanchala',
                  apiId: '24e108c7-1cf3-4c19-9440-6b7f8e83875d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ravitejamanchala/ravitejamanchala',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://ravitejamanchala.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
