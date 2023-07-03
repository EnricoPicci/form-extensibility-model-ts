"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_Test_Form_Layout = void 0;
const chai_1 = require("chai");
const form_1 = require("./form");
const action_1 = require("../actions/action");
const question_textbox_1 = require("../questions/question-textbox");
describe(`getAllQuestions`, () => {
    it(`should return all the questions in a form`, () => {
        const testForm = get_Test_Form_Layout();
        const result = testForm.getAllQuestions();
        (0, chai_1.expect)(result.length).equal(1);
    });
});
function get_Test_Form_Layout() {
    const formLayout = new form_1.DynamicFormLayout({
        title: 'Product Dialogue Form A',
    });
    formLayout.elements = [
        new question_textbox_1.TextboxQuestion({
            key: 'field-a-Product',
            label: 'Field-a-Product',
            value: '',
            required: true,
            order: 1,
        }),
        new action_1.Action({
            name: 'Next',
            function: getTestActionHandler(formLayout),
            order: 2,
        }),
    ];
    return formLayout;
}
exports.get_Test_Form_Layout = get_Test_Form_Layout;
function getTestActionHandler(formLayout) {
    // the test handler does nothing
    return (formValue, stateService, event) => {
        console.log(formValue, stateService, formLayout, event);
    };
}
//# sourceMappingURL=form.spec.js.map