import { Component, OnInit } from "@angular/core";
import { ChatService } from "../services/chat.service";

@Component({
	selector: "app-chat-form",
	templateUrl: "./chat-form.component.html",
	styleUrls: ["./chat-form.component.scss"],
})
export class ChatFormComponent implements OnInit {
	message: string;
	toggled: boolean = false;

	constructor(private chat: ChatService) {}

	ngOnInit() {}

	send() {
		this.chat.sendMessage(this.message);
		this.message = "";
	}
	handleSelection(event) {
		this.message += event.char;
	}

	handleSubmit(event) {
		if (event.keyCode === 13) {
			this.send();
		}
	}
}
