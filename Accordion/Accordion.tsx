/*
 * Wraps the contents of the Accordion
 * Provides context to contents of Accordion
 */

export type AccordionProps = {
  expanded?: boolean; // if true all are expanded, false by default
  expandedIndex?: number | Array<number>; // the id or ids of AccordionItems that are currently active
  allowMultiple?: number; // if true multiple items can be expanded and hence it allows toggle, false by default
  onChange?: () => void; // on state changes return back active AccordionItem props
};

