#!/usr/bin/python
#backend stuff

import psycopg2 # for postgres
import sys
import requests
import json
import pdb
import os
import urllib
import re
import time
import xmltodict
import csv
# import nltk #natural language p

from urllib.request import urlopen
from urllin.error import URLError, HTTPError

from flask import Flask, request, redirect, url_for, send_from_directory, json, jsonify

from twilio.rest import TwilioRestClient
from twilio.rest.exceptions import TwilioRestException

from googleapiclient.discovery import build
from __future__ import print_function



# app = Flask(__name__)
# app.debug = True
# port = int(os.environ.get('PORT', 7000))
# con = None

# try:
	     
# 	con = psycopg2.connect(database='slash', user='postgres') 
# 	cur = con.cursor()
# 	cur.execute('SELECT version()')          
# 	ver = cur.fetchone()

# 	client = TwilioRestClient(account_sid, auth_token)

@app.route('/')


def root():
	return app.send_static_file('index.html')


@app.route('/<path:path>')
def static_proxy(path):
  # send_static_file will guess the correct MIME type
  return app.send_static_file(path)

@app.route('/login', methods=['POST'])
def hello():

    post = request.get_json()
    username=post.get('username')
    password=post.get('password')
    # name = first_name + last_name
    # query = "INSERT INTO one(name, email, card, pin) VALUES('%s','%s','%s','%s')"%(check)
    # cur.execute(query)
    # con.commit()
    return (username)

@app.route('/location', methods=['POST'])
def location():
	post = request.get_json()
	location = post.get('location')

	return (location)




@app.route('/chat/text/<keyword>') #for getting GFYCAT mp4 URL

def api_article(keyword):

	URL       = 'htpps://api.gyfcat.com/v1test/gyfcat/search?search_text=%s'%keyword
	data1     =  urlopen(URL)
	response  =  requests.get(URL)
	response.raise_for_status()

	jsonr = json.loads(response.text)
	response1 = data1.read()

	gif = jsonr['gycats'][0]['gifUrl'] #Extracts gyfcat .gif URL
	str(gif)

	return gif # need to put in empty spaces

@app.route('/api/text/<slang>/<tlang>' , methods = ['POST'])

def api_request(text): # from translate
	post = request.get_json()
	textinput = post.get('textinput')

	return keyword

def choice(text):
	keyword = text 

def rice():

	keyword = rice

	return keyword

def love():

	keyword = love 

	return keyword

def eat():

	keyword = eat

	return keyword

# def keywordextraction(textinput): #using Natural Language Processing
# 	sentence = "%s"%textinput
# 	token = ntlk.word_tokenize(sentence)
# 	tagged = ntlk.pos_tag(tokens)

# 	if x in tagged == 'NN' #finds prominent noun in sentence for checking assigns to keyword
# 		keyword = tagged[x]


# 	else if y in tagged == 'VB' #finds prominent verb in sentence for checking assigns to keyword
# 		keyword = tagged[x]

# 	else
# 		keyword = textinput 

# 	return keyword


def translate(inputtext):

	if slang = 'english'
		sourcel = 'en'
	if tlang = 'english'
		targetl = 'en'
	if slang = 'japanese'
		sourcel = 'ja'
	if tlang = 'japanese'
		sourcel = 'ja'

  # Google Tranlsate API need to enter own key
  service = build('translate', 'v2',
            developerKey='HIDDEN')
  returntext = (service.translations().list(
      source='%s'%sourcel,
      target='%s'%targetl,
      q=['%s'%inputtext]

    ).execute())

	return returntext


@app.route('/chat/text/<keyword>') #for getting GFYCAT mp4 URL

def api_article(keyword):

	URL       = 'htpps://api.gyfcat.com/v1test/gyfcat/search?search_text=%s'%keyword
	data1     =  urlopen(URL)
	response  =  requests.get(URL)
	response.raise_for_status()

	jsonr = json.loads(response.text)
	response1 = data1.read()

	gif = jsonr['gycats'][0]['gifUrl'] #Extracts gyfcat .gif URL
	str(gif)

	return gif

def livefeed():

	#get data from audio

def translate(inputtext):

	if slang = 'english'
		sourcel = 'en'
	if tlang = 'english'
		targetl = 'en'
	if slang = 'japanese'
		sourcel = 'ja'
	if tlang = 'japanese'
		sourcel = 'ja'

  # Google Tranlsate API need to enter own key
  service = build('translate', 'v2',
            developerKey='HIDDEN')
  returntext = (service.translations().list(
      source='%s'%sourcel,
      target='%s'%targetl,
      q=['%s'%inputtext]

    ).execute())

	return returntext


if __name__ == '__main__':
  main()




# if __name__ == '__main__':
# 	app.run(host='0.0.0.0', port=port)


