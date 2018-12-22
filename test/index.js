

var test = require('tape');
var request = require('supertest');
var app = require('../server');
//test 
test('Correct users returned', function (t) {
  request(app)
    .get('/api/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      var expectedUsers = ['a', 'b', 'c'];

      t.error(err, 'No error');
      t.same(res.body, expectedUsers, 'Users as expected');
      t.end();
    });
});
