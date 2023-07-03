import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<any> {
  override controlType = 'checkbox';
  override type = 'checkbox';
}
