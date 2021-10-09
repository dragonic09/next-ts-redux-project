import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Avatar from '../src/features/profiles/components/avatar';

xtest('Avatar changes the text after click', () => {
  // Render a checkbox with label in the document
  const avatar = shallow(<Avatar msg={'test'}/>);

  expect(avatar.text()).toEqual('Not Click');

  avatar.simulate('click');

  expect(avatar.text()).toEqual('Click');
});

test('renders correctly', () => {
    const tree = renderer
        .create(<Avatar msg={'test'}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});