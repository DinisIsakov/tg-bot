import { Context } from 'telegraf';

export interface SessionData {
    study: boolean;
    busy: boolean;
}
export interface IBotContext extends Context {
    session: SessionData;
}
