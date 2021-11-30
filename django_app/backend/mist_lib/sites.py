import requests
import json

from .orgs import Orgs
from .common import Common


class Sites(Common):

    def get_sites(self, body):
        body = self.get_body(body)
        if not "org_id" in body:
            return {"status": 400, "data": {"message": "org_id missing"}}
        elif not "site_ids" in body:
            return {"status": 400, "data": {"message": "site_ids missing"}}
        else:
            return self._get_sites(body)            
            

    def _get_sites(self, body):
        try:            
            url = "https://{0}/api/v1/orgs/{1}/sites".format(
                    body["host"], body["org_id"])
            resp = requests.get(
                url, headers=body["headers"], cookies=body["cookies"])            
            if resp.status_code >= 400:
                sites = self._get_individual_sites(body)
                return {"status": 200, "data": {"sites": sites}}
            else:
                return {"status": 200, "data": {"sites": resp.json()}}
        except:
            print(resp.status_code)
            return {"status": 500, "data": {"message": "unable to retrieve the list of sites"}}


    def _get_individual_sites(self, body):
        sites = []
        for site_id in body["site_ids"]: 
            try:            
                url = "https://{0}/api/v1/sites/{1}".format(body["host"], site_id)
                resp = requests.get(
                    url, headers=body["headers"], cookies=body["cookies"])            
                sites.append(resp.json())
            except:
                print("Error retrieving site info for site {0} on {1}".format(site_id, body["host"]))
        return sites


    def get_site_derived(self, body):        
        body = self.get_body(body)
        if "site_id" in body:
            return self._get_site_derived(body)            
        else:
            return {"status": 400, "data": {"message": "site_id missing"}}

    def _get_site_derived(self, body):
        try:            
            url = "https://{0}/api/v1/sites/{1}/setting/derived".format(
                    body["host"], body["site_id"])
            resp = requests.get(
                url, headers=body["headers"], cookies=body["cookies"])
            resp_json = resp.json()
            data = []
            if "switch_matching" in resp_json:
                data.append(resp_json["switch_matching"])
            if "networks" in resp_json:
                data.append(resp_json["networks"])
            if "port_usages" in resp_json:
                data.append(resp_json["port_usages"])
            return {"status": 200, "data": {"result": data}}
        except:
            return {"status": 500, "data": {"message": "unable to retrieve the derived site settings"}}


    def get_site_wlans(self, body):
        body = self.get_body(body)
        if "site_id" in body:
            return self._get_site_wlans(body)            
        else:
            return {"status": 400, "data": {"message": "site_id missing"}}

    def _get_site_wlans(self, body):
        try:            
            url = "https://{0}/api/v1/sites/{1}/wlans/derived".format(
                    body["host"], body["site_id"])
            resp = requests.get(
                url, headers=body["headers"], cookies=body["cookies"])
            resp_json = resp.json()
            data = []
            for wlan in resp_json:
                data.append({"id": wlan["id"], "name": wlan["ssid"]})
            return {"status": 200, "data": {"wlans": data}}
        except:
            return {"status": 500, "data": {"message": "unable to retrieve the derived site wlans"}}