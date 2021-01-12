import { ValidationErrors, ValidatorFn, AbstractControl, FormGroup, Form } from '@angular/forms';

export class CustomValidators {
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }

  static passwordMatchValidator(control: AbstractControl) 
  {
    const password: string = control.get('password')!.value;
    const confirmPassword: string = control.get('confirmPassword')!.value;
    if (password !== confirmPassword) 
    {
      control.get('confirmPassword')!.setErrors({ NoPasswordMatch: true });
    }
    const tranpassword: string = control.get('tranpassword')!.value;
    const tranconfirmPassword: string = control.get('tranconfirmPassword')!.value;
    if (tranpassword !== tranconfirmPassword) 
    {
      control.get('tranconfirmPassword')!.setErrors({ NotranPasswordMatch: true });
    }
  }

  // static tranpasswordMatchValidator(control: AbstractControl) 
  // {
  //   const tranpassword: string = control.get('tranpassword')!.value;
  //   const tranconfirmPassword: string = control.get('tranconfirmPassword')!.value;
  //   const confirmPassword2: string = control.get('confirmPassword')!.value;
  //   if (tranpassword !== tranconfirmPassword) 
  //   {
  //     control.get('tranconfirmPassword')!.setErrors({ NotranPasswordMatch: true });
  //   }
  // }
}