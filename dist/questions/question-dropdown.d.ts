import { QuestionBase, QuestionBaseOptions } from './question-base';
export type DropdownQuestionOptions<T> = QuestionBaseOptions<string> & {
    options?: {
        key: string;
        value: T;
    }[];
};
export declare class DropdownQuestion<T> extends QuestionBase<string> {
    options: {
        key: string;
        value: T;
    }[];
    controlType: string;
    constructor(options: DropdownQuestionOptions<T>);
}
