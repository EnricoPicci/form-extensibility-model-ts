"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogueState = void 0;
const rxjs_1 = require("rxjs");
class DialogueState {
    constructor() {
        this.dialogueName = 'No name set';
        this.dialoguePath = 'No path set';
        this._formValue$ = new rxjs_1.ReplaySubject(1);
        this.formValue$ = this._formValue$.asObservable();
        this._formLayout$ = new rxjs_1.Subject();
        this.formLayout$ = this._formLayout$.asObservable();
        this._nextRoute$ = new rxjs_1.Subject();
        this.nextRoute$ = this._nextRoute$.asObservable();
        this._message$ = new rxjs_1.ReplaySubject(1);
        this.message$ = this._message$.asObservable();
        // _routeHistory is an array of strings representing the routes visited
        // the last element of the array is the current route
        this._routeHistory = [];
    }
    get formValue() {
        return this._formValue;
    }
    set formValue(value) {
        this._formValue = value;
        this._formValue$.next(this._formValue);
    }
    mergeIntoFormValue(value) {
        if (!this._formValue) {
            this._formValue = {};
        }
        this._formValue = Object.assign(Object.assign({}, this._formValue), value);
        this._formValue$.next(this._formValue);
    }
    updateFormLayout(layout) {
        this._formLayout$.next(layout);
    }
    nextRoute(route) {
        this._routeHistory.push(route);
        this._nextRoute$.next(this.dialoguePath + route);
    }
    previousRoute() {
        if (this._routeHistory.length < 2) {
            this._nextRoute$.next(this.dialoguePath);
            console.log('>>>>>>>>>>>>>>>> return');
            return;
        }
        this._routeHistory.pop();
        this._nextRoute$.next(this.dialoguePath + this._routeHistory[this._routeHistory.length - 1]);
    }
    setMessage(message) {
        this._message$.next(message);
    }
}
exports.DialogueState = DialogueState;
//# sourceMappingURL=dialogue-state.js.map