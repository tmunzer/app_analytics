import requests
import json

from .orgs import Orgs
from .common import Common


class Clients(Common):

    def get_clients(self, body):
        body = self.get_body(body)
        if not "site_id" in body:
            return {"status": 400, "data": {"message": "site_id missing"}}
        else:
            return self._get_clients(body)            

    def _get_clients(self, body):
        try:            
            url = "https://{0}/api/v1/sites/{1}/stats/clients".format(
                    body["host"], body["site_id"])
            resp = requests.get(
                url, headers=body["headers"], cookies=body["cookies"])
            return {"status": 200, "data": {"sites": resp.json()}}
        except:
            return {"status": 500, "data": {"message": "unable to retrieve the list of sites"}}

    def search_clients(self, body):
        body = self.get_body(body)
        if not "site_id" in body:
            return {"status": 400, "data": {"message": "site_id missing"}}
        elif not "start" in body:
            return {"status": 400, "data": {"message": "start missing"}}
        elif not "end" in body:
            return {"status": 400, "data": {"message": "end missing"}}
        else:
            return self._get_clients(body)            

    def _search_clients(self, body):
        try:            
            url = "https://{0}/api/v1/sites/{1}/search/clients?start={2}&end={3}".format(
                    body["host"], body["site_id"], body["start"], body["end"])
            resp = requests.get(
                url, headers=body["headers"], cookies=body["cookies"])
            return {"status": 200, "data": {"sites": resp.json()}}
        except:
            return {"status": 500, "data": {"message": "unable to retrieve the list of sites"}}
