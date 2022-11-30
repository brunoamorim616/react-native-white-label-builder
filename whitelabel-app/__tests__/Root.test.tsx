import 'react-native';
import React from 'react';
import {act} from 'react-test-renderer';
import {cleanup, render} from '@testing-library/react-native';
import {Root} from '../Root';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

afterEach(cleanup);
describe('<Root/>', () => {
  test('Renders correctly', async () => {
    const tree = render(<Root />);
    await act(() => expect(tree).toMatchSnapshot('RootInitialRender'));
  });
});
