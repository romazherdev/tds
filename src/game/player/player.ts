import * as THREE from 'three';
import { PlayerCameraController } from "./player-camera-controller";
import { GameObject } from '../../core';
import { CharacterController } from './charecter-controller';

export class Player extends GameObject {
    constructor() {
        super();
    }

    public start(): void {
        // 1.1 Camera
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        this.addObject(camera);

        // 1.2 Camera controller
        const cameraController = new PlayerCameraController(this);
        this.addComponent(cameraController);

        // 2. Model
        const geometry = new THREE.SphereGeometry(5, 32, 16);
        const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
        const sphere = new THREE.Mesh(geometry, material);
        this.attach(sphere);

        // 3. Controller
        const characterController = new CharacterController(this);
        this.addComponent(characterController);

        // always at the end
        super.start();
    }

    public update(): void {
        super.update();
    }
}
