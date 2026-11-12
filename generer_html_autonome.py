from pathlib import Path
import base64
import re

r = Path(__file__).resolve().parent
h = (r / "index.html").read_text(encoding="utf-8")

css = (r / "style.css").read_text(encoding="utf-8")
h = h.replace(
    '<link rel="stylesheet" href="style.css">',
    f"<style>{css}</style>"
)

for fichier in sorted(r.glob("serie*.js")):
    code = fichier.read_text(encoding="utf-8")

    for image in set(re.findall(r'images/[\w./-]+\.png', code)):
        chemin = r / image
        if not chemin.exists():
            raise FileNotFoundError(chemin)

        encoded = base64.b64encode(chemin.read_bytes()).decode()
        code = code.replace(
            image,
            "data:image/png;base64," + encoded
        )

    h = h.replace(
        f'<script src="{fichier.name}"></script>',
        f"<script>{code}</script>"
    )

js = (r / "quiz.js").read_text(encoding="utf-8")
h = h.replace('<script src="quiz.js"></script>', f"<script>{js}</script>")

(r / "PowerBI_Examen_Blanc_Autonome.html").write_text(
    h, encoding="utf-8"
)

print("Version autonome créée")