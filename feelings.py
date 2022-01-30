import numpy as np
import matplotlib
import os
import math
import csv
from matplotlib import pyplot as plt
import random

# print("this works")
# plt.plot([0, 1, 2, 3, 4, 5], [0, 1, 4, 9, 16, 25])  # we could use this method
# plt.show()

# csv reading
days = []
# print(days)
feelings = []
# print(spending)


faces = [0, 0, 0, 0, 0]
total = 0
with open(r"input.csv", "r") as file:
    reader = csv.reader(file)
    for i in reader:
        days.append(int(i[0]) * 1.0)
        feelings.append(int(i[1]) * 1.0)
        feeling = int(i[1])
        faces[math.ceil(feeling / 20 - 1)] += 1
        total += feeling
    average = total / len(days)

#
x = np.array(days)
y = np.array(spending)
slope, b = np.polyfit(x, y, 1)

if slope < 0:
    formatted_slope = "{:.2f}".format(slope * -1)
else:
    formatted_slope = "{:.2f}".format(slope)
# slope is (yf-yo)/(xf-xo)

print(
    "Your average happiness over the past {} days has been {}.".format(
        len(days), average
    )
)
if slope > 0:
    print(
        "You've gotten happier by about {} over the past {} days.".format(
            formatted_slope, len(days)
        )
    )
    print("Keep it up!")
elif slope < 0:
    print(
        "You've gotten sadder by about {} over the past {} days.".format(
            formatted_slope, len(days)
        )
    )
    if average < 0:
        print(
            "Try identifying and eliminating sources of stress or reaching out to friends and family"
        )
        rand = random.randint(0, 30000)
        if rand == 0:
            print(r"https://www.youtube.com/watch?v=l60MnDJklnM")
        elif rand == 1:
            print(
                r"https://media.discordapp.net/attachments/937017934948212809/937227444656685096/unknown.png?width=476&height=604"
            )
        elif rand == 2:
            print(
                r"https://www.theonion.com/how-to-manage-depression-with-tv-and-alcohol-1826797374"
            )
        elif rand < 10000:
            print(
                "Try moving around! You could do yoga, a light workout, or even go on a walk to release endorphins and get your mind off things."
            )
        elif rand < 20000:
            print(
                "Try going outside! Sunlight helps increase serotonin levels and boosts your vitamin D levels. Fresh air nice too!"
            )
        else:
            print(
                "Try reaching out to friends or family! Maybe even reconnect with an old friend you haven't spoken to in a while."
            )
else:
    print("Your happiness has stayed about the same.")
