import { DynamicFormElement, DynamicFormElementType } from './form';
import { SectionElement } from './form';

export class Section extends DynamicFormElement {
  name: string;
  elements: SectionElement[];

  override componentType: DynamicFormElementType = 'Section';

  constructor(options: {
    name: string;
    elements: SectionElement[];
    order: number;
  }) {
    super();
    this.name = options.name || '';
    this.elements = options.elements || [];
    this.order = options.order === undefined ? 1 : options.order;
  }

  getElementsOrdered() {
    return this.elements.sort((a, b) => a.order - b.order);
  }
}
