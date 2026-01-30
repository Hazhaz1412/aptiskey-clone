import requests
from pathlib import Path
import time

output_dir = Path("downloaded_writingkey")
output_dir.mkdir(exist_ok=True)

base_url_html = "https://www.aptiskey.com/writingkey{:03d}.html"
base_url_js = "https://www.aptiskey.com/js/writing/writingkey{:03d}.js"


headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Referer': 'https://www.aptiskey.com/',
    'Origin': 'https://www.aptiskey.com',
    'Connection': 'keep-alive',
}

# Cookie để bypass login
cookies = {
    'loggedIn': 'true',
    'displayName': 'woheror183%401200b.com',
    'fullName': 'Nguyen%20Van%20Anh',
    'expireddate': 'j%3A%222026-01-31T14%3A40%3A13.000Z%22',
    'examdate': 'j%3A%222026-02-19T22%3A39%3A00.000Z%22',
    'isverified': '1',
    'address': '',
    'phone': ''
}

def download_file(url, filepath, max_retries=3):
    for attempt in range(max_retries):
        try:
            if attempt > 0:
                wait_time = 2 ** attempt
                print(f"  Retry {attempt}/{max_retries} after {wait_time}s...")
                time.sleep(wait_time)
            session = requests.Session()
            response = session.get(url, headers=headers, cookies=cookies, timeout=20)
            if response.status_code == 200:
                with open(filepath, 'wb') as f:
                    f.write(response.content)
                print(f"✓ Downloaded: {filepath.name}")
                session.close()
                return True
            elif response.status_code == 404:
                print(f"✗ Not found (404): {filepath.name}")
                session.close()
                return False
            else:
                print(f"✗ Failed ({response.status_code}): {filepath.name}")
                session.close()
        except Exception as e:
            print(f"✗ Error: {filepath.name} - {str(e)}")
            if attempt >= max_retries - 1:
                return False
    return False


# Tải writingkey001.html/js đến writingkey040.html/js
for idx in range(1, 41):
    html_url = base_url_html.format(idx)
    html_path = output_dir / f"writingkey{idx:03d}.html"
    download_file(html_url, html_path)
    time.sleep(0.3)

    js_url = base_url_js.format(idx)
    js_path = output_dir / f"writingkey{idx:03d}.js"
    download_file(js_url, js_path)
    time.sleep(0.3)

print("\n✅ Download completed! Files saved in 'downloaded_writingkey' folder.")
