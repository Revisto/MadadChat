
from flask import Flask
from flask import Flask, render_template, request


app=Flask (__name__,static_url_path="/static") # ,static_url_path="/assets"
@app.route("/")
def BotWeb():
    return open('index.html','r').read()

if __name__== '__main__':
    #app.send_static_file("index.html")
    app.run(debug=True,port=2222)