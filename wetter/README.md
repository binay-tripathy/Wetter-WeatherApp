# 🌤️ WETTER - Modern Weather App

A beautiful, responsive weather application built with React and Vite that provides real-time weather information for any location worldwide.

![Weather App Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-4.4.5-yellow) ![License](https://img.shields.io/badge/License-Open%20Source-green)

## ✨ Features

- 🌍 **Global Weather Data** - Get weather information for any city worldwide
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Beautiful UI** - Modern gradient backgrounds with particle animations
- ⚡ **Fast Performance** - Built with Vite for lightning-fast loading
- 🔒 **Secure** - Environment-based API key management
- 🎯 **Location Search** - Easy city/location search functionality

## 🚀 Live Demo

[View Live Demo](https://wetter-ji4t.onrender.com) 

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: CSS3
- **Build Tool**: Vite
- **API**: WeatherAPI.com
- **Deployment**: Render

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A free API key from [WeatherAPI.com](https://www.weatherapi.com/)

## 🔧 Installation & Setup

### Fork & Clone

1. **Fork this repository**
   - Click the "Fork" button at the top right of this repository
   - This creates a copy in your GitHub account

2. **Clone your forked repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Wetter-WeatherApp.git
   cd wetter-weather-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Get your API key**
   - Visit [WeatherAPI.com](https://www.weatherapi.com/)
   - Create a free account
   - Copy your API key from the dashboard

5. **Set up environment variables**
   ```bash
   # Create .env file in the root directory
   touch .env
   
   # Add your API key (replace with your actual key)
   echo "VITE_WEATHER_API_KEY=your_api_key_here" > .env
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   - Navigate to `http://localhost:3000`
   - Your weather app should be running! 🎉


## 🔐 Environment Variables Setup

Create a `.env` file in your project root:

```env
VITE_WEATHER_API_KEY=your_actual_api_key_here
```

**⚠️ Important**: Never commit your `.env` file to GitHub! It's already included in `.gitignore`.

## 🛡️ Security Features

- **Environment Variables**: API keys stored securely
- **Input Validation**: All user inputs are validated
- **XSS Protection**: React's built-in XSS prevention
- **HTTPS**: Secure API calls only
- **No Data Storage**: No sensitive user data stored

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

## 📝 Project Structure

```
wetter-weather-app/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
│   ├── App.css         # App styles
│   └── index.css       # Global styles
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore file
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── LICENSE             # MIT License
└── README.md           # You are here!
```

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

## 🙏 Acknowledgments

- [WeatherAPI.com](https://www.weatherapi.com/) for providing weather data
- [React](https://reactjs.org/) for the amazing framework
- [Vite](https://vitejs.dev/) for the blazing fast build tool

## 📞 Support

If you have any questions or run into issues:

1. Check the [Issues](https://github.com/binay-tripathy/Wetter-WeatherApp/issues) page
2. Create a new issue if your problem isn't listed
3. Provide detailed information about your setup and the error

---

⭐ If you found this project helpful, please give it a star!

**Happy coding!** 🌟

