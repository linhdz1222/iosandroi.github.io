from PIL import Image
import os

# Input image (replace path if needed)
input_path = os.path.join(os.path.dirname(__file__), '..', 'bgr (1).jpg')
output_dir = os.path.join(os.path.dirname(__file__), '..', 'icons')

sizes = [72, 192, 512]

os.makedirs(output_dir, exist_ok=True)

with Image.open(input_path) as im:
    im = im.convert('RGBA')
    for s in sizes:
        out = im.copy()
        out = out.resize((s, s), Image.LANCZOS)
        out_path = os.path.join(output_dir, f'icon-{s}x{s}.png')
        out.save(out_path, format='PNG', optimize=True)
        print('Wrote', out_path)

print('Done')
