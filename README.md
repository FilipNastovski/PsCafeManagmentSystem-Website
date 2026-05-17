# PsCafeManagmentSystem-Website

Static single-page website for the PlayStation Café Management System desktop app. Hosted on GitHub Pages.

## Quick Start

```bash
# Preview locally
python -m http.server 8000
```

Open `http://localhost:8000` in a browser. No build step, no dependencies.


## Development

### Adding Translations

1. Add `data-i18n="your_key"` to any HTML element
2. Add the key to both `en` and `mk` objects in `js/main.js`
3. If adding a new language, extend the `translations` object and update the toggle logic in `main.js`


## GitHub Releases Integration

The site fetches the latest release from the GitHub API on page load. It expects release assets with `windows` or `linux` in the filename.

### Creating a Release

1. Build the desktop app (`build.bat` / `build.sh`)
2. Zip the `dist/PS-Cafe-Manager/` folder:
   - `PS-Cafe-Manager-windows.zip`
   - `PS-Cafe-Manager-linux.tar.gz`
3. Create a GitHub Release on this repo with a tag (e.g., `v1.0.0`)
4. Attach both archives as release assets
5. The site auto-updates download links and version badge

### API Endpoint

```
https://api.github.com/repos/FilipNastovski/PsCafeManagmentSystem-Website/releases/latest
```

Unauthenticated rate limit: 60 requests/hour. Fine for a low-traffic site.

## Linux Desktop Entry

The Linux build is portable and doesn't install a desktop entry automatically. To add it to your application menu:

1. Extract the archive:
   ```bash
   tar -xzf PS-Cafe-Manager-linux.tar.gz
   ```

2. Move it to a permanent location (optional but recommended):
   ```bash
   sudo mv PS-Cafe-Manager /opt/ps-cafe-manager
   ```

3. Create a desktop entry file:
   ```bash
   nano ~/.local/share/applications/ps-cafe-manager.desktop
   ```

4. Paste the following (adjust `Exec` and `Icon` paths if you placed it somewhere other than `/opt`):
   ```ini
   [Desktop Entry]
   Name=PS Cafe Manager
   Comment=PlayStation Cafe Management System
   Exec=/opt/ps-cafe-manager/PS-Cafe-Manager
   Icon=/opt/ps-cafe-manager/resources/app/icon.png
   Terminal=false
   Type=Application
   Categories=Utility;
   ```

5. Make the desktop entry trusted:
   ```bash
   chmod +x ~/.local/share/applications/ps-cafe-manager.desktop
   ```

The app will now appear in your application launcher. If the icon path doesn't match, find the actual icon file inside the extracted folder and update the `Icon=` line.
