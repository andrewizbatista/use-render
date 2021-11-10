import { renderHook, act } from '@testing-library/react-hooks';
import { useRender } from '../src';

describe('useRender', () => {
  it('should call `forceRender` 1 time', () => {
    const { result } = renderHook(() => useRender());
    const { current } = result;

    const forceRenderSpy = jest.spyOn(current, 'forceRender');

    act(() => {
      current.forceRender();
    });

    expect(forceRenderSpy).toBeCalled();
  });

  it('should call `forceRender` 3 times', () => {
    const { result } = renderHook(() => useRender());
    const { current } = result;

    const forceRenderSpy = jest.spyOn(current, 'forceRender');

    act(() => {
      current.forceRender();
      current.forceRender();
      current.forceRender();
    });

    expect(forceRenderSpy).toBeCalledTimes(3);
  });
});
