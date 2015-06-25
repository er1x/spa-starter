'use strict';

import React from 'react/addons';
import Timer from '../../app/components/timer/index.jsx';

const TestUtils = React.addons.TestUtils;

describe('Timer Component', function() {
  it('should have a timer on his state', function() {
    let component = TestUtils.renderIntoDocument(<Timer />);
    expect(component).to.exist;
    expect(component.state.timer).to.be.instanceOf(Date);
  });
});
