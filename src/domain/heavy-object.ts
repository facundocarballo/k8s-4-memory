export class HeavyObject {
    constructor(
        private readonly bytes = new Uint8Array(1_000_000) // 1 MB
    ) {}
}