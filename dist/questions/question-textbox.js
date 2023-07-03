"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextboxQuestion = void 0;
const question_base_1 = require("./question-base");
class TextboxQuestion extends question_base_1.QuestionBase {
    constructor(options) {
        super(options);
        this.controlType = 'textbox';
        this.onBlurHandler = options.onBlurHandler;
    }
}
exports.TextboxQuestion = TextboxQuestion;
//# sourceMappingURL=question-textbox.js.map