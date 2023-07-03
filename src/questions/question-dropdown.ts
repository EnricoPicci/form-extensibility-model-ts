import { QuestionBase, QuestionBaseOptions } from './question-base';

export type DropdownQuestionOptions<T> = QuestionBaseOptions<string> & {
  options?: { key: string; value: T }[];
};

export class DropdownQuestion<T> extends QuestionBase<string> {
  options: { key: string; value: T }[] = [];
  override controlType = 'dropdown';

  constructor(options: DropdownQuestionOptions<T>) {
    super(options);
    this.options = options.options || [];
  }
}
