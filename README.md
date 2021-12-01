# Mist App Analytics

## MIT LICENSE
 
Copyright (c) 2021 Thomas Munzer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the  Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Features
- Provides historical data usage for Wi-Fi clients
- Provides the applications usage for each Wi-Fi Client
- Provides the list of applications used on the network
- Provides the list of Wi-Fi clients per application


<div style="display:flex;flex-direction:row;justify-content: space-between;">
<img src="https://github.com/tmunzer/app_analytics/raw/main/._readme/clients.png"  width="45%"  />
<img src="https://github.com/tmunzer/app_analytics/raw/main/._readme/client_detail.png"  width="45%"  />
 </div>
<div style="display:flex;flex-direction:row;justify-content: space-between;">
<img src="https://github.com/tmunzer/app_analytics/raw/main/._readme/apps.png"  width="50%"  />
<img src="https://github.com/tmunzer/app_analytics/raw/main/._readme/app_detail.png"  width="50%"  />
 </div>


## How it's working
* This application requires Mist accounts or API token to be used.
* This application is automatically retrieving the account information and access rights from the Mist Cloud.
* When an admin selects a site, the application is retrieving amm the required information from the Mist Cloud to generate the reports
* There is no information stored on the server side, and all the required information are cached on the web browser side (this means everything will be lost if the page is manually refreshed, or when using the web browser "back" button).


## Installation

This is a demo application using the Mist APIs.

You can run it as a strandalone Python application, or deploy it as a Docker container.

**Note**: The application is not providing secured HTTPS connections. It is highly recommended to deploy it behind a reverse proxy providing HTTPS encryption.

### Standalone deployment
1. download the github repository
2. from the project folder, install the python dependencies (ex: `pip3 install -r requirements.txt`)
3. from the `django_app`folder, start the app with `python3 ./manage.py runserver` (please see Djano server options with `python3 ./manage.py runserver -h`)

### Docker Image
The docker image is available on docker hub: https://hub.docker.com/repository/docker/tmunzer/app_analytics.


The Docket image is listening on port TCP8000

## Configuration
You can configure the settings through a configuration file or through Environment Variables.

### Configuration File
A configuration example with explanation is avaiable in the `django/backend/config_example.py`. This file must be edited and renamed `config.py`.

### Environment Variables
| Variable Name | Type | Default Value | Comment |
| ------------- | ---- | ------------- | ------- |
DJANGO_DEBUG | Number | 0 | Whether or not Django starts in Debug Mode (0=Production, 1=Debug) |
DJANGO_ALLOWED_HOSTS | String |  | FQDN on which Django is listening. Only used in Production Mode |
GOOGLE_API_KEY | String | | Google API Key to use [Google Map Javascript API](https://developers.google.com/maps/gmp-get-started) |
APP_DISLCAIMER | String | | Disclaimer to display on the login page | 

