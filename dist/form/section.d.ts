import { DynamicFormElement, DynamicFormElementType } from './form';
import { SectionElement } from './form';
export declare class Section extends DynamicFormElement {
    name: string;
    elements: SectionElement[];
    componentType: DynamicFormElementType;
    constructor(options: {
        name: string;
        elements: SectionElement[];
        order: number;
    });
    getElementsOrdered(): SectionElement[];
}
