#!/bin/bash

cd src_angular/
ng build --deploy-url static/
cp dist/app-analytics/* ../django_app/app_analytics/static
cp dist/app-analytics/index.html ../django_app/app_analytics/templates
cd ..
