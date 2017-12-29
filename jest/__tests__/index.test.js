import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Index from '../../web/pages';

configure({ adapter: new Adapter() });

const client = {
  query: jest.fn(() => Promise.resolve()),
  refetch: jest.fn(() => Promise.resolve()),
  watchQuery: (...request) => ({
    currentResult: () => client.query(...request),
    refetch: () => client.refetch(...request),
    subscribe: jest.fn(),
  }),
  mutate: jest.fn(() => Promise.resolve()),
  fetch: jest.fn(() => Promise.resolve()),
};

describe('index', () => {
  it('successfully render', () => {
    client.query.mockReturnValueOnce({ me: { id: '123', name: 'yutin' } });
    const component = shallow(<Index />, { context: client });
    expect(component).toMatchSnapshot();
  });
});
