const {
  getAll, createUser, deleteUser, updateUser, getUserData
} = require('./user.controllers');
const User = require('../model/userModel');

jest.mock('../model/userModel');

describe('userController', () => {
  describe('Given a getAll function', () => {
    describe('When is invoked', () => {
      let req;
      let res;
      describe('And there is not error', () => {
        beforeEach(async () => {
          req = {
            query: {}
          };
          res = {
            json: jest.fn()
          };
          await getAll(req, res);
        });
        test('Then call userFind', () => {
          expect(User.find).toHaveBeenCalled();
        });
        test('Then call res.json', () => {
          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            query: {}
          };
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          User.find.mockRejectedValueOnce('find error');

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
  describe('Given a create function', () => {
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
            await createUser(req, res);
          });
          test('The call res.json', () => {
            expect(res.json).toHaveBeenCalled();
          });
          test('Then call User.create', () => {
            expect(User.create).toHaveBeenCalled();
          });
        });
        describe('And there is an error', () => {
          beforeEach(async () => {
            req = {
              query: {}
            };
            res = {
              json: jest.fn(),
              status: jest.fn(),
              send: jest.fn()
            };
            User.create.mockRejectedValueOnce('createUser error');
            await createUser(req, res);
          });
          test('The call res.status with 500', () => {
            expect(res.status).toHaveBeenCalledWith(500);
          });
          test('Then call res.send with createTrip error', () => {
            expect(res.send).toHaveBeenCalledWith('createUser error');
          });
          describe('Given a \'deleteById\' function', () => {
            describe('When is invoked', () => {
              describe('And there is no errors', () => {
                beforeEach(async () => {
                  req = {
                    params: { userId: '' }
                  };

                  res = {
                    status: jest.fn(),
                    send: jest.fn()
                  };

                  await deleteUser(req, res);
                });

                test('Then call res.send once', () => {
                  expect(res.send).toHaveBeenCalled();
                });

                test('Then call res.status once', () => {
                  expect(res.status).toHaveBeenCalledWith(500);
                });

                test('Then call User.deleteByid', () => {
                  expect(User.findByIdAndDelete).toHaveBeenCalled();
                });
              });

              describe('And there is errors', () => {
                beforeEach(async () => {
                  req = {
                    params: { userId: '' }
                  };

                  res = {
                    status: jest.fn(),
                    send: jest.fn()
                  };

                  User.findByIdAndDelete.mockRejectedValueOnce('delete error');

                  await deleteUser(req, res);
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
          describe('Given a updateUser function', () => {
            describe('When is invoked', () => {
              describe('And there is no error', () => {
                beforeEach(async () => {
                  req = {
                    params: { userId: '' }
                  };
                  res = {
                    json: jest.fn()
                  };

                  await updateUser(req, res);
                });

                test('Then call res.json once', () => {
                  expect(res.json).toHaveBeenCalled();
                });

                test('Then call User.findById', () => {
                  expect(User.findByIdAndUpdate).toHaveBeenCalled();
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

                  User.findByIdAndUpdate.mockRejectedValueOnce('update error');

                  await updateUser(req, res);
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
  describe('Given a getUserData function', () => {
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

          await getUserData(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call School.findById', () => {
          expect(User.findById).toHaveBeenCalled();
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

          User.findById.mockRejectedValueOnce('find error');

          await getUserData(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with \'getUserData error\'', () => {
          expect(res.send).toHaveBeenCalledWith('find error');
        });
      });
    });
  });
});
