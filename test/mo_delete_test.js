const Student = require('../app/student')
const assert = require('assert')

describe('Delete Tests', () => {
  let deleter
  beforeEach((done) => {
    deleter = new Student({ name: 'Deleter' })
    deleter.save().then(() => done())
  })
  it('Delete a student', () => {
    Student.findOneAndDelete(deleter._id)
      .then(() => Student.findOne({ name: 'Deleter' }))
      .then((student) => {
        assert((student == null))
      })
  })
})
