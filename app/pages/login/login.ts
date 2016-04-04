import {Page, Platform} from 'ionic-angular';


@Page({
	templateUrl: './build/pages/login/login.html'
})
export class LoginPage {
	user: string = "login";
	isAndroid: boolean = false;

	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
	}
}