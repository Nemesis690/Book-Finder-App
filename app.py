from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)
@app.route("/")
def home():
    return "Flask backend is running!"


@app.route("/search", methods=["GET"])
def search_books():
    query = request.args.get("q")
    if not query:
        return jsonify({"error": "Missing search query"}), 400

    response = requests.get("https://www.googleapis.com/books/v1/volumes", params={"q": query, "maxResults": 10})
    data = response.json()

    books = []
    for item in data.get("items", []):
        info = item.get("volumeInfo", {})
        books.append({
            "id": item.get("id"),
            "title": info.get("title"),
            "authors": info.get("authors", []),
            "description": info.get("description", ""),
            "thumbnail": info.get("imageLinks", {}).get("thumbnail", "")
        })
    print(books)
    return jsonify(books)

if __name__ == "__main__":
    app.run(debug=True)
