import { Action } from '../actions/action';
import { QuestionBase } from '../questions/question-base';
import { Section } from './section';
import { DialogueState } from '../services/dialogue-state';
export type DynamicFormElementType = 'Question' | 'Action' | 'Section';
export declare abstract class DynamicFormElement {
    componentType: DynamicFormElementType;
    order: number;
}
export type SectionElement = QuestionBase<any> | Action;
export type BehaviourHandler = (formValue: any, stateService: DialogueState, event?: any) => void;
export declare class DynamicFormLayout {
    title: string;
    elements: DynamicFormElement[];
    constructor(options: {
        title: string;
        elements?: DynamicFormElement[];
    });
    getAllQuestions(): QuestionBase<any>[];
    getUniqueQuestion(key: string): QuestionBase<any>;
    removeQuestion(question: QuestionBase<any>): void;
    getUniqueAction(id: string): Action;
    removeAction(action: Action): void;
    getUniqueSection(name: string): Section;
    removeSection(section: Section): void;
    getElementsOrdered(): DynamicFormElement[];
}
