import requests
import time
from pathlib import Path

output_dir = Path("downloaded_pic_2")
output_dir.mkdir(exist_ok=True)

base_url = "https://www.aptiskey.com/images/speaking/part2/"

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
    'Referer': 'https://www.aptiskey.com/',
    'Origin': 'https://www.aptiskey.com',
    'Connection': 'keep-alive',
}

def download_file(url, filepath, max_retries=3):
    for attempt in range(max_retries):
        try:
            if attempt > 0:
                wait_time = 2 ** attempt
                print(f"  Retry {attempt}/{max_retries} after {wait_time}s...")
                time.sleep(wait_time)
            session = requests.Session()
            response = session.get(url, headers=headers, timeout=20, stream=True)
            if response.status_code == 200:
                with open(filepath, 'wb') as f:
                    for chunk in response.iter_content(chunk_size=8192):
                        if chunk:
                            f.write(chunk)
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

for i in range(1, 38):
    filename = f"{i}.png"
    url = base_url + filename
    filepath = output_dir / filename
    download_file(url, filepath)
    time.sleep(0.3)

print("\n✅ Download completed! Files saved in 'downloaded_pic_2' folder.")
