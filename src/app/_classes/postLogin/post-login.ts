import { Router } from "@angular/router";

export class PostLogin {
    protected user : any;
    constructor(router: Router){
        this.user = localStorage.getItem("UserData");
        if(!this.user){
            let currentNavigation = router.url;
            router.navigate(['login', currentNavigation]);
        }
    }
}
