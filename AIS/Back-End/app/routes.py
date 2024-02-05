from app import app
from flask import request, jsonify
import requests
import os
import json

@app.route('/get-herb-details', methods=['POST'])
def get_herb_details():
    # Assuming JSON data is sent in the request body
    data = request.json
    print("HERB DETAILS: ", data.get('herb_name'))
    # Process the data and return a response
    # Example response
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={os.environ.get('GEMINI_API_KEY')}"
    data = {
      "contents": [{
        "parts":[{
          "text": f"{data.get("herb_name")} herb its properties in JSON. Give columns as Herb Name, Benefits, Properties, Precautions"}]}]}
    
    response = requests.post(url, json=data)

    parsed_response = response.json()

    if "candidates" in parsed_response and len(parsed_response["candidates"]) > 0:
        candidate = parsed_response["candidates"][0]
        if "content" in candidate and "parts" in candidate["content"] and len(candidate["content"]["parts"]) > 0:
            text = candidate["content"]["parts"][0]["text"]
            return json.loads(text.replace("`", "").replace("JSON", "").replace("json",""))
    else:
        return "No text found in the response."
    
