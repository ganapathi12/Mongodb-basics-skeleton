const mongoose = require('mongoose')
mongoose.Promise = global.Promise

before((done) => {
  mongoose.connect('mongodb://localhost/mongotube', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  mongoose.connection
    .once('open', () => {
        //console.log('Connected')
        done();
    })
    .on('error', (e) => {
      console.log('Your Error', e)
    })
})

beforeEach((done)=>{
    mongoose.connection.collections.students.drop(()=>{
        done()
    });
    //done()
})