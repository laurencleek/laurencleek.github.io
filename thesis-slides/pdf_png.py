import os
import traceback
from pdf2image import convert_from_path

# Set the directory containing your PDFs
pdf_dir = r'c:\Users\lclee\OneDrive - Istituto Universitario Europeo\reveal_thesis'

# Set the path to poppler if needed (update this if you installed poppler elsewhere)
poppler_base = r"C:\Users\lclee\Downloads\poppler-25.09.1"

# Try to find the correct poppler bin directory
possible_bins = [
    os.path.join(poppler_base, "Library", "bin"),
    os.path.join(poppler_base, "bin"),
    poppler_base
]
poppler_path = None
for p in possible_bins:
    if os.path.exists(p) and any(f.lower().startswith("pdftoppm") for f in os.listdir(p)):
        poppler_path = p
        break

if poppler_path:
    print(f"Using poppler_path: {poppler_path}")
else:
    print("Could not find a valid poppler 'bin' directory containing pdftoppm.exe.")
    print("Listing contents of your poppler folder for troubleshooting:")
    for root, dirs, files in os.walk(poppler_base):
        print(f"{root}:")
        for d in dirs:
            print(f"  [DIR] {d}")
        for f in files:
            print(f"  {f}")
    raise RuntimeError("Poppler 'bin' directory not found. Please set poppler_path to the directory containing pdftoppm.exe.")

for filename in os.listdir(pdf_dir):
    if filename.lower().endswith('.pdf'):
        pdf_path = os.path.join(pdf_dir, filename)
        try:
            images = convert_from_path(pdf_path, poppler_path=poppler_path)
            for i, image in enumerate(images):
                png_filename = f"{os.path.splitext(filename)[0]}_page_{i+1}.png"
                image.save(os.path.join(pdf_dir, png_filename), 'PNG')
            print(f"Converted {filename} to PNG(s)")
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")
            traceback.print_exc()
