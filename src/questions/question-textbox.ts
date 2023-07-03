import { QuestionBase, QuestionBaseOptions } from './question-base';
import { DialogueState } from '../services/dialogue-state';
import { BehaviourHandler } from '../form';

export type TextboxQuestionOptions = QuestionBaseOptions<string> & {
  onBlurHandler?: BehaviourHandler;
};

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';

  onBlurHandler?: BehaviourHandler;

  constructor(options: TextboxQuestionOptions) {
    super(options);
    this.onBlurHandler = options.onBlurHandler;
  }
}
