from flask import Flask

# setting up the app
app = Flask("__name__")

@app.route('/SendData', methods= ['POST'])
def index():
    if Flask.request.method == "POST":
        return


# main function
if __name__ == "main":
    app.run(debug=True)
