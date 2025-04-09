# Architext Documentation  
_Made with ♥ by [Zeon Studio](https://zeon.studio/)_

---

## ⚙️ Prerequisites

Before getting started with this template, ensure the following software is installed on your machine:

- [**Hugo Extended v0.144+**](https://gohugo.io/installation/)
- [**Node.js v22+**](https://nodejs.org/en/download/)
- [**Go v1.24+**](https://go.dev/doc/install)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone repo_url
cd folder_name
```

Replace `repo_url` and `folder_name` with the actual repository URL and folder name.

### 2. Install Dependencies

Install all required Node packages:

```bash
npm install
```

### 3. Run the Development Server

Start the development server with:

```bash
npm run dev
```

Your project should now be running locally. Open your browser and go to `http://localhost:1313` to see it in action.

---

## 🛠️ Customization Guide

This template is designed to be highly customizable. You can easily update key parts of your site using the instructions below.

### 📄 Site Configuration

All core site settings (title, base URL, language, theme, etc.) can be updated in the `hugo.toml` file.

### ⚙️ Site Parameters

To customize elements like:

- Logo  
- Favicon  
- Search settings  
- SEO metadata  
- Footer info  

Edit the `config/_default/params.toml` file.

### 🎨 Colors & Fonts

To change theme colors and fonts:

- Edit the `data/theme.json` file.
- Customize the primary/secondary colors, font family, and font sizes as needed.

### 🔗 Social Links

To update social profiles:

- Open the `data/social.json` file.
- Add or remove your social media URLs.  
These links will be automatically displayed across the site where applicable.

---

## ✍️ Content Management

### 📝 Essays

- Location: `content/english/essays/`  
- Format: Follow the structure used in `post-1.md`.  
- You can freely add or delete essay files based on your needs.

### 📌 TIL (Today I Learned)

- Location: `content/english/til/`  
- Add or remove TIL entries using the same approach as essays.

### 🗂️ Categories

- Location: `content/english/categories/`  
- File Naming: Use lowercase filenames that match the category title.  
  Example: A category titled `Design` should have a file named `design.md`.  
- In essay front matter, refer to categories using the **title case used in the category file**.

### 💡 Shortcodes & Markdown Examples

- Reference: `content/english/pages/elements.md`  
- This file demonstrates how to use all available shortcodes and markdown formatting options in this theme.

---
