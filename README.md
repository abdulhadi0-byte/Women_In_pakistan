<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=220&section=header&text=Awaaz&fontSize=70&fontColor=fff&animation=fadeIn&fontAlignY=38&desc=Women's%20Awareness%20%26%20Solutions%20Portal%20—%20Pakistan&descAlignY=55&descSize=18" width="100%"/>

<img src="https://readme-typing-svg.demolab.com?font=Poppins&size=22&pause=1000&color=A855F7&center=true&vCenter=true&width=650&lines=Awareness+that+respects+dignity.;Data-driven+solutions+for+every+province.;Built+with+HTML+%2B+CSS+%2B+JavaScript.;Empathy+%C2%B7+Accuracy+%C2%B7+Action." alt="Typing SVG" />

<br/>

[![Live Site](https://img.shields.io/badge/🌐_Live_Demo-View_Site-6D28D9?style=for-the-badge)](https://abdulhadi0-byte.github.io/Women_In_pakistan/index.html)
[![GitHub Pages](https://img.shields.io/github/deployments/abdulhadi0-byte/Women_In_pakistan/github-pages?style=for-the-badge&label=Deployment&color=success)](https://abdulhadi0-byte.github.io/Women_In_pakistan/index.html)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Made with](https://img.shields.io/badge/Made_with-HTML%20%7C%20CSS%20%7C%20JS-orange?style=for-the-badge)](#-tech-stack)

![Stars](https://img.shields.io/github/stars/abdulhadi0-byte/Women_In_pakistan?style=social)
![Forks](https://img.shields.io/github/forks/abdulhadi0-byte/Women_In_pakistan?style=social)
![Last Commit](https://img.shields.io/github/last-commit/abdulhadi0-byte/Women_In_pakistan?color=blueviolet)

</div>

---

## 🎗️ About

**Awaaz** (*"Voice"* in Urdu) is a respectful, data-driven awareness portal that maps **women's issues across Pakistan** — by province and city — directly to relevant **laws, government programs, and official resources**. Built as an educational project focused on empathy, accuracy, and actionable information.

> Educational project — statistics should be verified and sourced before formal submission.

<br/>

<div align="center">

### 📊 Portal at a Glance

</div>

<div align="center">

| 🗺️ Regions Covered | 🏷️ Issue Categories | ⚙️ Stack | 🎯 Focus |
|:---:|:---:|:---:|:---:|
| **7** | **6** | **100% Vanilla JS** | Empathy · Accuracy · Action |

</div>

<br/>

```mermaid
%%{init: {'theme':'dark', 'themeVariables': {'pieOuterStrokeWidth': '2px'}}}%%
pie showData title Issue Categories Tracked in Awaaz
    "Education" : 1
    "Health" : 1
    "Safety" : 1
    "Employment" : 1
    "Legal Rights" : 1
    "Political Participation" : 1
```

<br/>

## ✨ Features

<table>
<tr>
<td width="50%">

### 🗂️ Issues Explorer
Filter and search real issues by **province**, **city**, and **category** in real time — no page reloads, no frameworks, pure JS filtering.

### 🏛️ Government Initiatives
Browse relevant **laws & programs**, cross-linked back to the issues they address, so users see the full picture: *problem → policy response*.

</td>
<td width="50%">

### 📖 About & Methodology
Transparent sourcing rules, disclaimers, and team credits — built with academic integrity in mind.

### 📞 Emergency Helplines
Quick access to **1099** (Ministry of Human Rights), **15** (Emergency), and **1122** (Rescue) — always visible in the footer.

</td>
</tr>
</table>

<br/>

## 🧭 How Awaaz Works

```mermaid
flowchart LR
    A([🏠 Landing Page]) --> B{Choose a Region}
    B -->|Select Province| C[Narrow by City]
    C --> D{Select a Category}
    D -->|Education| E[📋 Issue Details]
    D -->|Health| E
    D -->|Safety| E
    D -->|Employment| E
    D -->|Legal Rights| E
    D -->|Political Participation| E
    E --> F[📊 Statistic + Source]
    F --> G([🏛️ Linked Government Initiative])
    G --> H([✅ Actionable Resource])

    style A fill:#7C3AED,color:#fff
    style H fill:#16A34A,color:#fff
    style E fill:#1E293B,color:#fff
    style G fill:#1E293B,color:#fff
```

<br/>

## 🖥️ Site Structure

```mermaid
graph TD
    Home[index.html<br/>🏠 Home] --> Issues[issues.html<br/>🗂️ Issues Explorer]
    Home --> Initiatives[initiatives.html<br/>🏛️ Government Initiatives]
    Home --> About[about.html<br/>📖 About & Methodology]
    Issues -.cross-links.-> Initiatives
    Initiatives -.cross-links.-> Issues

    style Home fill:#6D28D9,color:#fff
    style Issues fill:#0EA5E9,color:#fff
    style Initiatives fill:#DB2777,color:#fff
    style About fill:#F59E0B,color:#fff
```

<br/>

## 🛠️ Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222?style=for-the-badge&logo=githubpages&logoColor=white)

</div>

No frameworks, no build step, no dependencies — the entire filtering and routing logic runs on **vanilla JavaScript**, making the project lightweight, fast, and easy to audit.

<br/>

## 🚀 Getting Started

### Live Version
Just visit → **[abdulhadi0-byte.github.io/Women_In_pakistan](https://abdulhadi0-byte.github.io/Women_In_pakistan/index.html)**

### Run Locally

```bash
# Clone the repository
git clone https://github.com/abdulhadi0-byte/Women_In_pakistan.git

# Move into the project folder
cd Women_In_pakistan

# Open directly in your browser
open index.html      # macOS
start index.html      # Windows
xdg-open index.html   # Linux
```

No build tools, no `npm install` — just open and go. ⚡

<br/>

## 📂 Project Structure

```
Women_In_pakistan/
├── index.html          # Landing page
├── issues.html         # Issues Explorer (filterable by province/city/category)
├── initiatives.html    # Government Initiatives directory
├── about.html          # Methodology, disclaimers & credits
├── assets/
│   ├── css/             # Stylesheets
│   ├── js/               # Filtering & data logic
│   └── data/             # Issues & initiatives datasets
└── README.md
```

<br/>

## 🗺️ Roadmap

- [x] Province & city-based issue filtering
- [x] Government initiative cross-linking
- [x] Emergency helpline integration
- [ ] Add verified statistics with citation footnotes
- [ ] Dark/light theme toggle
- [ ] Multi-language support (Urdu 🇵🇰)
- [ ] Search bar across all categories
- [ ] Downloadable reports per region

<br/>

## 🤝 Contributing

Contributions are welcome! This started as a team assignment (AI Seekho — Assignment 3) and is open for improvement.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<br/>

## 👥 Credits

Built by a **team of 3** for **AI Seekho — Assignment 3**.

<br/>

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for details.

<br/>

## 📞 Emergency Helplines (Pakistan)

| Service | Number |
|---|---|
| Ministry of Human Rights | **1099** |
| Emergency | **15** |
| Rescue | **1122** |

<br/>

---

<div align="center">

### ⭐ If this project resonates with you, consider giving it a star!

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer" width="100%"/>

</div>
