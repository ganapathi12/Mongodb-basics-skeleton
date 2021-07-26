const Student = require('../app/student')
const assert = require('assert')

describe('update test', () => {
    let updater;
    beforeEach((done) => {
        updater = new Student({name:'Updater'})
        updater.save()
        .then(()=>done())
    })
    it('Set n save test',()=>{
        updater.set('name','Upupdater');
        updater.save()
        .then(()=>Student.find({}))
        .then((students)=>{
            assert(students[0].name === 'Upupdater')
        })

    })
})
