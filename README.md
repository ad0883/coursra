# Coursera Certificate Page Replica

An exact, 1:1 point-to-point pixel-perfect replica of the Coursera Course Certificate verification page for **"Data Visualizaton"** authorized by **Duke University** and completed by **Adarsh Vijay**.

## Layout & Pixel Alignment

- **Header Container**: 960px max width, aligns Coursera logo at ~39px from viewport edge on standard displays.
- **Main Content Container**: Exactly **788px** centered width (114px left margin on 1024px viewport):
  - **Left Column**: Exactly **384px** wide.
  - **Column Gap**: **16px**.
  - **Right Column (Certificate Frame)**: Exactly **388px** wide with authentic 1024:799 aspect ratio.
  - Left card ends at `x = 498px`; Certificate starts at `x = 513px` and ends at `x = 901px`.

## Typography & Color Hierarchy (Strict Match)

- **Eyebrow**: `"Course Certificate"` in dark gray/black `#1f1f1f` (`font-size: 11px`, `font-weight: 500`).
- **Date**: `"Nov 13, 2026"` in regular dark text `#1f1f1f` (`font-size: 13.5px`, `font-weight: 400`).
- **Course Title in Snippet**: `"Data Visualizaton"` in bold dark `#1f1f1f` (`font-size: 14px`, `font-weight: 700`, not blue, not underlined).
- **Verified Badge on Avatar**: White background circular badge with dark checkmark.
- **Learner**: `Adarsh Vijay` (verified account).
- **Top Utility Bar**: Solid black bar `#0b0c0e` (height: 28px, left padding: 45px) with `"For Individuals"` active white underline indicator at the bottom edge.
- **Main Navbar**: Height: 48px, Coursera vector logo starting at `x = 39px`, Explore at `x = 145px`, Degrees at `x = 206px`, 324px search bar at `x = 267px`, Log In link at `x = 870px`, and Join for Free button ending at `x = 965px`.
- **Coursera Auth Modal**: Exact interactive "Log in or create account" dialog with email input, Continue button, divider, Google / Facebook / Apple social auth buttons, organization login link, Terms of Use, Privacy Notice, and reCAPTCHA notice. Triggers on clicking "Log In" or "Join for Free".
- **Certificate**: Authentic 1024×799 Duke University certificate issued to Adarsh Vijay with interactive zoom lightbox modal (verification URL: `https://coursera.org/verify/775601XXDEM4`).

## How to View

Open `http://localhost:8000` in your browser:
```bash
open http://localhost:8000
```
Or open the file directly:
```bash
open /Users/akbroc/Desktop/coursra/index.html
```
