/**
 * @format
 */

import 'react-native';
import React from 'react';
import {act} from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import {App} from '../src/App';

// Note: test renderer must be required after react-native.

it('renders correctly', async () => {
  const tree = render(<App />);
  await act(async () => expect(tree).toMatchSnapshot());
});
