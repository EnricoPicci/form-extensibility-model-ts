"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
const form_1 = require("./form");
class Section extends form_1.DynamicFormElement {
    constructor(options) {
        super();
        this.componentType = 'Section';
        this.name = options.name || '';
        this.elements = options.elements || [];
        this.order = options.order === undefined ? 1 : options.order;
    }
    getElementsOrdered() {
        return this.elements.sort((a, b) => a.order - b.order);
    }
}
exports.Section = Section;
//# sourceMappingURL=section.js.map