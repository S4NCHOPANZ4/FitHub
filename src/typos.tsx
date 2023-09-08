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



export interface RootObjectVideo {
    items:         Item[];
    kind:          string;
    nextPageToken: string;
    pageInfo:      PageInfo;
    regionCode:    string;
   }
   
   export interface Item {
    id:      ID;
    kind:    string;
    snippet: Snippet;
   }
   
   export interface ID {
    channelId?: string;
    kind:       string;
    videoId?:   string;
   }
   
   export interface Snippet {
    channelId:            string;
    channelTitle:         string;
    description:          string;
    liveBroadcastContent: string;
    publishTime:          Date;
    publishedAt:          Date;
    thumbnails:           Thumbnails;
    title:                string;
   }
   
   export interface Thumbnails {
    default: Default;
    high:    Default;
    medium:  Default;
   }
   
   export interface Default {
    height?: number;
    url:     string;
    width?:  number;
   }
   
   export interface PageInfo {
    resultsPerPage: number;
    totalResults:   number;
   }

//=================================================
export interface ObjectDailyCalories {
    data:           DataDailyCalories;
    request_result: string;
    status_code:    number;
   }
   
   export interface DataDailyCalories {
    BMR:   number;
    goals: Goals;
   }
   
   export interface Goals {
    "Extreme weight gain": WeightGain;
    "Extreme weight loss": WeightLoss;
    "Mild weight gain":    WeightGain;
    "Mild weight loss":    WeightLoss;
    "Weight gain":         WeightGain;
    "Weight loss":         WeightLoss;
    "maintain weight":     number;
   }
   
   export interface WeightGain {
    calory:        number;
    "gain weight": string;
   }
   
   export interface WeightLoss {
    calory:        number;
    "loss weight": string;
   }
   
   export interface Api_fetchDailyCal {
    age: number| string| null| undefined,
    gender: number| string| null | undefined,
    height: number| string| null | undefined,
    weight: number| string| null | undefined,
    activitylevel: number| string| null | undefined
  }
