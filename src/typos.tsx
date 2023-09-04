export interface RootObject {
    difficulty: Difficulty;
    equipment: string;
    instructions: string;
    muscle: Muscle;
    name: string;
    type: Type;
}

export enum Difficulty {
    Beginner = "beginner",
    Intermediate = "intermediate",
}

export enum Muscle {
    Biceps = "biceps",
}

export enum Type {
    Strength = "strength",
}

export interface Api_fetchMuscle{
    name?: string;
    type?: string;
    muscle?: string;
    difficulty?: string;
}