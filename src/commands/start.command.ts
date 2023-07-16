import { Markup, Telegraf } from 'telegraf';
import { IBotContext } from '../context/context.interface';
import { Command } from './command.class';

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
    }

    handle(): void {
        this.bot.start((ctx) => {
            ctx.reply(
                'Did you learn nodejs today?',
                Markup.inlineKeyboard([
                    Markup.button.callback('Yes', 'nodejs_yes'),
                    Markup.button.callback('No', 'nodejs_no'),
                ])
            );
        });

        this.bot.action('nodejs_yes', (ctx) => {
            ctx.session.study = true;

            ctx.editMessageText('Well done');
        });

        this.bot.action('nodejs_no', (ctx) => {
            ctx.session.study = false;
            ctx.editMessageText('Bad news');
        });
    }
}
