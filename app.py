import os
import csv
import random as rand
import json
import feelings

from flask import Flask, jsonify
from flask import request

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["CORS_HEADERS"] = "Content-Type"


temp = []
try:

    with open("feelings.csv", "r+") as file:
        reader = csv.reader(file)
        for row in list(reader):
            temp.append(row)

except:

    pass


@app.route("/main", methods=["POST", "GET"])
def data():
    if request.method == "POST":
        # get data from post request
        data = request.json

        # parse data into integers

        x = int(data["x"])

        y = int(data["y"])
        length = 0

        # pop until only 30 data points
        if len(temp) >= 30:
            for i in range(0, (len(temp) - 30) + 1):
                temp.pop(i)

        # append to array, then to csv
        temp.append([x, y])

        try:
            os.remove("feelings.csv")
            with open("feelings.csv", "a") as file:
                writer = csv.writer(file)
                for i in range(0, len(temp)):
                    writer.writerow(temp[i])

        except:

            pass
        results = feelings.findSlope()
        sadDays = 0
        neutralDays = 0
        slightlyHappyDays = 0
        happyDays = 0
        for i in range(0, len(temp)):
            if int(temp[i][1]) < 4:
                sadDays += 1
            elif int(temp[i][1]) < 6:
                neutralDays += 1
            elif int(temp[i][1]) < 8:
                slightlyHappyDays += 1
            elif int(temp[i][1]) <= 10:
                happyDays += 1

        response = jsonify(
            {
                "slope": results[0],
                "message1": results[1],
                "message2": results[2],
                "message3": results[3],
                "dataList": temp,
                "sadDays": str(sadDays),
                "happyDays": str(happyDays),
                "neutralDays": str(neutralDays),
                "slightlyHappyDays": str(slightlyHappyDays),
            }
        )

        response.headers.add("Access-Control-Allow-Origin", "*")
    if request.method == "GET":
        results = feelings.findSlope()
        sadDays = 0
        neutralDays = 0
        slightlyHappyDays = 0
        happyDays = 0
        for i in range(0, len(temp)):
            if int(temp[i][1]) < 4:
                sadDays += 1
            elif int(temp[i][1]) < 6:
                neutralDays += 1
            elif int(temp[i][1]) < 8:
                slightlyHappyDays += 1
            elif int(temp[i][1]) < 10:
                happyDays += 1

        response = jsonify(
            {
                "slope": results[0],
                "message1": results[1],
                "message2": results[2],
                "message3": results[3],
                "dataList": temp,
                "sadDays": str(sadDays),
                "happyDays": str(happyDays),
                "neutralDays": str(neutralDays),
                "slightlyHappyDays": str(slightlyHappyDays),
            }
        )

    return response


if __name__ == "__main__":

    app.run(debug=True)

# adds new data
