#hospital1 bot


import json 

URL = "https://www.elcaminohospital.org/"

data = {}  
data['hospital'] = []  

data['hospital'].append({  
    'name': 'El Camino Mountain Hospital',
    'time': '20',
    'ER': 'yes',
    'patients': '21'
})

with open('data3.txt', 'w') as outfile:  
    json.dump(data, outfile)