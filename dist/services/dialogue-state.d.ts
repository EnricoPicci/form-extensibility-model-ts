import { DynamicFormLayout } from '../form/form';
export declare class DialogueState {
    dialogueName: string;
    dialoguePath: string;
    private _formValue$;
    formValue$: import("rxjs").Observable<any>;
    private _formLayout$;
    formLayout$: import("rxjs").Observable<DynamicFormLayout>;
    private _nextRoute$;
    nextRoute$: import("rxjs").Observable<string>;
    private _message$;
    message$: import("rxjs").Observable<string>;
    private _routeHistory;
    private _formValue;
    get formValue(): any;
    set formValue(value: any);
    mergeIntoFormValue(value: any): void;
    updateFormLayout(layout: DynamicFormLayout): void;
    nextRoute(route: string): void;
    previousRoute(): void;
    setMessage(message: string): void;
}
