import {Pipe, PipeTransform} from "@angular/core";
import {AbstractControl, FormArray, FormControl, FormGroup} from "@angular/forms";

export abstract class BaseFormPipe<T extends AbstractControl> implements PipeTransform {
    transform(value: FormGroup, controlName: string, nestedControlName?: string): T {
        return get<T>(value, controlName, nestedControlName)
    }
}

@Pipe({name: 'fc'})
export class FormControlPipe extends BaseFormPipe<FormControl> {
}

@Pipe({name: 'fg'})
export class FormGroupPipe extends BaseFormPipe<FormGroup> {
}

@Pipe({name: 'fa'})
export class FormArrayPipe extends BaseFormPipe<FormArray> {
}

function get<T extends AbstractControl>(value: FormGroup, controlName: string, nestedControlName?: string): T {
    const control = value.get(controlName) as T;
    return nestedControlName ? control.get(nestedControlName) as T : control;
}
