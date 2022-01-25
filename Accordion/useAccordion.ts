import { createContext, useState } from 'react'
import { useUnmountEffect } from '../hooks/useUnmountEffect'

type ExpandedIndex = number | Array<number>

export interface AccordionProps {
  allowMultiple?: boolean // if true multiple items can be expanded and hence it allows toggle, false by default
  expanded?: ExpandedIndex // if true all are expanded, false by default
  expandedIndex?: ExpandedIndex // the id or ids of AccordionItems that are currently active
  onChange?: () => void // The callback invoked when accordion items are expanded or collapsed.
}

/**
 * useAccordion hook provides all the state and focus management logic
 * for accordion items.
 */
export function useAccordion(props: AccordionProps) {
  const { allowMultiple, expanded, expandedIndex, onChange } = props
  //TODO add in some logic to validate props

  /**
   * This state manages the index of the focussed accordion toggle
   */
  const [focusedIndex, setFocusedIndex] = useState(-1)

  /**
   * Reset focused index when accordion unmounts
   * or descendants change
   */
  useUnmountEffect(() => {
    setFocusedIndex(-1)
  })

  /**
   * Hook that manages the controlled and un-controlled state
   * for the accordion.
   */

  return {
    focusedIndex,
    setFocusedIndex,
  }
}

export const AccordionContext = createContext({
  name: 'AccordionContext',
  errorMessage:
    'useAccordionContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<Accordion />`',
})

export interface AccordionItemProps {
  id: number // the item id (either passed or set by Accordion parent with index)
  isDisabled?: boolean // if true item is not clickable, false by default
  expanded?: boolean // if true body is expanded, false by default
}

////? Do I need a descendant context?
