import * as THREE from 'three';
import { Component } from '../../core';
import { Player } from "./player";

export class PlayerCameraController extends Component {
    private camera!: THREE.PerspectiveCamera;

    private get position(): THREE.Vector3 {
        const offset = new THREE.Vector3(0, 100, 25);
        const position = this.player.position.clone();

        return position.add(offset);
    }

    constructor(private readonly player: Player) {
        super();
    }

    public start(): void {
        this.camera = this.player.getObject(THREE.PerspectiveCamera);
        this.camera.position.copy(this.position);
        this.camera.lookAt(this.player.position);
    }

    public update(): void {
        this.camera.position.lerp(this.position, 0.05);
    }
}
