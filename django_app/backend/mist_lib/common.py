import requests
import json

class Common:

    def get_body(self, body_raw):
        body_unicode = body_raw.decode('utf-8')
        body = json.loads(body_unicode)
        return body

    def extractAuth(self, body):
        # cookies    
        cookies = body["cookies"] if "cookies" in body else None
        # headers
        headers = body['headers'] if "headers" in body else None
        host = body["host"] if "host" in body else None
        # result
        #csrf
        if body["cookies"] :
            if "csrftoken" in body["cookies"]:
                headers["X-CSRFToken"] = body["cookies"]["csrftoken"]
            if "csrftoken.eu" in body["cookies"]:
                headers["X-CSRFToken"] = body["cookies"]["csrftoken.eu"]
            if "csrftoken.gc1" in body["cookies"]:
                headers["X-CSRFToken"] = body["cookies"]["csrftoken.gc1"]
        extract = {"host": host, "headers": headers, "cookies": cookies }
        return extract


class Next(Common):

    def get_next(self, body):
        body = self.get_body(body)
        if not "next" in body:
            return {"status": 400, "data": {"message": "next missing"}}
        else:
            return self._get_next(body)  

    def _get_next(self, body):
        try:
            url = "https://{0}{1}".format(body["host"], body["next"])
            resp = requests.get(
                url, headers=body["headers"], cookies=body["cookies"])
            return {"status": 200, "data": {"clients": resp.json().get("results"),"next": resp.json().get("next"),"limit": resp.json().get("limit"),"total": resp.json().get("total")}}
        except:
            return {"status": 500, "data": {"message": "unable to retrieve the next values"}}
