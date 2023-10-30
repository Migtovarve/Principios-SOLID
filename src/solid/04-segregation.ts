

interface Bird {
    eat(): void;
}

interface RunningBird {
    run(): void;
}

interface SwimmergBird {
    swim(): void;
}

interface FlyingBird {
    fly(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
}

class Humminbird implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
}

class Ostrich implements Bird, RunningBird {
    public eat() {}
    public run() {}
}