// holds all types for typescript

export enum Alignment {
    LEFT = 'left',
    RIGHT = 'right'
}

export interface WordSwitcherType {
    words: Array<string>,
    colour?: string
    autoplay?: boolean,
    interval?: number
}

export interface PaneType{
    isOpen: boolean,
    width: number
}

export interface HeroType{
    backgroundImage?: string,
    colour?: string,
    fade?: boolean,
}

export interface SectionType{
    backgroundImage?: string,
    colour?: string,
    align?: Alignment
}

export interface ProejctType{
    image?: string;
    colour?: string,
}