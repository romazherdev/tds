import { Quaternion, Vector3 } from "three";
import { Component } from "../../core";
import { Player } from "./player";

export class CharacterController extends Component {
    private speed = 0.5;
    private state = {
        up: false,
        down: false,
        left: false,
        right: false,
    };

    constructor(private readonly player: Player) {
        super();
    }

    public start(): void {
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    public update(): void {
        if (this.state.left) {
            const offset = new Vector3(-this.speed, 0, 0);
            this.player.position.add(offset);
        }

        if (this.state.right) {
            const offset = new Vector3(this.speed, 0, 0);
            this.player.position.add(offset);
        }

        if (this.state.up) {
            const offset = new Vector3(0, 0, -this.speed);
            this.player.position.add(offset);
        }

        if (this.state.down) {
            const offset = new Vector3(0, 0, this.speed);
            this.player.position.add(offset);
        }
    }

    private onKeyDown(event: KeyboardEvent): void {
        switch (event.code) {
            case "KeyW":
                this.state.up = true;
                break;
            case "KeyS":
                this.state.down = true;
                break;
            case "KeyA":
                this.state.left = true;
                break;
            case "KeyD":
                this.state.right = true;
                break;
        }
    }

    private onKeyUp(event: KeyboardEvent): void {
        switch (event.code) {
            case "KeyW":
                this.state.up = false;
                break;
            case "KeyS":
                this.state.down = false;
                break;
            case "KeyA":
                this.state.left = false;
                break;
            case "KeyD":
                this.state.right = false;
                break;
        }
    }
}
