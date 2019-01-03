const assign = require('./index');

describe('assign', function() {
  it('should assign object getters also', function() {
    const object = {};

    Object.defineProperties(object, {
      bar: {
        enumerable: true,
        writable: true,
        value: 'bar',
      },
      foo: {
        enumerable: true,
        get: function() {
          return this.bar;
        }
      },
    });

    const result = assign({}, object);

    expect(result).toEqual(object);

    result.bar = 'foo';

    expect(result.foo).toBe(result.bar);
  });
});