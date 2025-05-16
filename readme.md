# Architextual Documentation  
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

### 📌 Field Notes

- Location: `content/english/fn/`  
- Add or remove Field Notes using the same approach as essays.

### 🗂️ Categories

- Location: `content/english/categories/`  
- File Naming: Use lowercase filenames that match the category title.  
  Example: A category titled `Design` should have a file named `design.md`.  
- In essay front matter, refer to categories using the **title case used in the category file**.

### 💡 Shortcodes & Markdown Examples

- Reference: `content/english/pages/elements.md`  
- This file demonstrates how to use all available shortcodes and markdown formatting options in this theme.

---


### 👉 Deploy Site

We have provided 5 different deploy platform configurations with this template, so you can deploy easily.

- [AWS Amplify](https://aws.amazon.com/amplify/)

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Github Actions](https://github.com/features/actions)
- [Gitlab Ci](https://docs.gitlab.com/ee/ci/)

And if you want to Host some other hosting platforms. then you can build your project, and you will get a `public` folder. that you can copy and paste on your hosting platform.

> **Note:** You must change the `baseURL` in the `hugo.toml` file. Otherwise, your site will not work properly.

### Guideline: Hosting Project on AWS Amplify
> **Note:** First Upload the complete project to your own GitHub repository.

**Make sure you have:**

An AWS account: https://aws.amazon.com/

- Log in to the AWS Management Console.
- Navigate to AWS Amplify service.
- Click “New app” → “Host web app”.
- Choose Git provider (GitHub, GitLab, etc.)
- Authorize Amplify to access your Git provider if you haven't already.
- Select the repository and branch you want to deploy (example: main, dev, etc.)


**After selecting the branch:**
Amplify detects your project type automatically

**Review & Deploy:**

- Click "Save and Deploy".
- Amplify will provision resources and start building your app.

**After the first deployment, you'll get:**

- A public URL like: https://branchname.d1abcdefg.amplifyapp.com
- Automatic build & deploy on every git push.

### Custom Domain Setup

**If you have a custom domain:**

- Go to the Amplify App dashboard.
- Click Domain management → Add domain.
- Connect your domain (AWS Route 53 or external provider like GoDaddy, Namecheap).
- Update your DNS records if needed.