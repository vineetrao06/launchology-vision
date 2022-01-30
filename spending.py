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

with open(r"input.csv", "r") as file:
    reader = csv.reader(file)
    for i in reader:
        days.append(int(i[0]) * 1.0)
        spending.append(int(i[1]) * 1.0)
x = np.array(days)
y = np.array(spending)
slope, b = np.polyfit(x, y, 1)
print(slope)
if slope < 0:
    formatted_slope = "{:.2f}".format(slope * -1)
else:
    formatted_slope = "{:.2f}".format(slope)
# slope is (yf-yo)/(xf-xo)


if slope > 0:
    print(
        "Spending has increased by about $" + formatted_slope + " over the past",
        len(days),
        "days.",
    )
    print("Try to watch your spending!")
elif slope < 0:
    print(
        "Spending has decreased by about $" + (formatted_slope) + " over the past",
        len(days),
        "days.",
    )
else:
    print("Your spending was about the same over the past 30 days. ")


