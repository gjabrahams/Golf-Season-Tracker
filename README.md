# Golf Season Tracker V10

GitHub Pages edition.

## Public site
Root files: `index.html`, `app.js`, `style.css`, and `data/golf-data.json`.

## Update results
For normal result updates, replace `data/golf-data.json`. The public site reads this file on every page load.

## Admin
The editable V8 admin is in `admin/`. It still uses browser localStorage.

## GitHub Pages
Settings -> Pages -> Deploy from a branch -> `main` -> `/ (root)`.


## V10 - Import completed matches from CSV
Open `admin/index.html`, go to **Individual Matches**, and use **Import Completed Matches CSV**.

The combined template supports:
- Individual rows (`RecordType=Individual`)
- Betterball rows (`RecordType=Betterball`)
- New players/courses/opponents automatically added
- Duplicate rows automatically skipped in Append mode
- Basic CSV validation before import

After importing, click **Download golf-data.json** and replace `data/golf-data.json` in the GitHub repository to update the public site.
