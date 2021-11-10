import { useState, useMemo } from 'react';

/**
 * A hook that forces a render in a component.
 */
export const useRender: UseRenderHook = () => {
  const [, setKey] = useState<symbol>(Symbol(0));

  return useMemo<UseRender>(
    () => ({
      forceRender: () => setKey(Symbol(0)),
    }),
    [],
  );
};

export interface UseRender {
  /**
   * `forceRender` - Function that triggers a render.
   */
  forceRender: () => void;
}

type UseRenderHook = () => UseRender;
