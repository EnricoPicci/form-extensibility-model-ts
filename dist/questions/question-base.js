"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionBase = void 0;
const form_1 = require("../form");
class QuestionBase extends form_1.DynamicFormElement {
    constructor(options = { key: '' }) {
        super();
        this.componentType = 'Question';
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = options.required;
        this.enabled = options.enabled;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.onChangeHandler = options.onChangeHandler;
    }
}
exports.QuestionBase = QuestionBase;
//# sourceMappingURL=question-base.js.map