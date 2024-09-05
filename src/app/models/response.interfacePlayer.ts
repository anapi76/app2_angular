export interface ResponsePlayer {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id: number;
    first_name: string;
    height_feet: null|number;
    height_inches: null|number;
    last_name: string;
    position: string;
    team: Team;
    weight_pounds: null|number;
}

export interface Team {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
}

export interface Meta {
    current_page: number;
    next_page: null|number;
    per_page: number;
}

