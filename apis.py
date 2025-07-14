import requests
from typing import Dict, Optional, Union, Any





















class ApiClient:
    def __init__(self, base_headers: Dict[str, str]):
        self.headers = base_headers
        self.session = requests.Session()
        self.session.headers.update(base_headers)

    def make_request(
        self,
        method: str,
        endpoint: str,
        payload: Optional[Dict[str, Any]] = None,
        params: Optional[Dict[str, Any]] = None
    ) -> Dict[str, Any]:
        url = f"{endpoint}"
        method = method.upper()

        try:
            if method == "POST":
                response = self.session.post(url, json=payload, params=params)
            elif method == "GET":
                response = self.session.get(url, params=params)
            else:
                raise ValueError(f"{method} not support")

            response.raise_for_status()
            return {
                "status_code": response.status_code,
                "success": True,
                "data": response.json() if response.headers.get('content-type', '').startswith('application/json') else response.text
            }

        except requests.exceptions.HTTPError as http_err:
            return {
                "status_code": response.status_code,
                "success": False,
                "error": f"HTTP error: {http_err}",
                "data": response.text
            }
        except requests.exceptions.RequestException as req_err:
            return {
                "status_code": None,
                "success": False,
                "error": f"Request error: {req_err}",
                "data": None
            }

    def close(self):
        self.session.close()

def 




if __name__ == "__main__":
    default_headers = {
        "content-type": "application/json",
        "cookie": "fingerprint=WHaiZwr5Dyxh51y%2BiFBxXZQAexN65Aitfvq7mqdZg1LtHL2fuH42U7Ih79ucINA0bG2cDNzniNydyz%2BTNzbf8%2BcdBaw7K3Pe2i6w%2Br0IZdHhskbesS50jBrgS59Pitq1ZLOLtHsdaH3GZAR0xL7jb%2BD%2FmjTPn6n%2FEfjH8ePGK4rzdYHIiSQsK4n%2BjTSBsTQS8qIdxUOCfp0hic3LajOE2OYnt3LPNfxw8FiOzwtjbQAzmDP2rEi0b5HwTIeUNck6hDOfcZVxFQR7QoICUzy18XlEGYYKTP3GIwew9T7K4toha06hADovm8U4LmeLQoiwUJrJDYPlfkmuR8MKOFp6Hlc%2FqeWGPwBF%2FVgQEuWFlgu9mNEuq7LAStp026Akz3q0fC8dRUtm3f1nsFofT%2Bp0EUIOB8Woa4geO9sCDg3DHc%2BJvsiGxejVhWHReB6J6qn5X5yxxnMpMl5RiKiq5WmdafURrmAKpg20fssVDhlMSgIkmBcOQvMS4MFRSogvNcFZRvW2kgcqZ3jH5BAe78oHV0LVfzTt5tUzaGsEup1sfUQzXKWjJWAgwbJfjBM%2FB3GVZ7cB0KGMtOBYgh2SA3QxItLOMGnWIcqDefSiRKxKr2DQvxfv83yOKLrQlHpXk2tW3IKG4aba1WqMK03Oe2ihhARkeF8GXj9XFFMFinfyoO%2BPDp%2Br7m6FcKe1TPXItdHcCv%2FkQ%2FTiifEOe%2FKuQDvNs65Of%2BmR0KAO88Bd72SI9PMx44NTFuvsMXaDqA644Zim; REMEMBERME=App.Entity.Publisher%3AMTI5MTUx%3A1752925131%3ALSdey4wCBlHeGVRo0FIfmYNRaVG5hRKKbCyvPEKhRUA~CE3meE9vWnaQRQiVIP_WSGko9tMAx2JjkZhe2v5iGBg~; PHPSESSID=bai6v4v0tgnahof886o612nmdr; CF=FP/3WinfY50j5OvMBxPHCg__; cookieyes-consent=consentid:d2JnOWNtWmgyM0pMdEU0ZkZXSGhzdE9BaTkxekF3WEk,consent:yes,action:yes,necessary:yes,functional:yes,analytics:yes,performance:yes,advertisement:yes,other:yes; _gcl_au=1.1.1767894245.1749275297; _ga=GA1.1.849965303.1749275178; _locale=en; _ga_J1JWN0T47X=GS2.1.s1750333134$o24$g1$t1750334042$j58$l0$h0",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
    }
    client = ApiClient(default_headers)

    payload1 = {
        "filters": {
            "dateRange": "2025-05-21T00:00:00.000+0200 - 2025-06-20T00:00:00.000+0200"
        },
        "sortField": "timestamp",
        "sortDirection": "DESC"
    }
    response1 = client.make_request(
        method="POST",
        endpoint="https://www.trafee.com/publisher/api/ch/conversions?page=1",
        payload=payload1
    )
    print(response1)

    # # Yêu cầu 2: POST đến /publisher/api/ch/reports/summary
    # payload2 = {
    #     "filters": {"filterId": "a3968551-d785-461b-ad04-7de3ce302789"},
    #     "init": True,
    #     "grouping": "smartlinkCampaign",
    #     "params": {"sortDirection": "DESC", "sortField": "revenue"}
    # }
    # response2 = client.make_request(
    #     method="POST",
    #     endpoint="/publisher/api/ch/reports/summary",
    #     payload=payload2
    # )
    # print("Yêu cầu 2:", response2)

    # # Yêu cầu 3: GET đến một endpoint ví dụ
    # response3 = client.make_request(
    #     method="GET",
    #     endpoint="/publisher/api/ch/conversions?page=1",
    #     params={"sortDirection": "DESC", "sortField": "timestamp"}
    # )
    # print("Yêu cầu 3:", response3)

    # # Đóng session
    client.close()