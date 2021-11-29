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
            return self._get_sites(body)            

    def _get_clients(self, body):
        try:            
            url = "https://{0}/api/v1/sites/{1}/stats/clients".format(
                    body["host"], body["site_id"])
            resp = requests.get(
                url, headers=body["headers"], cookies=body["cookies"])
            return {"status": 200, "data": {"sites": resp.json()}}
        except:
            return {"status": 500, "data": {"message": "unable to retrieve the list of sites"}}

