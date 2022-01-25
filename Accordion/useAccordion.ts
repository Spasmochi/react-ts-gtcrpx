import { createContext } from 'react'

type ExpandedIndex = number | Array<number>

export interface AccordionProps {
  allowMultiple?: boolean // if true multiple items can be expanded and hence it allows toggle, false by default
  expanded?: ExpandedIndex // if true all are expanded, false by default
  expandedIndex?: ExpandedIndex // the id or ids of AccordionItems that are currently active
  onChange?: () => void
}

/**
 * useAccordion hook provides all the state and focus management logic
 * for accordion items.
 */
export function useAccordion(props: AccordionProps) {
  const { allowMultiple, expanded, expandedIndex, onChange } = props
  //TODO add in some logic to validate props

  ////? Do I need a descendant context?
}

export const [AccordionProvider, useAccordionContext] = createContext({
  name: 'AccordionContext',
  errorMessage:
    'useAccordionContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<Accordion />`',
})

export interface AccordionItemProps {
  id: number // the item id (either passed or set by Accordion parent with index)
  isDisabled?: boolean // if true item is not clickable, false by default
  expanded?: boolean // if true body is expanded, false by default
}
