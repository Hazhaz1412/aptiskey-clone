import requests
import os
import time
from pathlib import Path
from urllib.parse import unquote

output_dir = Path("downloaded_audio")
output_dir.mkdir(exist_ok=True)

base_url = "https://www.aptiskey.com/audio/question1_13/"

cookies = {
    'address': 'weheror183%401200b.com',
    'displayName': 'weheror183%401200b.com',
    'examdate': '%3A%222026-02-19T22%3A3%3A00.000Z%22',
    'expireddate': '%3A%222026-01-31T14%3A40%3A13.000Z%22',
    'fullName': 'Nguyen%20Van%20Anh',
    'isverified': '1',
    'loggedIn': 'true',
    'phone': ''
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.9,vi;q=0.8',
    'Accept-Encoding': 'gzip, deflate, br',
    'Referer': 'https://www.aptiskey.com/',
    'Origin': 'https://www.aptiskey.com',
    'Connection': 'keep-alive',
    'Sec-Fetch-Dest': 'audio',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin'
}

def download_file(url, filepath, max_retries=3):
    """Download file từ URL với retry logic"""
    for attempt in range(max_retries):
        try:
            # Thêm delay giữa các requests để tránh bị chặn
            if attempt > 0:
                wait_time = 2 ** attempt  # Exponential backoff: 2s, 4s, 8s
                print(f"  Retry {attempt}/{max_retries} sau {wait_time}s...")
                time.sleep(wait_time)
            
            # Sử dụng session để giữ kết nối
            session = requests.Session()
            response = session.get(url, headers=headers, cookies=cookies, timeout=20, stream=True)
            
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
                
        except requests.exceptions.ConnectionError as e:
            if attempt < max_retries - 1:
                print(f"✗ Connection error for {filepath.name}, retrying...")
            else:
                print(f"✗ Failed after {max_retries} attempts: {filepath.name}")
                return False
        except Exception as e:
            print(f"✗ Error: {filepath.name} - {str(e)}")
            if attempt >= max_retries - 1:
                return False
    
    return False

# Download files không có prefix "de" (audio_q1.mp3 đến audio_q15.mp3)
print("Downloading files without 'de' prefix...")
for q in range(1, 16):
    filename = f"audio_q{q}.mp3"
    url = base_url + filename
    filepath = output_dir / filename
    download_file(url, filepath)
    time.sleep(0.5)  # Delay 0.5s giữa mỗi file


# Download files có prefix "de" (audio_de2_q1.mp3 đến audio_de12_q15.mp3)
print("\nDownloading files with 'de' prefix (bỏ qua de1)...")
for de in range(2, 13):
    max_q = 15
    for q in range(1, max_q + 1):
        filename = f"audio_de{de}_q{q}.mp3"
        url = base_url + filename
        filepath = output_dir / filename
        download_file(url, filepath)
        time.sleep(0.5)  # Delay 0.5s giữa mỗi file

print("\n✅ Download completed! Files saved in 'downloaded_audio' folder.")
