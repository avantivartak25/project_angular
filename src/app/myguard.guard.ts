import { inject } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { Router } from "@angular/router";

export const myActivator=()=>{
    const aser= inject(AuthService);
    const rt= inject (Router);
    if (aser.isAuthenticated())
        {
            return true;
        }
        else{
            rt.navigate(['/login'])
            return false;
        }
}