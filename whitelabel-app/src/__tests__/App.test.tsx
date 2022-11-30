import 'react-native';
import React from 'react';
import {act} from 'react-test-renderer';
import {cleanup, render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {App} from '../App';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

afterEach(cleanup);
describe('<Root/>', () => {
  test('Renders correctly', async () => {
    const tree = render(
      <NavigationContainer>
        <App />
      </NavigationContainer>,
    );
    await act(() => expect(tree).toMatchSnapshot());
  });
});
