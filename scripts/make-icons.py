#!/usr/bin/env python3
"""
scripts/make-icons.py — Genera íconos PWA de RoRoGarden desde los PNGs existentes.

Genera:
  public/pwa-512-maskable.png  (512x512, con margen seguro del 10% = safe zone)
  public/apple-touch-icon.png  (180x180)

Supuesto: public/pwa-512.png ya existe (el ícono base del sapo en pixel art).
Fondo: --color-menta (#D9F2E6) para coincidir con background_color del manifest.

Uso:
  python3 scripts/make-icons.py
"""

from pathlib import Path
from PIL import Image

# Paleta oficial de RoRoGarden
BG_COLOR = (217, 242, 230)  # #D9F2E6 — menta (background_color del manifest)

PUBLIC_DIR = Path(__file__).parent.parent / 'public'
SOURCE_512 = PUBLIC_DIR / 'pwa-512.png'
MASKABLE_512 = PUBLIC_DIR / 'pwa-512-maskable.png'
APPLE_180 = PUBLIC_DIR / 'apple-touch-icon.png'


def make_maskable(source_path: Path, output_path: Path, size: int = 512):
    """
    Crea una versión maskable: el contenido original escalado al 80% centrado
    sobre un fondo sólido (safe zone = 10% de cada lado = 20% del ancho total).
    Sin degradados, respetando el estilo pixel art.
    """
    src = Image.open(source_path).convert('RGBA')

    # Crear lienzo con fondo menta
    canvas = Image.new('RGBA', (size, size), (*BG_COLOR, 255))

    # Escalar el ícono original al 80% del tamaño final (safe zone)
    safe_size = int(size * 0.8)
    # Usar NEAREST para preservar el pixel art (sin antialiasing)
    scaled = src.resize((safe_size, safe_size), Image.NEAREST)

    # Centrar
    offset = (size - safe_size) // 2
    canvas.paste(scaled, (offset, offset), scaled)

    # Guardar como PNG sin metadatos innecesarios
    canvas.save(output_path, 'PNG', optimize=True)
    print(f'✓ {output_path.name} ({size}x{size})')


def make_apple_touch(source_path: Path, output_path: Path, size: int = 180):
    """
    Crea el apple-touch-icon: el ícono original centrado sobre fondo menta, sin recorte circular
    (iOS lo recorta internamente). Usa NEAREST para preservar pixel art.
    """
    src = Image.open(source_path).convert('RGBA')
    canvas = Image.new('RGBA', (size, size), (*BG_COLOR, 255))
    # Escalar al 85% para dejar un pequeño margen visual
    display_size = int(size * 0.85)
    scaled = src.resize((display_size, display_size), Image.NEAREST)
    offset = (size - display_size) // 2
    canvas.paste(scaled, (offset, offset), scaled)
    # Convertir a RGB para apple-touch-icon (no necesita transparencia)
    final = Image.new('RGB', (size, size), BG_COLOR)
    final.paste(canvas, mask=canvas.split()[3])
    final.save(output_path, 'PNG', optimize=True)
    print(f'✓ {output_path.name} ({size}x{size})')


if __name__ == '__main__':
    if not SOURCE_512.exists():
        print(f'✗ No se encontró {SOURCE_512}')
        exit(1)

    make_maskable(SOURCE_512, MASKABLE_512, size=512)
    make_apple_touch(SOURCE_512, APPLE_180, size=180)
    print('Íconos generados correctamente.')

