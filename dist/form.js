"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicFormLayout = exports.DynamicFormElement = void 0;
class DynamicFormElement {
}
exports.DynamicFormElement = DynamicFormElement;
// ****************************************************
// ********  Form Layout ******************************
// ****************************************************
class DynamicFormLayout {
    constructor(options) {
        this.title = options.title || '';
        this.elements = options.elements || [];
    }
    getAllQuestions() {
        const questions = this.elements.filter((x) => objExtends(x, 'QuestionBase'));
        const sections = this.elements.filter((x) => objExtends(x, 'Section'));
        sections.forEach((section) => {
            const sectionQuestions = section.elements.filter((x) => objExtends(x, 'QuestionBase'));
            questions.push(...sectionQuestions);
        });
        return questions;
    }
    getUniqueQuestion(key) {
        const questions = this.getAllQuestions();
        const question = questions.filter((x) => x.key === key);
        if (question.length > 1) {
            throw new Error(`More than one question with key ${key} found \n ${JSON.stringify(question)}`);
        }
        if (question.length === 0) {
            throw new Error(`No question with key ${key} found`);
        }
        return question[0];
    }
    removeQuestion(question) {
        const index = this.elements.indexOf(question);
        if (index > -1) {
            this.elements.splice(index, 1);
            return;
        }
        const sections = this.elements.filter((x) => objExtends(x, 'Section'));
        sections.forEach((section) => {
            var _a;
            const index = section.elements.indexOf(question);
            if (index > -1) {
                (_a = this.elements) === null || _a === void 0 ? void 0 : _a.splice(index, 1);
                return;
            }
        });
    }
    getUniqueAction(id) {
        const actions = this.elements.filter((x) => objExtends(x, 'Action'));
        const sections = this.elements.filter((x) => objExtends(x, 'Section'));
        sections.forEach((section) => {
            const sectionActions = section.elements.filter((x) => objExtends(x, 'Action'));
            actions.push(...sectionActions);
        });
        const action = actions.filter((x) => x.id === id);
        if (action.length > 1) {
            throw new Error(`More than one action with id ${id} found \n ${JSON.stringify(action)}`);
        }
        if (action.length === 0) {
            throw new Error(`No action with id ${id} found`);
        }
        return action[0];
    }
    removeAction(action) {
        const index = this.elements.indexOf(action);
        if (index > -1) {
            this.elements.splice(index, 1);
            return;
        }
        const sections = this.elements.filter((x) => objExtends(x, 'Section'));
        sections.forEach((section) => {
            var _a;
            const index = section.elements.indexOf(action);
            if (index > -1) {
                (_a = this.elements) === null || _a === void 0 ? void 0 : _a.splice(index, 1);
                return;
            }
        });
    }
    getUniqueSection(name) {
        const sections = this.elements.filter((x) => objExtends(x, 'Section'));
        const section = sections.filter((x) => x.name === name);
        if (section.length > 1) {
            throw new Error(`More than one section with name ${name} found \n ${JSON.stringify(section)}`);
        }
        if (section.length === 0) {
            throw new Error(`No section with name ${name} found`);
        }
        return section[0];
    }
    removeSection(section) {
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
exports.DynamicFormLayout = DynamicFormLayout;
function objExtends(obj, className) {
    let next = Object.getPrototypeOf(obj);
    while (next.constructor.name !== 'Object') {
        if (next.constructor.name === className)
            return true;
        next = Object.getPrototypeOf(next);
    }
    return false;
}
//# sourceMappingURL=form.js.map