import requests
HEADERS = {
    "content-type": "application/json",
    "cookie": "fingerprint=WHaiZwr5Dyxh51y%2BiFBxXZQAexN65Aitfvq7mqdZg1LtHL2fuH42U7Ih79ucINA0bG2cDNzniNydyz%2BTNzbf8%2BcdBaw7K3Pe2i6w%2Br0IZdHhskbesS50jBrgS59Pitq1ZLOLtHsdaH3GZAR0xL7jb%2BD%2FmjTPn6n%2FEfjH8ePGK4rzdYHIiSQsK4n%2BjTSBsTQS8qIdxUOCfp0hic3LajOE2OYnt3LPNfxw8FiOzwtjbQAzmDP2rEi0b5HwTIeUNck6hDOfcZVxFQR7QoICUzy18XlEGYYKTP3GIwew9T7K4toha06hADovm8U4LmeLQoiwUJrJDYPlfkmuR8MKOFp6Hlc%2FqeWGPwBF%2FVgQEuWFlgu9mNEuq7LAStp026Akz3q0fC8dRUtm3f1nsFofT%2Bp0EUIOB8Woa4geO9sCDg3DHc%2BJvsiGxejVhWHReB6J6qn5X5yxxnMpMl5RiKiq5WmdafURrmAKpg20fssVDhlMSgIkmBcOQvMS4MFRSogvNcFZRvW2kgcqZ3jH5BAe78oHV0LVfzTt5tUzaGsEup1sfUQzXKWjJWAgwbJfjBM%2FB3GVZ7cB0KGMtOBYgh2SA3QxItLOMGnWIcqDefSiRKxKr2DQvxfv83yOKLrQlHpXk2tW3IKG4aba1WqMK03Oe2ihhARkeF8GXj9XFFMFinfyoO%2BPDp%2Br7m6FcKe1TPXItdHcCv%2FkQ%2FTiifEOe%2FKuQDvNs65Of%2BmR0KAO88Bd72SI9PMx44NTFuvsMXaDqA644Zim; REMEMBERME=App.Entity.Publisher%3AMTI5MTUx%3A1752925131%3ALSdey4wCBlHeGVRo0FIfmYNRaVG5hRKKbCyvPEKhRUA~CE3meE9vWnaQRQiVIP_WSGko9tMAx2JjkZhe2v5iGBg~; PHPSESSID=bai6v4v0tgnahof886o612nmdr; CF=FP/3WinfY50j5OvMBxPHCg__; cookieyes-consent=consentid:d2JnOWNtWmgyM0pMdEU0ZkZXSGhzdE9BaTkxekF3WEk,consent:yes,action:yes,necessary:yes,functional:yes,analytics:yes,performance:yes,advertisement:yes,other:yes; _gcl_au=1.1.1767894245.1749275297; _ga=GA1.1.849965303.1749275178; _locale=en; _ga_J1JWN0T47X=GS2.1.s1750333134$o24$g1$t1750334042$j58$l0$h0",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
}

def  get_summary_trafee(grouping: str):
    url = "https://www.trafee.com/publisher/api/ch/reports/summary?sortDirection=DESC&sortField=revenue"
    payload = {
        "filters": {
            "filterId": "a3968551-d785-461b-ad04-7de3ce302789"
            },
            "init": True,
            "grouping": grouping,
            "params": {
                "sortDirection": "DESC",
                "sortField": "revenue"
            }
        }
    response = requests.post(url, json=payload, headers=HEADERS)
    return response.json()


from datetime import datetime
def get_conversions_trafee():
    url = "https://www.trafee.com/publisher/api/ch/conversions?page=1"
    payload = {
        "filters": {
            "dateRange": "2025-05-21T00:00:00.000+0200 - 2025-06-20T00:00:00.000+0200"
        },
        "sortField": "timestamp",
        "sortDirection": "DESC"
    }
    response = requests.post(url, json=payload, headers=HEADERS)
    conversions = response.json()
    rs = []
    for conversion in conversions['conversions']:
        if conversion['country']['code'].lower() == "uk":
            conversion['country']['code'] = 'gb'
        rs.append({
            "date": datetime.strptime(conversion['timestamp'], "%Y-%m-%dT%H:%M:%S.%f%z").strftime("%Y-%m-%d %H:%M:%S"),
            "source": f"<span class='badge bg-gradient-success'>{conversion['campaign']['name']}</span>",
            "goal": conversion['offerGoalTitle'] or "_",
            "clickId": conversion['clickId'],
            "exitId": "_",
            "subsource": conversion['subSource'],
            "device": "<i class='fas fa-mobile device-icon'></i>" if conversion['device']['name'] == "Mobile" else "<i class='fa-solid fa-laptop'></i>",
            "country": f"<img src='https://flagcdn.com/{conversion['country']['code'].lower()}.svg' class='flag' alt='{conversion['country']['name']}'> {conversion['country']['name']}",
            "amount": f"${conversion['amount']: .2f}",
            "type": "<span class='badge bg-gradient-success'>Conversion</span>",
            "info": "-"
        })
    return rs, conversions['totalCount'], conversions['numItemsPerPage'], conversions['filterId']

def get_smartlinks_trafee():
    url = "https://www.trafee.com/publisher/api/smartlink_verticals?page=1"
    response = requests.get(url, headers=HEADERS)
    return response.json()

def get_smartlinks_filter_trafee():
    url = "https://www.trafee.com/publisher/api/smartlinks/filter?page=1"
    response = requests.get(url, headers=HEADERS)
    return response.json()


def get_websites_adsterra():
    url = "https://api3.adsterratools.com/publisher/domains.json"
    headers = {
        "Accept": "application/json",
        "X-API-Key": "83b34c8e8c7405ce8df1a17c8637f619"
    }
    response = requests.get(url, headers=headers)

    return response.json()


def get_statistics_adsterra():
    url = "https://api3.adsterratools.com/publisher/stats.json"
    querystring = {"start_date":"2022-03-06","finish_date":"2022-03-06","group_by":"date"}
    headers = {
        "Accept": "application/json",
        "X-API-Key": "83b34c8e8c7405ce8df1a17c8637f619"
    }
    response = requests.get(url, headers=headers, params=querystring)

    return response.json()


if __name__ == "__main__":
#     # a= get_smartlinks_trafee()
#     # a = get_websites_adsterra()
    # a = get_statistics_adsterra()
    a = get_conversions_trafee()
    print(a)
    pass