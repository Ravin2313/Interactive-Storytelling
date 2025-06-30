# 🎮 HeroVerse: Interactive Storytelling

HeroVerse is a dynamic, web-based storytelling platform where users choose their own adventure through two iconic universes: **Ben 10** and **Spider-Man**. Your choices shape the path and outcome of each storyline, offering an immersive and personalized experience.

## 🌟 Key Features

- 🕹️ Two branching storylines: Ben 10 and Spider-Man
- 🔊 Background music with audio controls per story
- ⌨️ Typing animation for immersive story progression
- 📱 Responsive UI with smooth, modern design
- ⚡ Dynamic content rendering (no full page reloads)
- 🧠 MVC-style file and logic organization

## 🛠️ Tech Stack

| Layer     | Technology                    |
|-----------|-------------------------------|
| Frontend  | HTML, CSS, JavaScript (Vanilla) |
| Templating | EJS                           |
| Backend   | Node.js, Express.js           |
| Media     | HTML5 Audio for background music |

## 🗂️ Project Structure

```
/                    # Root
├── /views           # EJS templates
│   ├── home.ejs
│   ├── select.ejs
│   ├── ben10Game.ejs
│   └── spidermanGame.ejs
├── /public          # Static files
│   ├── /css
│   ├── /js
│   └── /audio
├── /routes          # Express route handlers
├── /data            # Story JSON for Ben 10 & Spider-Man
├── app.js           # Main server file
```

## 🚀 Route Overview

- `/` → Home page  
- `/select` → Choose story universe  
- `/ben10` → Static intro to Ben 10  
- `/ben10/json/:step` → JSON API for Ben 10 story flow  
- `/spiderman` → Static intro to Spider-Man  
- `/spiderman/json/:step` → JSON API for Spider-Man story flow

## 🎮 Story Engine

- Uses JavaScript `fetch()` to load story data dynamically
- Typing animation creates engaging narrative
- Background music continues seamlessly across steps

## 📬 Contact

- **Developer:** Ravindra Kumar Shriwas  
- **Email:** ravindrashriwas2313@gmail.com  
- **LinkedIn:**  

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

**Developed by Ravindra Kumar Shriwas – MCA Student, ABV University, Bilaspur**
