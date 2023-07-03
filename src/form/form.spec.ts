import { expect } from 'chai';
import { DynamicFormLayout } from './form';
import { Action } from '../actions/action';
import { TextboxQuestion } from '../questions/question-textbox';
import { DialogueState } from '../services/dialogue-state';

describe(`getAllQuestions`, () => {
    it(`should return all the questions in a form`, () => {
        const testForm = get_Test_Form_Layout();
        const result = testForm.getAllQuestions();
        expect(result.length).equal(1);
    });
});


export function get_Test_Form_Layout() {
    const formLayout = new DynamicFormLayout({
        title: 'Product Dialogue Form A',
    });

    formLayout.elements = [
        new TextboxQuestion({
            key: 'field-a-Product',
            label: 'Field-a-Product',
            value: '',
            required: true,
            order: 1,
        }),

        new Action({
            name: 'Next',
            function: getTestActionHandler(formLayout),
            order: 2,
        }),
    ];

    return formLayout;
}
function getTestActionHandler(formLayout: DynamicFormLayout) {
    // the test handler does nothing
    return (formValue: any, stateService: DialogueState, event: any) => {
        console.log(formValue, stateService, formLayout, event);
    };
}