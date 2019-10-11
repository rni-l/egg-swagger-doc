'use strict';

const mock = require('egg-mock');
const assert = require('assert');

describe('test/swagger-doc.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/swagger-doc-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /swagger-ui.html', () => {
    return app
      .httpRequest()
      .get('/swagger-ui.html')
      .expect(200);
  });

  it('should GET /swagger-doc', async () => {
    return app
      .httpRequest()
      .get('/swagger-doc')
      .expect(200);
  });

  it('check components parameters', async () => {
    const result = await app.httpRequest().get('/swagger-doc');
    const { components } = JSON.parse(result.res.text);
    const { parameters } = components;
    assert.deepEqual(parameters.test, {
      in: 'query',
      name: 'test',
      schema: {
        type: 'string',
        required: true,
      },
      description: 'description',
    });
  });

  it('check reqeust params', async () => {
    const result = await app.httpRequest().get('/swagger-doc');
    const { paths } = JSON.parse(result.res.text);
    const queryParames = paths['/resource2'].post.parameters[0];
    assert.deepEqual(queryParames, {
      $ref: '#/components/parameters/test',
    });
  });
});
