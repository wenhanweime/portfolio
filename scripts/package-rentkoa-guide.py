"""Package the capability guide and its screenshots for offline reading."""
from pathlib import Path
import re
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parents[1]
markdown = (root / 'docs/rentkoa/product-capabilities.md').read_text()
image_base = 'https://wenhanweime.github.io/portfolio/covers/rentkoa/'
image_names = sorted(set(re.findall(re.escape(image_base) + r'([\w-]+\.png)', markdown)))
with ZipFile(root / 'public/docs/rentkoa-guide.zip', 'w', ZIP_DEFLATED) as bundle:
    bundle.writestr('RentKoa/product-capabilities.md', markdown.replace(image_base, 'images/'))
    for name in image_names:
        bundle.write(root / 'public/covers/rentkoa' / name, 'RentKoa/images/' + name)
print(f'Packaged guide with {len(image_names)} screenshots.')
