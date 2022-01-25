import { forwardRef, useMemo } from 'react'
import { useAccordion, AccordionContext } from './useAccordion'
/*
 * Wraps the contents of the Accordion
 * Provides context to contents of Accordion
 */

export type AccordionProps = {
  expanded?: boolean // if true all are expanded, false by default
  expandedIndex?: number | Array<number> // the id or ids of AccordionItems that are currently active
  allowMultiple?: number // if true multiple items can be expanded and hence it allows toggle, false by default
  onChange?: () => void // on state changes return back active AccordionItem props
}

// useAccordion

export const Accordion = forwardRef<AccordionProps, 'div'>(
  ({ children, ...props }, ref) => {
    const { ...context } = useAccordion(props)

    const ctx = useMemo(() => ({ ...context }), [context])

    return (
      <AccordionContext.Provider value={ctx}>
        {children}
      </AccordionContext.Provider>
    )
  }
)
