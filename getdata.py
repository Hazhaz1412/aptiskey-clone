import json
import os
import re
import glob

def scrape_audio_from_js(js_file_path):
    """
    Extract audio URLs from JavaScript files
    """
    try:
        with open(js_file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find audioUrl patterns in JavaScript
        # Pattern: audioUrl: "audio/question1_13/audio_q1.mp3"
        pattern = r'audioUrl:\s*["\']([^"\']+)["\']'
        audio_urls = re.findall(pattern, content)
        
        audio_data = []
        for url in audio_urls:
            audio_info = {
                'src': url,
                'full_url': f"https://aptiskey.com/{url}",
                'file': os.path.basename(url),
                'folder': os.path.dirname(url)
            }
            audio_data.append(audio_info)
        
        return audio_data
    
    except Exception as e:
        print(f"Error reading {js_file_path}: {e}")
        return []

def scrape_audio_from_html(html_file_path):
    """
    Find JavaScript files referenced in HTML and extract audio from them
    """
    try:
        with open(html_file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find script src references
        script_pattern = r'<script[^>]+src=["\']([^"\']+\.js)["\']'
        js_files = re.findall(script_pattern, content)
        
        return js_files
    
    except Exception as e:
        print(f"Error reading {html_file_path}: {e}")
        return []

def scrape_all_files():
    """
    Scrape audio data from local JavaScript files
    """
    all_audio_data = {}
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Find all JavaScript files in js folder
    js_pattern = os.path.join(base_dir, 'js', '**', '*.js')
    js_files = glob.glob(js_pattern, recursive=True)
    
    for js_file in js_files:
        print(f"Scraping: {os.path.relpath(js_file, base_dir)}")
        audio_data = scrape_audio_from_js(js_file)
        
        if audio_data:
            all_audio_data[os.path.relpath(js_file, base_dir)] = audio_data
            print(f"  Found {len(audio_data)} audio files")
        else:
            print(f"  No audio files found")
    
    return all_audio_data

def save_to_json(data, filename="audio_data.json"):
    """
    Save audio data to JSON file
    """
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"\nData saved to {filename}")

def generate_html_tags(audio_data):
    """
    Generate HTML audio tags from audio data
    """
    html_tags = []
    
    for js_file, audios in audio_data.items():
        for audio in audios:
            tag = f'<audio id="audioPlayer" preload="none" src="{audio["src"]}"></audio>'
            html_tags.append(tag)
    
    return html_tags

def save_html_tags(html_tags, filename="audio_tags.html"):
    """
    Save HTML audio tags to file
    """
    with open(filename, 'w', encoding='utf-8') as f:
        for tag in html_tags:
            f.write(tag + '\n')
    print(f"\nHTML tags saved to {filename}")

def main():
    print("Starting audio data scraping...")
    print("=" * 50)
    
    # Scrape audio data from JavaScript files
    print("=" * 60)
    
    # Scrape audio data from JS files
    audio_data = scrape_all_files()
    
    # Save to JSON
    save_to_json(audio_data)
    
    # Generate and save HTML tags
    html_tags = generate_html_tags(audio_data)
    save_html_tags(html_tags)
    
    # Print summary
    total_audios = sum(len(audios) for audios in audio_data.values())
    print(f"\nTotal audio files found: {total_audios}")
    
    # Show first few examples
    if html_tags:
        print(f"\nFirst 5 audio tags:")
        for tag in html_tags[:5]:
            print(f"  {tag}")
        
        if len(html_tags) > 5:
            print(f"  ... and {len(html_tags) - 5} more")