import { GameBehavior } from "../../models/lib/game-behavior";

export abstract class Component implements GameBehavior {
    public start(): void { };
    public update(): void { };
}
