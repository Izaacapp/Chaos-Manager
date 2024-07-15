import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index.js'; // Ensure your server is exported in index.js
const should = chai.should();

chai.use(chaiHttp);

describe('API Tests', () => {
  it('it should GET all the tabs', (done) => {
    chai.request(server)
        .get('/api/tabs')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
  });

  it('it should GET enhanced tabs', (done) => {
    chai.request(server)
        .get('/api/enhanced-tabs')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
  });
});
