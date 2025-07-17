import requests
import sys
sys.stdout.reconfigure(encoding="utf-8")

url = "https://web2.temp-mail.org/mailbox"

headers = {
    "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3NTI2ODQwMTEsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJhZGRyZXNzIjoiNjhzdXJlQG1lY2hhbmljc3BlZGlhLmNvbSIsImlkIjoiNjg3N2Q1ZWE1OTdlMGFhNzcyMGIwZDQ1IiwibWVyY3VyZSI6eyJzdWJzY3JpYmUiOlsiL2FjY291bnRzLzY4NzdkNWVhNTk3ZTBhYTc3MjBiMGQ0NSJdfX0.kGv3DRKEkYLNsla92ZXF_6D0jjdTJwzsIOGQ4htdJp8-HgQ1GoJL6R2KBzEZYu_jvJVSloKfrUoXYPVziEGXAg",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
}

response = requests.get("https://vi.emailfake.com/")

print("Status Code:", response.status_code)
s = response.text
import re
match = re.search(r'<span id="email_ch_text">(.*?)</span>', s)
if match:
    result = match.group(1)
    print("Extracted text:", result)
else:
    print("No match found.")
    