export interface Book {
    id: number;
    abbr: string;
    citeAbbr: string;
    fullName: string;
    numChapters: number;
    urlPath: string;
    parentBookId: number;
    webTitle: string;
    jstTitle: string;
    tocName: string;
    subdiv: string;
    backName: string;
    gridName: string;
    citeFull: string;
}

export interface Books {
    [key: string]: Book;
}

export interface Volume extends Book {
    minBookId: number;
    maxBookId: number;
    books: Book[];
}
