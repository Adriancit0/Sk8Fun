const { getAll, createSchool } = require('./schoolControllers');
const School = require('../model/schoolModel');

jest.mock('../model/schoolmodel.js');

describe('schoolController', () => {
  describe('Given a getAll function', () => {
    describe('When is invoked', () => {
      let req;
      let res;
      describe('And there is not error', () => {
        beforeEach(async () => {
          req = {
            query: null
          };
          res = {
            json: jest.fn()
          };
          await getAll(req, res);
        });
        test('Then call heroFind', () => {
          expect(School.find).toHaveBeenCalled();
        });
        test('Then call res.json', () => {
          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            query: null
          };
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          School.find.mockRejectedValueOnce('find error');

          await getAll(req, res);
        });

        test('And there is an error', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with/find error/', () => {
          expect(res.send).toHaveBeenCalledWith('find error');
        });
      });
    });
  });
  describe('Given a createSchool function', () => {
    describe('When is invoked', () => {
      let req;
      let res;
      describe('And there is no error', () => {
        describe('And there is no error', () => {
          beforeEach(async () => {
            req = {
              query: {}
            };
            res = {
              json: jest.fn()
            };
            await createSchool(req, res);
          });
          test('The call res.json', () => {
            expect(res.json).toHaveBeenCalled();
          });
          test('Then call Trip.create', () => {
            expect(School.create).toHaveBeenCalled();
          });
        });
        describe('And there is an error', () => {
          beforeEach(async () => {
            req = {
              query: null
            };
            res = {
              json: jest.fn(),
              status: jest.fn(),
              send: jest.fn()
            };
            School.create.mockRejectedValueOnce('createTrip error');
            await createSchool(req, res);
          });
          test('The call res.status with 500', () => {
            expect(res.status).toHaveBeenCalledWith(500);
          });
          test('Then call res.send with createTrip error', () => {
            expect(res.send).toHaveBeenCalledWith('createTrip error');
          });
        });
      });
    });
  });
});
