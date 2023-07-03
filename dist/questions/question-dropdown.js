"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownQuestion = void 0;
const question_base_1 = require("./question-base");
class DropdownQuestion extends question_base_1.QuestionBase {
    constructor(options) {
        super(options);
        this.options = [];
        this.controlType = 'dropdown';
        this.options = options.options || [];
    }
}
exports.DropdownQuestion = DropdownQuestion;
//# sourceMappingURL=question-dropdown.js.map