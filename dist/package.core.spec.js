"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const package_core_1 = require("./package-core");
describe(`functionFromPackage`, () => {
    it(`should return a string`, () => {
        const result = (0, package_core_1.functionFromPackage)();
        (0, chai_1.expect)(typeof result).equal(`string`);
    });
});
//# sourceMappingURL=package.core.spec.js.map