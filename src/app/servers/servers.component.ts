import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = "null"
  serverName: string = ""
  username: string = "null"
  usernameUpdate: string = ""
  serverCreated: boolean = false
  isUsernameUpdated: boolean = false
  servers: string[] = ["Test Server", "Test Server 2"]
  buttonLog = []
  buttonPresses: number = 0
  buttonDisplay: boolean = true

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit(): void {
  }
  onCreateServer(): void {
    this.serverCreationStatus = this.serverName + `.`;
    this.serverCreated = true;
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event: any): void {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  onUpdateUsername(event: any): void {
    this.usernameUpdate = (<HTMLInputElement>event.target).value
  }

  onDisplayUsername() {
    this.username = `This is the new username:` + this.usernameUpdate;
    this.isUsernameUpdated = true
  }

  resetUsername() {
    this.usernameUpdate = ""
  }

  changeButtonDetails() {
    this.buttonLog.push(new Date())
    this.buttonPresses++
    if (this.buttonDisplay === true) {
      this.buttonDisplay = false
    } else {
      this.buttonDisplay = true
    }
    console.log(this.buttonLog)
  }
}