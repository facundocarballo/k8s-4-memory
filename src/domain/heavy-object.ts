export class HeavyObject {
    private readonly SIZE = 1_000_000;

    private readonly bytes: Uint8Array;

    constructor() {
        this.bytes = new Uint8Array(this.SIZE);

        for (let i = 0; i < this.SIZE; i ++) {
            this.bytes[i] = i % 256;
        }
    }
}