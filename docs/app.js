hljs.initHighlightingOnLoad();
let app = new Vue({
    el: '#app',
    data: {
        selected: "",
        dark: false,
        templates: [
            {
                id: 0,
                title: "Get chat id",
                code: `import Bot from botinsec

TOKEN = '842641769:AAHr_FoFEIwfpybFasA2RjPR4U1jJipjE0J'
CHAT_IDS = []

my_bot = Bot(TOKEN)


@my_bot.command("myId")
def chat_id(reply, **event):
    reply('Your chat id {}'.format(event.chat.id))
    
my_bot.run()`
            },
            {
                id: 1,
                title: "Hourly work",
                code: `import Bot from botinsec

TOKEN = '842641769:AAHr_FoFEIwfpybFasA2RjPR4U1jJipjE0J'
CHAT_IDS = []

my_bot = Bot(TOKEN)


@my_bot.job_hour(1)
def hourly(send):
    send('Another hour skipped', CHAT_IDS)
    
my_bot.run()`
            },
            {
                id: 2,
                title: "Commands",
                code: `import Bot from botinsec

TOKEN = '842641769:AAHr_FoFEIwfpybFasA2RjPR4U1jJipjE0J'
CHAT_IDS = []

my_bot = Bot(TOKEN)


@my_bot.command("start")
def add_user(reply, **event):
    CHAT_IDS.append(event.chat.id)
    reply('Wellcome')

@my_bot.command("stop")
def remove_user(reply, **event):
    CHAT_IDS.remove(event.chat.id)
    reply('Bye')
    
my_bot.run()`
            },
            {
                id: 3,
                title: "In time",
                code: `import Bot from botinsec

TOKEN = '842641769:AAHr_FoFEIwfpybFasA2RjPR4U1jJipjE0J'

my_bot = Bot(TOKEN)
CHAT_IDS = []


@my_bot.job_day(in_time="14:00")
def work_time(send, **event):
    send('Time to work', CHAT_IDS)

@my_bot.job_day(in_time="18:00")
def home_time(send, **event):
    send('Time to go home', CHAT_IDS)
    
my_bot.run()`
            },
            {
                id: 4,
                title: "API Helper",
                code: `import Bot from botinsec
import requests

TOKEN = '842641769:AAHr_FoFEIwfpybFasA2RjPR4U1jJipjE0J'

my_bot = Bot(TOKEN)


@my_bot.command("get")
def add_user(reply, **event):
    r = requests.get('https://httpbin.org/get')
    reply(r.text)
    
my_bot.run()`
            },
            {
                id: 5,
                title: "Text answer",
                code: `import Bot from botinsec

TOKEN = '842641769:AAHr_FoFEIwfpybFasA2RjPR4U1jJipjE0J'

my_bot = Bot(TOKEN)


@my_bot.answer()
def answer(username, text, reply, **event):
    with open('inbox.txt', 'a') as file:
        file.write('\n{}: {}'.format(username, text))
    reply('Hi, {}. Managers contact you soon'.format(username))
    
my_bot.run()`
            }
        ]
    }
})