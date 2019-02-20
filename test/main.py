from botinsec import Bot

BOTKEY = ""
with open("botkey.txt") as file:
    BOTKEY = file.read()
b = Bot(BOTKEY)

b.command("start")
def mainaction(reply):
    reply("Hi")
