import { Action } from './actions/action';
import { QuestionBase } from './questions/question-base';
import { Section } from './section';
import { DialogueState } from './services/dialogue-state';

// ****************************************************
// ********  Form Types *******************************
// ****************************************************

export type DynamicFormElementType = 'Question' | 'Action' | 'Section';

export abstract class DynamicFormElement {
  componentType!: DynamicFormElementType;
  order!: number;
}

export type SectionElement = QuestionBase<any> | Action;

export type BehaviourHandler = (
  formValue: any,
  stateService: DialogueState,
  event?: any
) => void;

// ****************************************************
// ********  Form Layout ******************************
// ****************************************************

export class DynamicFormLayout {
  title: string;
  elements: DynamicFormElement[];

  constructor(options: { title: string; elements?: DynamicFormElement[] }) {
    this.title = options.title || '';
    this.elements = options.elements || [];
  }

  getAllQuestions() {
    const questions = this.elements.filter((x) =>
      objExtends(x, 'QuestionBase')
    ) as QuestionBase<any>[];
    const sections = this.elements.filter((x) =>
      objExtends(x, 'Section')
    ) as Section[];
    sections.forEach((section) => {
      const sectionQuestions = section.elements.filter((x) =>
        objExtends(x, 'QuestionBase')
      ) as QuestionBase<any>[];
      questions.push(...sectionQuestions);
    });

    return questions;
  }
  getUniqueQuestion(key: string) {
    const questions = this.getAllQuestions();
    const question = questions.filter((x) => x.key === key);
    if (question.length > 1) {
      throw new Error(
        `More than one question with key ${key} found \n ${JSON.stringify(
          question
        )}`
      );
    }
    if (question.length === 0) {
      throw new Error(`No question with key ${key} found`);
    }

    return question[0];
  }
  removeQuestion(question: QuestionBase<any>) {
    const index = this.elements.indexOf(question);
    if (index > -1) {
      this.elements.splice(index, 1);
      return;
    }

    const sections = this.elements.filter((x) =>
      objExtends(x, 'Section')
    ) as Section[];
    sections.forEach((section) => {
      const index = section.elements.indexOf(question);
      if (index > -1) {
        this.elements?.splice(index, 1);
        return;
      }
    });
  }

  getUniqueAction(id: string) {
    const actions = this.elements.filter((x) =>
      objExtends(x, 'Action')
    ) as Action[];
    const sections = this.elements.filter((x) =>
      objExtends(x, 'Section')
    ) as Section[];
    sections.forEach((section) => {
      const sectionActions = section.elements.filter((x) =>
        objExtends(x, 'Action')
      ) as Action[];
      actions.push(...sectionActions);
    });

    const action = actions.filter((x) => x.id === id);
    if (action.length > 1) {
      throw new Error(
        `More than one action with id ${id} found \n ${JSON.stringify(action)}`
      );
    }
    if (action.length === 0) {
      throw new Error(`No action with id ${id} found`);
    }

    return action[0];
  }
  removeAction(action: Action) {
    const index = this.elements.indexOf(action);
    if (index > -1) {
      this.elements.splice(index, 1);
      return;
    }

    const sections = this.elements.filter((x) =>
      objExtends(x, 'Section')
    ) as Section[];
    sections.forEach((section) => {
      const index = section.elements.indexOf(action);
      if (index > -1) {
        this.elements?.splice(index, 1);
        return;
      }
    });
  }

  getUniqueSection(name: string) {
    const sections = this.elements.filter((x) =>
      objExtends(x, 'Section')
    ) as Section[];
    const section = sections.filter((x) => x.name === name);
    if (section.length > 1) {
      throw new Error(
        `More than one section with name ${name} found \n ${JSON.stringify(
          section
        )}`
      );
    }
    if (section.length === 0) {
      throw new Error(`No section with name ${name} found`);
    }

    return section[0];
  }
  removeSection(section: Section) {
    const index = this.elements.indexOf(section);
    if (index > -1) {
      this.elements.splice(index, 1);
      return;
    }
  }

  getElementsOrdered() {
    return this.elements.sort((a, b) => a.order - b.order);
  }
}

function objExtends(obj: any, className: string) {
  let next = Object.getPrototypeOf(obj);

  while (next.constructor.name !== 'Object') {
    if (next.constructor.name === className) return true;
    next = Object.getPrototypeOf(next);
  }
  return false;
}
