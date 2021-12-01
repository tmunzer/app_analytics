import requests
import json

from .orgs import Orgs
from .common import Common


class SiteStats(Common):
    ## SITE STATS
    def get_site_stats(self, body):
        body = self.get_body(body)
        if not "site_id" in body:
            return {"status": 400, "data": {"message": "site_id missing"}}
        elif not "start" in body:
            return {"status": 400, "data": {"message": "start missing"}}
        elif not "end" in body:
            return {"status": 400, "data": {"message": "end missing"}}
        else:
            return self._get_site_stats(body, ["rx_bytes","tx_bytes","top-app-by-bytes"])    

    def _get_site_stats(self, body, metrics):
        try:           
            interval = 600 
            if body["end"] - body["start"] > 172800:
                interval = 3600
            url = "https://{0}/api/v1/sites/{1}/insights/site/{1}/stats?start={2}&end={3}&interval={4}&metrics={5}".format(
                    body["host"], body["site_id"], body["start"], body["end"], interval, ",".join(metrics))
            print(url)
            resp = requests.get(
                url, headers=body["headers"], cookies=body["cookies"])
            return {"status": 200, "data":  resp.json()}
        except:
            return {"status": 500, "data": {"message": "unable to retrieve the stats"}}

    ## SITE CLIENTS
    def get_site_clients(self, body):
        body = self.get_body(body)
        if not "site_id" in body:
            return {"status": 400, "data": {"message": "site_id missing"}}
        else:
            return self._get_site_clients(body)

    def _get_site_clients(self, body):
        try:
            url = "https://{0}/api/v1/sites/{1}/stats/clients?limit=1000&start={2}&end={3}".format(
                        body["host"], body["site_id"], body["start"], body["end"])            
            print(url)
            resp = requests.get(
                url, headers=body["headers"], cookies=body["cookies"])
            return {"status": 200, "data": {"clients": resp.json()}}
        except :            
            return {"status": 500, "data": {"message": "unable to retrieve the client list"}}

    def _get_client_stats(self, body, client):
        tx_bytes=0
        rx_bytes=0
        total_bytes=0
        try:           
            url = "https://{0}/api/v1/sites/{1}/insights/client/{2}/stats?start={3}&end={4}&interval=1h&metrics=bytes,rx_bytes,tx_bytes".format(
                    body["host"], body["site_id"], client["mac"], body["start"], body["end"])
            resp = requests.get(
                url, headers=body["headers"], cookies=body["cookies"])
            rjson=resp.json()
            for element in rjson["bytes"]:
                total_bytes = total_bytes + element
            for element in rjson["tx_bytes"]:
                tx_bytes = tx_bytes + element
            for element in rjson["rx_bytes"]:
                rx_bytes = rx_bytes + element
            client["tx_bytes"]=tx_bytes
            client["rx_bytes"]=rx_bytes
            client["total_bytes"]=total_bytes
            return client
        except:
            return {"status": 500, "data": {"message": "unable to retrieve the list of sites"}}


class ClientStats(Common):
    def get_client_stats(self, body):
        body = self.get_body(body)
        if not "site_id" in body:
            return {"status": 400, "data": {"message": "site_id missing"}}
        elif not "mac" in body:
            return {"status": 400, "data": {"message": "mac missing"}}
        elif not "start" in body:
            return {"status": 400, "data": {"message": "start missing"}}
        elif not "end" in body:
            return {"status": 400, "data": {"message": "end missing"}}
        else:
            return self._get_client_stats(body)            

    def _get_client_stats(self, body):
        try:           
            interval = 600 
            if body["end"] - body["start"] > 172800:
                interval = 3600
            url = "https://{0}/api/v1/sites/{1}/insights/client/{2}/stats?start={3}&end={4}&interval={5}&metrics=top-app-by-bytes,rx_bytes,tx_bytes".format(
                    body["host"], body["site_id"], body["mac"], body["start"], body["end"], interval)
            print(url)
            resp = requests.get(
                url, headers=body["headers"], cookies=body["cookies"])
            return {"status": 200, "data": resp.json()}
        except:
            return {"status": 500, "data": {"message": "unable to retrieve the list of sites"}}

class AppStats(Common):
    def get_app_stats(self, body):
        body = self.get_body(body)
        if not "site_id" in body:
            return {"status": 400, "data": {"message": "site_id missing"}}
        elif not "start" in body:
            return {"status": 400, "data": {"message": "start missing"}}
        elif not "end" in body:
            return {"status": 400, "data": {"message": "end missing"}}
        elif not "app" in body:
            return {"status": 400, "data": {"message": "app missing"}}
        else:
            return self._get_app_stats(body)         


    def _get_app_stats(self, body):
        try:
            interval = 600 
            if body["end"] - body["start"] > 172800:
                interval = 3600
            url = "https://{0}/api/v1/sites/{1}/insights/top-client?limit=1000&start={2}&end={3}&interval={4}&app={5}".format(
                    body["host"], body["site_id"], body["start"], body["end"], interval, body["app"])
            print(url)
            resp = requests.get(
                url, headers=body["headers"], cookies=body["cookies"])
            return {"status": 200, "data": {"top-client": resp.json()["results"]}}
        except:
            return {"status": 500, "data": {"message": "unable to retrieve the list of sites"}}

