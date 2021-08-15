const chai = require('chai')
const chaiHttp = require('chai-http')
const App = require('../dist/index') //cause server to run before running tests
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("API Route", () => {
    describe("POST /", () => {
        // Test to check that fields are validated
        it("should validate that user_id and title are present", (done) => {
            chai.request('http://localhost:3000')
                 .post('/')
                 .set('content-type', 'application/json')
                 .send({
                    "user_id": 1234,
                    "title": "first Ticket",
                    "tags": ["tags3"]
                })
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         // Test to check that validations are showing approriate codes and erros
         it("respond with a 422 and a JSON payload explaining the validation errors", (done) => {
            chai.request('http://localhost:3000')
                 .post('/')
                 .set('content-type', 'application/json')
                 .send({})
                 .end((err, res) => {
                     res.should.have.status(422);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         // Test to check that tags must be fewer than 5
        it("should check that tags must be fewer than 5", (done) => {
            chai.request('http://localhost:3000')
                 .post('/')
                 .set('content-type', 'application/json')
                 .send({
                    "user_id": 1234,
                    "title": "first Ticket",
                    "tags": ["tags3", "tag4", "tag5", "tag6", "tag7", "tagg8"]
                })
                 .end((err, res) => {
                     res.should.have.status(422);
                     res.body.should.be.a('object');
                     done();
                  });
         });

    });
});