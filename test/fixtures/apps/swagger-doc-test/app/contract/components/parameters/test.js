const obj = {
  test: {
    in: 'query',
    name: 'test',
    schema: {
      type: 'string',
      required: true
    },
    description: 'description'
  },
  test2: {
    in: 'query',
    name: 'test2',
    schema: {
      type: 'string',
      required: true
    },
    description: 'description'
  },
  test3: {
    in: 'query',
    name: 'test3',
    schema: {
      type: 'string',
      required: true
    },
    description: 'description'
  }
}
module.exports = {
  ...obj,
  testCollection: [obj.test, obj.test2, obj.test3]
}
