import os
import csv
import random as rand

from flask import Flask, jsonify
from flask import request

app = Flask(__name__)


inputXY = []
prev = []


@app.route("/main", methods=["POST"])
def data():
    if request.method == "POST":
        # get data from post request
        data = request.form.to_dict(flat=False)

        # parse data into integers
        x = int(data["data1"][0])
        y = int(data["data2"][0])
        length = 0

        # append to csv
        try:
            
            with open("feelings.csv", "a") as file:

                writer = csv.writer(file)
                writer.writerow([x, y])

        except:

            pass

    return "success"


if __name__ == "__main__":
    app.run(debug=True)

# adds new data
