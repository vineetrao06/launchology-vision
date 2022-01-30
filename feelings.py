import numpy as np
import matplotlib
import os
import csv
from matplotlib import pyplot as plt

# print("this works")
# plt.plot([0, 1, 2, 3, 4, 5], [0, 1, 4, 9, 16, 25])  # we could use this method
# plt.show()

# csv reading
days = []
# print(days)
spending = []
# print(spending)


feelings = [0, 0, 0, 0, 0]
total = 0
with open(r"feelinput.csv", "r") as file:
    reader = csv.reader(file)
    for i in reader:
        days.append(int(i[0]) * 1.0)
        spending.append(int(i[1]) * 1.0)
        feeling = int(i[1])
        feelings[feeling+2] += 1
        total += feeling
    average = total / len(days)

x = np.array(days)
y = np.array(spending)
slope, b = np.polyfit(x, y, 1)

if slope < 0:
    formatted_slope = "{:.2f}".format(slope * -1)
else:
    formatted_slope = "{:.2f}".format(slope)
# slope is (yf-yo)/(xf-xo)

print ("Your average happiness over the past {} days has been {}.".format(len(days), average))
if slope > 0:
    print("You've gotten happier by about {} over the past {} days.".format(formatted_slope,len(days)))
    print("Keep it up!")
elif slope < 0:
    print("You've gotten sadder by about {} over the past {} days.".format(formatted_slope,len(days)))
    if average < 0:
        print("Try identifying and eliminating sources of stress or reaching out to friends and family")
    else:
        print("Try identifying and eliminating sources of stress.")


else:
    print("Your happiness has stayed about the same")