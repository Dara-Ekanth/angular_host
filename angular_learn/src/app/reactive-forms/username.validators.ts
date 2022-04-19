import { AbstractControl, ValidationErrors } from "@angular/forms";

export class usernameValidator{
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if ((control.value as string).includes(" ") ){
            return {cannotContainSpace: true};
        }
        return null;
    }

    static is_unique(control: AbstractControl): Promise <ValidationErrors | null>{
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if (control.value == 'dara'){
                    resolve({notunique:true});
                }
                else
                resolve(null);
            }, 2000);
        })
    }

    static oldmatch(control: AbstractControl){
        if (control.value != 'dara'){
            return {oldmatched: false};
        }
        return null;
    }
}