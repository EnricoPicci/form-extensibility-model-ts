"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
const form_1 = require("../form");
class Action extends form_1.DynamicFormElement {
    constructor(options) {
        super();
        this.componentType = 'Action';
        this.name = options.name || '';
        this.function = options.function;
        this.order = options.order === undefined ? 1 : options.order;
        if (!options.id) {
            this.id = options.name;
        }
    }
}
exports.Action = Action;
//# sourceMappingURL=action.js.map