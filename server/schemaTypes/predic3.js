import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'predic3',
  type: 'document',
  title: 'Prediction Section 3', 
  fields: [
 
    {
      name: 'betContainerTitle',
      type: 'string',
      title: 'Bet Container Title',
      description: 'Title for the bet predictions section',
      validation: (Rule) => Rule.required().max(50).warning('Keep the title concise'),
    },
    {
      name: 'copyText',
      type: 'string',
      title: 'Copy Text',
      description: 'Text to be copied when the copy button is clicked',
    },
    {
      name: 'tableRows',
      type: 'array',
      title: 'Table Rows',
      description: 'Rows for the bet predictions table',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {
              name: 'league',
              type: 'string',
              title: 'League',
            },
            {
              name: 'country',
              type: 'string',
              title: 'Country',
            },
            {
              name: 'team1',
              type: 'string',
              title: 'Team 1',
            },
            {
              name: 'team2',
              type: 'string',
              title: 'Team 2',
            },
            {
              name: 'tips',
              type: 'string',
              title: 'Tips',
            },
            {
              name: 'context',
              type: 'string',
              title: 'Context',
              description: 'E.g., home, away, etc.',
            },
            {
              name: 'result',
              type: 'boolean',
              title: 'Result',
              description: 'Result checkbox (true/false)',
            },
          ],
        }),
      ],
    },
  ],
})




