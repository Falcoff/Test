import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

  result : string;

  constructor(private auth:AuthService) { }

  ngOnInit() {

  }

  authGoogleDrive(){

    window.location.href= "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly&redirect_uri=http://localhost:8080/droovy/googledriveauth/callback&client_id=783584831345-rpngg6uic1i0iorvp2l5agc9ajmdm64v.apps.googleusercontent.com";

  //  window.location.href= "https://accounts.google.com/o/oauth2/v2/auth?response_type=token&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly&client_id=783584831345-rpngg6uic1i0iorvp2l5agc9ajmdm64v.apps.googleusercontent.com&access_type=online&redirect_uri=http://localhost:8080/droovy/googledriveauth/callback/";
  }

  authDropBox(){
    window.location.href= "https://www.dropbox.com/oauth2/authorize?response_type=code&client_id=i90y72ofs47u9b8&redirect_uri=http://localhost:8080/droovy/dropboxauth/callback";
  }

}
