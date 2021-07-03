/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ActivityDetail from './index';
import { render, screen, fireEvent } from '../../utils/utils';
import { getById, updateById } from '../../redux/actions/actionsCreators';

jest.mock('../../redux/actions/actionsCreators');

describe('Given activityDetails component', () => {
  test('Should render userDetail SUM', () => {
    updateById.mockReturnValueOnce({ type: '' });
    getById.mockReturnValueOnce({ type: '' });
    const props = {
      activity: {
        likes: 0,
        places: 2,
        price: {
          quantity: 5000
        }
      },
      index: 0
    };
    render(
      <MemoryRouter>
        <ActivityDetail
          {...props}
        />
      </MemoryRouter>,
      {
        initialState: {
          user: {
            user: {
              role: 'user',
              _id: 'id1'
            }
          },
          itemSelected: {
            _id: 'id',
            popularity: 5,
            activities: [
              { likes: 3, places: 3 },
              { likes: 3, places: 3 }
            ],
            createdBy: 'admin'
          }
        }
      }
    );
    const sumButton = screen.queryByTestId('sum-button');
    fireEvent.click(sumButton);
  });
  test('Should render userDetail SUBS', () => {
    updateById.mockReturnValueOnce({ type: '' });
    getById.mockReturnValueOnce({ type: '' });
    const props = {
      activity: {
        likes: 0,
        places: 2,
        price: {
          quantity: 5000
        }
      },
      index: 0
    };
    render(
      <MemoryRouter>
        <ActivityDetail
          {...props}
        />
      </MemoryRouter>,
      {
        initialState: {
          user: {
            user: {
              role: 'user',
              _id: 'id1'
            }
          },
          itemSelected: {
            _id: 'id',
            popularity: 5,
            activities: [
              { likes: 3, places: 3 },
              { likes: 3, places: 3 }
            ],
            createdBy: 'admin'
          }
        }
      }
    );
    const sumButton = screen.queryByTestId('sum-button');
    fireEvent.click(sumButton);
    const substractButton = screen.queryByTestId('subs-button');
    fireEvent.click(substractButton);
  });
  test('Should render userDetail INT', () => {
    updateById.mockReturnValueOnce({
      type: '',
      itemSelected: {
        _id: 'id',
        popularity: 6,
        activities: [
          { likes: 3, places: 3 },
          { likes: 3, places: 3 }
        ],
        createdBy: 'admin'
      }
    });
    getById.mockReturnValueOnce({ type: '' });
    const props = {
      activity: {
        likes: 0,
        places: 2,
        price: {
          quantity: 5000
        }
      },
      index: 0
    };
    render(
      <MemoryRouter>
        <ActivityDetail
          {...props}
        />
      </MemoryRouter>,
      {
        initialState: {
          user: {
            user: {
              role: 'user',
              _id: 'id1'
            }
          },
          itemSelected: {
            _id: 'id',
            popularity: 5,
            activities: [
              { likes: 3, places: 3 },
              { likes: 3, places: 3 }
            ],
            createdBy: 'admin'
          }
        }
      }
    );
    const interestedButton = screen.queryByTestId('interested-button');
    fireEvent.click(interestedButton);
    fireEvent.click(interestedButton);
  });
  test('Should render userDetail BOOK', () => {
    updateById.mockReturnValueOnce({ type: '' });
    getById.mockReturnValueOnce({ type: '' });
    const props = {
      activity: {
        likes: 0,
        places: 2,
        price: {
          quantity: 5000
        }
      },
      index: 0
    };
    render(
      <MemoryRouter>
        <ActivityDetail
          {...props}
        />
      </MemoryRouter>,
      {
        initialState: {
          user: {
            user: {
              role: 'user',
              _id: 'id1'
            }
          },
          itemSelected: {
            _id: 'id',
            popularity: 5,
            activities: [
              { likes: 3, places: 3 },
              { likes: 3, places: 3 }
            ],
            createdBy: 'admin'
          }
        }
      }
    );
    const bookingButton = screen.queryByTestId('booking-button');
    fireEvent.click(bookingButton);
  });
});

describe('Given activityDetails component', () => {
  test('Should render adminDetail', () => {
    updateById.mockReturnValueOnce({ type: '' });
    getById.mockReturnValueOnce({ type: '' });
    const props = {
      activity: {
        likes: 0
      }
    };
    render(
      <MemoryRouter>
        <ActivityDetail
          {...props}
        />
      </MemoryRouter>,
      {
        initialState: {
          user: {
            user: {
              role: 'school',
              _id: 'id'
            }
          },
          itemSelected: {
            _id: 'id',
            info: {
              createdBy: 'id'
            },
            activities: [{ likes: 0 }, { likes: 2 }]
          }
        }
      }
    );
    const deleteButton = screen.queryByTestId('delete-activity-button');
    fireEvent.click(deleteButton);
  });
});
