const Student = require('../app/student')
const assert = require('assert')

describe('Read tests', () => {
  let reader
  beforeEach((done) => {
    reader = Student({ name: 'Reader' });
    reader.save().then(() => {
      done();
    })
  })
  it('read a user: Reader', (done) => {
    Student.find({ name: 'Reader' }).then((students) => {
      assert(reader._id.toString() === students[0]._id.toString());
      done();
    })
  })
})