hljs.initHighlightingOnLoad();
let app = new Vue({
    el: '#app',
    data: {
        selected: "",
        dark: false,
        templates: [
            {
                id: 0,
                title: "Hourly work",
                code: `import Bot from botinsec

TOKEN = '842641769:AAHr_FoFEIwfpybFasA2RjPR4U1jJipjE0J'
CHAT_IDS = []

my_bot = Bot(TOKEN)


@my_bot.job_hour(1)
def hourly(send):
    send('Another hour skipped', chat_ids)`
            },
            {
                id: 1,
                title: "Commands",
                code: `import Bot from botinsec

TOKEN = '842641769:AAHr_FoFEIwfpybFasA2RjPR4U1jJipjE0J'
CHAT_IDS = []

my_bot = Bot(TOKEN)


@my_bot.wait_command("start")
def add_user(reply, **advanced):
    CHAT_IDS.append(advanced.chat_id)
    reply('Wellcome.')

@my_bot.wait_command("stop")
def remove_user(reply, **advanced):
    CHAT_IDS.remove(advanced.chat_id)
    reply('Bye.')`
            },
            {
                id: 2,
                title: "In time",
                code: `import Bot from botinsec

TOKEN = '842641769:AAHr_FoFEIwfpybFasA2RjPR4U1jJipjE0J'

my_bot = Bot(TOKEN)
CHAT_IDS = []


@my_bot.job_day(in_time="14:00")
def work_time(send, **advanced):
    send('Time to work.')

@my_bot.job_day(in_time="18:00")
def home_time(send, **advanced):
    send('Time to go home.')`
            },
            {
                id: 3,
                title: "API Helper",
                code: `import Bot from botinsec
import requests

TOKEN = '842641769:AAHr_FoFEIwfpybFasA2RjPR4U1jJipjE0J'

my_bot = Bot(TOKEN)


@my_bot.wait_command("get")
def add_user(reply, **advanced):
    r = requests.get('https://httpbin.org/get')
    reply(r.text)`
            }
        ]
    }
})