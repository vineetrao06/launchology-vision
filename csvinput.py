import os
import csv
import random as rand

# adds new data
inputXY = []
for i in range(0, 1000):
    inputXY.append((i, rand.randint(40, 10000)))

prev = []
try:
    with open(r"input.csv", "r") as file:
        reader = csv.reader(file)
        for i in reader:
            prev.append(i)
    os.remove(r"input.csv")
except:
    pass

for i in prev:
    temp = (i[0], i[1])
    inputXY.append(temp)
if len(inputXY) > 60:
    while len(inputXY) > 30:
        inputXY.pop(0)

with open(r"input.csv", "x") as file:
    writer = csv.writer(file)
    print(writer)
    for (x, y) in inputXY:
        writer.writerow((x, y))
