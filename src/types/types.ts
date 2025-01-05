

export type Repo = {
    id: number;
    name: string;
    description: string;
    language: string;
    html_url: string;
    updated_at?: string;
};

export type FilterProps = {
    repos: Repo[];
};

export type UserData = {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    type: string;
    bio?: string;
    blog?: string;
    location?: string;
    twitter_username?: string;
    email?: string;
};


export type User = {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    type: string;
};


export type UserFilterProps = {
    users: UserData[];
};