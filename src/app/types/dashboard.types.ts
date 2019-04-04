
export class LangListInfoType {
    name: string;
    videos: VideoTypes[];
    totalTime?: string;
    count?: number;
}

export interface VideoTypes {
    title: string;
    time: string;
    blocks?: number;
}
