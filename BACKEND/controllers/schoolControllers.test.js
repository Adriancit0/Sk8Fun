const {
  getAll, createSchool, deleteSchool, updateSchool, getSchoolData
} = require('./schoolControllers');
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
          test('Then call School.create', () => {
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
            School.create.mockRejectedValueOnce('createSchool error');
            await createSchool(req, res);
          });
          test('The call res.status with 500', () => {
            expect(res.status).toHaveBeenCalledWith(500);
          });
          test('Then call res.send with createTrip error', () => {
            expect(res.send).toHaveBeenCalledWith('createSchool error');
          });
          describe('Given a \'deleteById\' function', () => {
            describe('When is invoked', () => {
              describe('And there is no errors', () => {
                beforeEach(async () => {
                  req = {
                    params: { schoolId: null }
                  };

                  res = {
                    status: jest.fn(),
                    send: jest.fn()
                  };

                  await deleteSchool(req, res);
                });

                test('Then call res.send once', () => {
                  expect(res.send).toHaveBeenCalled();
                });

                test('Then call res.status once', () => {
                  expect(res.status).toHaveBeenCalledWith(500);
                });

                test('Then call School.deleteByid', () => {
                  expect(School.findByIdAndDelete).toHaveBeenCalled();
                });
              });

              describe('And there is errors', () => {
                beforeEach(async () => {
                  req = {
                    params: { taskId: null }
                  };

                  res = {
                    status: jest.fn(),
                    send: jest.fn()
                  };

                  School.findByIdAndDelete.mockRejectedValueOnce('delete error');

                  await deleteSchool(req, res);
                });

                test('Then call res.status with 500', () => {
                  expect(res.status).toHaveBeenCalledWith(500);
                });

                test('Then call \'findByIdAndDelete error\'', () => {
                  expect(res.send).toHaveBeenCalledWith('delete error');
                });
              });
            });
          });
          describe('Given a updateSchool function', () => {
            describe('When is invoked', () => {
              describe('And there is no error', () => {
                beforeEach(async () => {
                  req = {
                    params: { userId: '' }
                  };
                  res = {
                    json: jest.fn()
                  };

                  await updateSchool(req, res);
                });

                test('Then call res.json once', () => {
                  expect(res.json).toHaveBeenCalled();
                });

                test('Then call User.findById', () => {
                  expect(School.findByIdAndUpdate).toHaveBeenCalled();
                });
              });

              describe('And there is an error', () => {
                beforeEach(async () => {
                  req = {
                    params: { userId: '' }
                  };
                  res = {
                    json: jest.fn(),
                    status: jest.fn(),
                    send: jest.fn()
                  };

                  School.findByIdAndUpdate.mockRejectedValueOnce('update error');

                  await updateSchool(req, res);
                });

                test('Then call res.status with 500', () => {
                  expect(res.status).toHaveBeenCalledWith(500);
                });

                test('Then call res.send with \'update error\'', () => {
                  expect(res.send).toHaveBeenCalledWith('update error');
                });
              });
            });
          });
        });
      });
    });
  });
  describe('Given a getSchoolData function', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            params: { userId: '' }
          };
          res = {
            json: jest.fn()
          };

          await getSchoolData(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call School.findById', () => {
          expect(School.findById).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: { userId: '' }
          };
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          School.findById.mockRejectedValueOnce('find error');

          await getSchoolData(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with \'getSchoolData error\'', () => {
          expect(res.send).toHaveBeenCalledWith('find error');
        });
      });
    });
  });
});
