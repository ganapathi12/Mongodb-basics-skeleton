const Student=require('../app/student')
const assert =require('assert')

describe('Create test', ()=>{
    it('create a user in db', (done)=>{
        //assert(true);
        const sam =new Student({name: "sam"});
        sam.save()
        .then(()=>{
            assert(!sam.isNew)
            done();
        })
        .catch(()=>{console.log("error");})

    })
})


