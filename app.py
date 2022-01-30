import os
import csv
import random as rand
import feelings

from flask import Flask, jsonify
from flask import request

from flask_cors import CORS

app = Flask(__name__)
CORS(app)


temp = []
try:

    with open("feelings.csv", "r") as file:
        reader = csv.reader(file)
        for row in list(reader):
            temp.append(row)

except:

    pass


@app.route("/main", methods=["POST"])
def data():
    if request.method == "POST":
        # get data from post request
        data = request.form.to_dict(flat=False)

        # parse data into integers
        x = int(data["data1"][0])
        y = int(data["data2"][0])
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

    return {
        "slope": results[0],
        "message1": results[1],
        "message2": results[2],
        "dataList": temp,
    }


if __name__ == "__main__":

    app.run(debug=True)

# adds new data
