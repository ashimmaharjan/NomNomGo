
# 🍽️ NomNomGo  

**NomNomGo** is a food delivery mobile app inspired by popular platforms like Deliveroo, Uber Eats, and Menulog. Designed with a personalized twist, this app aims to make food delivery not only efficient but also delightful!  

## 🚀 Features  

- **Home Screen**: Displays categories, featured offers, and restaurants using data from Sanity CMS.  
- **Restaurant Page**: View restaurant details along with available dishes.  
- **Basket Functionality**:  
  - Add and remove items with dynamic price calculation.  
  - State managed using Redux for seamless updates.  
- **Order Preparation**: A sleek, animated screen to indicate order preparation progress.  
- **Delivery Tracking**:  
  - Displays order ETA and delivery rider details.  
  - Integrated with **React Native Maps** for real-time restaurant location visualization.  
- **Reusable Components**: Modular design for dishes, restaurants, and featured offers.  

## 🛠️ Technologies  

- **React Native**: Core framework for building cross-platform mobile apps.  
- **Expo**: Simplifies the development and debugging process.  
- **Tailwind CSS**: For fast and efficient styling.  
- **Sanity CMS**: Manages app content dynamically, such as restaurant details and offers.  
- **Redux**: Handles state management (e.g., basket, restaurant details).  
- **React Native Maps**: For map views and location tracking.  
- **React Native Heroicons**: Adds icons to enhance the UI.  
- **React Native Progress**: For loader components.  

## 📖 How It Works  

1. **Sanity Integration**:  
   - App data (restaurants, dishes, categories, and offers) is dynamically fetched from **Sanity CMS** using **GROQ queries**.  
2. **Basket Management**:  
   - State is managed via **Redux** to track added items and update totals dynamically.  
3. **Map View**:  
   - A restaurant’s location is displayed with a pin using **React Native Maps**.   

## 🏗️ Getting Started  

### Prerequisites  

- Install [Node.js](https://nodejs.org/)  
- Install [Expo CLI](https://docs.expo.dev/get-started/installation/)  

### Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/ashimmaharjan/NomNomGo.git
   cd NomNomGo
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. Start the Expo development server:  
   ```bash
   expo start
   ```  

4. Scan the QR code from your terminal or Expo DevTools with the Expo Go app on your mobile device.  

## 🤝 Contributing  

Contributions are welcome! Feel free to submit a pull request or open an issue if you find a bug or have a feature suggestion.  

## 💡 Future Plans  

- Add user authentication and profiles.  
- Introduce payment gateway integration.  
- Expand map functionality for live tracking.  

## 🧑‍💻 Author  

**Ashim Maharjan**  
[GitHub](https://github.com/ashimmaharjan)  

---  

*Built with 💖 and a whole lot of 🍕 cravings!*  
