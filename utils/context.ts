import React from 'react';

export type CreateContextOptions<T> = {
  // the display name of the context
  name?: string;
  // if `true`, React will throw if context is `null` or `undefined`
  // to support nested context set it to `false`
  strict?: boolean;
  // custom error message to throw if the context is `undefined`
  errorMessage?: string;
  // initial context value
  value?: T | undefined;
};

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

/**
 * Creates a named context, provider, and hook.
 *
 * @usage
 *
 * export const [
 *   DropdownContextProvider,
 *   useDropdownContext,
 *   DropdownContext,
 * ] = createContext<DropdownContext>({
 *   string: false,
 *   name: "DropdownContext",
 *   error: "useDropdownContext: components must be wrapped within <DropdownContextProvider />",
 * });
 *
 * @param options create context options
 */
export function createContext<ContextType>(
  options: CreateContextOptions<ContextType> = {}
): CreateContextReturn<ContextType> {
  const {
    name,
    value,
    strict = true,
    errorMessage = `use${name}: 'context' is undefined. component must be wrap within the ${name}Provider`,
  } = options;

  const Context = React.createContext<ContextType | undefined>(value);
  Context.displayName = name;

  function useContext() {
    const context = React.useContext(Context);

    if (!context && strict) {
      const error = new Error(errorMessage);

      error.name = 'ContextError';
      Error.captureStackTrace?.(error, useContext);

      throw error;
    }

    return context;
  }

  return [
    Context.Provider,
    useContext,
    Context,
  ] as CreateContextReturn<ContextType>;
}
