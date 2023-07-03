import { BehaviourHandler, DynamicFormElement, DynamicFormElementType } from '../form/form';
export type QuestionBaseOptions<T> = {
    value?: T;
    key: string;
    label?: string;
    required?: boolean | null | undefined;
    enabled?: boolean | null | undefined;
    order?: number;
    controlType?: string;
    type?: string;
    onChangeHandler?: BehaviourHandler;
};
export declare abstract class QuestionBase<T> extends DynamicFormElement {
    value: T | undefined;
    key: string;
    label: string;
    required: boolean | null | undefined;
    enabled: boolean | null | undefined;
    controlType: string;
    type: string;
    onChangeHandler?: BehaviourHandler;
    componentType: DynamicFormElementType;
    constructor(options?: QuestionBaseOptions<T>);
}
