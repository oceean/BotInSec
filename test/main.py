from botinsec import Bot

BOTKEY = ""
with open("botkey.txt") as file:
    BOTKEY = file.read()
    BOTKEY = BOTKEY.strip()
b = Bot(BOTKEY)

b.command("start")
def mainaction(reply):
    try:
        print("Hi")
        reply("Hi")
    except Exception as e:
        print(e)

print("live")
b.run()
print("die")