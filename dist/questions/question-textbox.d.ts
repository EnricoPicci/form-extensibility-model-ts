import { QuestionBase, QuestionBaseOptions } from './question-base';
import { BehaviourHandler } from '../form/form';
export type TextboxQuestionOptions = QuestionBaseOptions<string> & {
    onBlurHandler?: BehaviourHandler;
};
export declare class TextboxQuestion extends QuestionBase<string> {
    controlType: string;
    onBlurHandler?: BehaviourHandler;
    constructor(options: TextboxQuestionOptions);
}
