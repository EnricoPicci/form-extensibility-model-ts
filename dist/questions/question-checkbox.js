"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxQuestion = void 0;
const question_base_1 = require("./question-base");
class CheckboxQuestion extends question_base_1.QuestionBase {
    constructor() {
        super(...arguments);
        this.controlType = 'checkbox';
        this.type = 'checkbox';
    }
}
exports.CheckboxQuestion = CheckboxQuestion;
//# sourceMappingURL=question-checkbox.js.map