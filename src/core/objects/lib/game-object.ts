import * as THREE from 'three';
import { Component } from "..";
import { TypeOf, GameBehavior } from "../../models";

export class GameObject extends THREE.Object3D implements GameBehavior {
    private readonly components: Component[] = [];
    private readonly objects: THREE.Object3D[] = [];

    public start() {
        this.components.forEach(component => component.start());
    }

    public update() {
        this.components.forEach(component => component.update());
    }

    protected addComponent(component: Component): void {
        this.components.push(component);
    }

    public getComponent<T extends Component>(type: TypeOf<T>): T {
        for (const component of this.components) {
            if (component instanceof type) {
                return component;
            }
        }

        throw new Error(`Component of type ${type.name} does not exist on object ${this.name}`);
    }

    protected addObject<T extends THREE.Object3D>(object: T): void {
        this.objects.push(object);
        // this.attach(object);
    }

    public getObject<T extends THREE.Object3D>(type: TypeOf<T>): T {
        for (const object of this.objects) {
            if (object instanceof type) {
                return object;
            }
        }

        throw new Error(`Object of type ${type.name} does not exist on object ${this}`);
    }
}
