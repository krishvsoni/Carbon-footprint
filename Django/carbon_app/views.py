from django.shortcuts import render
import requests
import json

def Home(request):
    """ Api From Climatiq """

    key = 'QDPX8WYB8NMRA2J0AHC6XZ2P1D1X'
    url =  "https://beta3.api.climatiq.io/compute/aws/instance"
    payload = "{\r\n    \"region\": \"us_east_1\",\r\n    \"instance\": \"t2.micro\",\r\n    \"duration\": 8,\r\n    \"duration_unit\": \"h\"\r\n}"
    headers = {
        'Authorization': 'Bearer QDPX8WYB8NMRA2J0AHC6XZ2P1D1X',
        'Content-Type': 'text/plain'
    }
    request.method = "POST"
    response = requests.request("POST", url, headers=headers, data=payload)
    response_dict = json.loads(response.text)
    total_co2e = response_dict['total_co2e']
    total_co2e_unit = response_dict['total_co2e_unit']

    return render(request, 'index.html', {'total_co2e': total_co2e, 'total_co2e_unit': total_co2e_unit})



    #url = 'https://api.climatiq.io/aws/instance?instance_id=<i-0706660799ad99ff5>'




    #url = 'https://api.climatiq.io/cloud_footprint'
    #url = 'https://api.climatiq.io/v1/footprint/cloud{}&lon={}&key={QDPX8WYB8NMRA2J0AHC6XZ2P1D1X}'

'''
    request.method = "POST"
    latitude = request.POST['latitude']
    context = {'provider': 'AWS',
    'region': 'us-east-1',
    'instance_type':'t2.micro' ,
    'usage': 'Non-Commercial',
    'api_key': 'QDPX8WYB8NMRA2J0AHC6XZ2P1D1X'}


    return render(request, 'index.html', context)
'''

