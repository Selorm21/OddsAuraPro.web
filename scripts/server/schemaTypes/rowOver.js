import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'rollover',
  type: 'document',
  title: 'RollOver Section',
  fields: [
    {
      name: 'tableRows',
      type: 'array',
      title: 'Table Rows',
      description: 'Rows for the RollOver table',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {
              name: 'day',
              type: 'number',
              title: 'Day',
              description: 'The day number',
            },
            {
              name: 'bookingCode',
              type: 'string',
              title: 'Booking Code',
              description: 'Code for the bet booking',
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
