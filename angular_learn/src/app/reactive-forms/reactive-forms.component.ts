import { Component, OnInit, } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { usernameValidator } from './username.validators';

@Component({
  selector: 'reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  constructor() { }
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4), usernameValidator.cannotContainSpace], usernameValidator.is_unique),
    password: new FormControl('', Validators.required),
    details: new FormGroup({
      role: new FormControl(),
      techStack: new FormArray([])
    }),
    changepasswordform: new FormGroup({
      oldPassword: new FormControl('', [Validators.required, usernameValidator.oldmatch]),
      newPassword: new FormControl('', [Validators.required]),
      newPasswordConfirm: new FormControl('', [Validators.required])
    }),
  })



  AddTechStack(stack: HTMLInputElement) {
    (this.techStack as FormArray).push(new FormControl(stack.value));
    console.log(stack.value + "" + "Here ...");
    console.log(stack);
    stack.value = '';
  }

  removeStack(stack: any) {
    let index = this.techStack.controls.indexOf(stack);
    this.techStack.removeAt(index);
  }

  OnSubmit(f: any) {
    console.log("Submit goes here...");
    console.log(f);
    if (f.value?.changepasswordform?.['newPasswordConfirm'] == f.value?.changepasswordform?.['newPassword']) {
      console.log("password Updated.");
    }
    else {
      console.error("confrim Password doesn't match.");
    }
  }

  oldpassworddebug(oldPassword: any) {
    console.log(oldPassword)
  }

  get techStack() {
    return this.form.get('details.techStack') as FormArray;
  }

  get username() {
    //console.log(this.form.get('username'));
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
  get oldPassword() {
    return this.form.get('changepasswordform.oldPassword');
  }

  get newPassword() {
    return this.form.get('changepasswordform.newPassword');
  }

  get newPasswordConfirm() {
    return this.form.get('changepasswordform.newPasswordConfirm')
  }
}
