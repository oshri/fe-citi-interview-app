export interface Search {
    name: string;
    user: string;
}

export interface TechList {
    id: number;
    videos: Video[];
}

export interface Video {
    title: string;
    time: string;
    blocks?: number;
}

export interface User {
    id: number;
    name: string;
    playlistID: number;
}

export interface LangListInfo {
    name: string;
    videos: Video[];
    totalTime?: string;
    count?: number;
}

