from botinsec import Bot

BOTKEY = ""
with open("botkey.txt") as file:
    BOTKEY = file.read()
    BOTKEY = BOTKEY.strip()
b = Bot(BOTKEY)

b.command("start")
def mainaction(reply):
    reply("Hi")
