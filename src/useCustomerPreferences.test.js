import { renderHook, act } from '@testing-library/react-hooks';
import useCustomerPreferences from './useCustomerPreferences';

test('initializes with given preferences', () => {
  const { result } = renderHook(() => useCustomerPreferences({ theme: 'dark' }));

  expect(result.current[0]).toEqual({ theme: 'dark' });
});

test('updates preferences', () => {
  const { result } = renderHook(() => useCustomerPreferences({ theme: 'dark' }));

  act(() => {
    result.current[1]('theme', 'light');
  });

  expect(result.current[0]).toEqual({ theme: 'light' });
});
