import telegram
import telegram.ext
import datetime
import time
import random


class Message:
    pass

# TODO
# message
# chat

class Bot:
    def __init__(self, token:str):
        self.token = token
        self.bot = telegram.Bot(token)
        self.updater = telegram.ext.Updater(self.token)
        self.dp = self.updater.dispatcher

    def send(self, message:str, chats:list=[]):
        not_founded = []
        if type(chats) != list:
            chats = [chats]
        for chat in chats:
            try:
                self.bot.send_message(chat, message,
                                      parse_mode=telegram.ParseMode.MARKDOWN)
            except telegram.error.BadRequest:
                not_founded.append(chat)
        return not_founded
    
    def job(self, seconds:int):
        def decorator(f):
            self.updater.job_queue.run_repeating(f, seconds)
            return f
        return decorator

    def hourly(self, hours:int):
        def decorator(f):
            self.updater.job_queue.run_repeating(f, hours * 3600)
            return f
        return decorator

    def daily(self, days:int=1, in_time:str="12:00"):
        def decorator(f):
            now = datetime.datetime.now().time().strftime("%H:%M.%S")
            stamp_now = datetime.datetime.strptime(now, "%H:%M.%S")

            stamp_in_time = datetime.datetime.strptime(in_time, "%H:%M")

            stamp_res = stamp_in_time - stamp_now
            seconds_delay = stamp_res.total_seconds()

            if seconds_delay < 0:
                seconds_delay = 86400 + seconds_delay

            self.updater.job_queue.run_repeating(f, days * 86400, first=seconds_delay)
            return f
        return decorator

    def command(self, rule:str="start"):
        def decorator(f):
            self.meta_wait(f, rule)
            return f
        return decorator

    def meta_wait(self, func, *args):
        for arg in args:
            self.dp.add_handler(telegram.ext.CommandHandler(arg, func))

    def run(self):
        self.updater.start_polling()
        self.updater.idle()
