import { BehaviourHandler, DynamicFormElement, DynamicFormElementType } from '../form/form';
export declare class Action extends DynamicFormElement {
    name: string;
    function: BehaviourHandler;
    id: string | undefined;
    componentType: DynamicFormElementType;
    constructor(options: {
        name: string;
        function: BehaviourHandler;
        order: number;
        id?: string;
    });
}
