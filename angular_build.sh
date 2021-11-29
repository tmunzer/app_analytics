#!/bin/bash

cd src_angular/
ng build --deploy-url static/
cp dist/app_analytics/* ../django_app/app_analytics/static
cp dist/app_analytics/index.html ../django_app/app_analytics/templates
cd ..
