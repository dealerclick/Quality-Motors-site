# Dealer Site Gatsby Template

[![Netlify Status](https://api.netlify.com/api/v1/badges/8b0b0b0a-4b0a-4b0a-8b0a-4b0a4b0a4b0a/deploy-status)](https://app.netlify.com/sites/dealer-site-template-gatsby/deploys)

The Dealer Site Template Gatsby is designed to empower car dealers with a feature-rich website. This template is equipped with various functionalities such as car inventory management, filter options, financing information, and more. Below are the instructions to get started.

## 🚀 Quick start

### 1\. Clone Repo

Start by cloning our template repository.

```shell
git clone https://github.com/dealerclick/dealer-site-template-gatsby
```

### 2\. Adjust Configurations

Navigate and adjust the following configurations:

**src/config.js**: Customize general site settings, such as site title, theme colors, logo, etc.

**gatsby-config.js**: Configure plugins, metadata, and other Gatsby-specific settings.

**package.json**: Modify the package details, such as dependencies, scripts, etc.

### 3\. Add Environment Variables

Environment variables are essential to store sensitive data like API keys.

Create `.env.development` and `.env.production` files in the project root. Use the provided `.env.example` file as a template to define your variables.

### 4\. Configure Netlify for Continuous Deployment

#### a. Create a Netlify Site

Create a new site in Netlify and link it to your GitHub repository to enable continuous deployment.

#### b. Login to Netlify CLI

```bash
netlify login
```

#### c. Link your Site to the Repo

```bash
netlify env:import .env.productio
```

#### d. Continuous Deployment

Push your changes to the GitHub master branch, and Netlify will automatically build and deploy your site.

## 🏗️ Project Structure

A high-level overview of the project structure:

- `src/`: Main source folder containing all your React components.
  - `components/`: Reusable components, such as Header, Footer, Sidebar, etc.
  - `pages/`: Page components for routing.
  - `utils/`: Utility functions and constants.
  - `styles/`: Theme and styling configurations.
- `gatsby-config.js`: Main Gatsby configuration file.
- `package.json`: Project dependencies and scripts.

## 🧩 Features

- **Responsive Design**: Adapts to various screen sizes.
- **Car Inventory Management**: List, filter, and sort vehicles.
- **SEO Friendly**: Built-in SEO optimizations.
- **Dark Mode Toggle**: Switch between light and dark modes.
- **Integration with Netlify**: Continuous deployment setup.

## 📚 Resources

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [Netlify Documentation](https://docs.netlify.com/)
- [Theme-UI](https://theme-ui.com/)

## 🛠️ Support

For any queries, issues, or support, please reach out to our [Support Team](mailto:support@dealerclick.com).

## 📃 License

This project is not licensed.
