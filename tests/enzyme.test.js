import React from 'react';

class Label extends React.Component {
  render() {
    return 'Hello Jest!';
  }
}

test('render a label', () => {
  const wrapper = shallow(<Label />);
  expect(wrapper).toMatchSnapshot();
});
