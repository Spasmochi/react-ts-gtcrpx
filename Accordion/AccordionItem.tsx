/*
 * Contains each item in the Accordion
 * Provides context to the children of the item
 */

export type AccordionItemProps = {
  id: number; // the item id (either passed or set by Accordion parent with index)
  disabled?: boolean; // if true item is not clickable, false by default
  expanded?: boolean; // if true body is expanded, false by default
};
