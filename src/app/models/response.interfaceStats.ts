export interface ResponseStat {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id: number;
    ast: number | null;
    blk: number | null;
    dreb: number | null;
    fg3_pct: number | null;
    fg3a: number | null;
    fg3m: number | null;
    fg_pct: number | null;
    fga: number | null;
    fgm: number | null;
    ft_pct: number | null;
    fta: number | null;
    ftm: number | null;
    game: Game;
    min: null | string;
    oreb: number | null;
    pf: number | null;
    player: Player;
    pts: number | null;
    reb: number | null;
    stl: number | null;
    team: Team;
    turnover: number | null;
}

export interface Game {
    id: number;
    date: Date;
    home_team_id: number;
    home_team_score: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team_id: number;
    visitor_team_score: number;
}

export interface Player {
    id: number;
    first_name: string;
    height_feet: number;
    height_inches: number;
    last_name: string;
    position: string;
    team_id: number;
    weight_pounds: number;
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
    next_page: number;
    per_page: number;
}