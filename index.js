import {Markup, Telegraf} from "telegraf";
import {config} from "./config.js";

const bot = new Telegraf(config.telegramToken, {})

bot.start((ctx) => {
    ctx.reply(
        'Привет!',
        Markup.keyboard([
            ['Кнопка 1', 'Кнопка 2'],
        ])
    );
});

bot.help((ctx) => ctx.reply('Вот что я умею:\n- Показывать кнопки'))

bot.hears('Кнопка 1', (ctx) => ctx.reply('Ты нажал на Кнопку 1'));
bot.hears('Кнопка 2', (ctx) => ctx.reply('Ты нажал на Кнопку 2'));

bot.launch()
    .then(() => console.log('Бот запущен!'))
    .catch((err) => console.error('Ошибка запуска:', err));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));