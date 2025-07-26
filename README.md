# Haven - Emotional Intelligence Platform

A comprehensive Next.js application for emotional intelligence development and Haven Support support, featuring AI-powered chat interface and crisis detection.

## Features

### 🧠 Emotional Intelligence
- AI-powered emotional intelligence assessment
- Personalized wellness recommendations
- Self-awareness and emotional regulation tools
- Progress tracking and analytics

### 💬 Intelligent Chat Interface
- 24/7 AI emotional support
- Context-aware responses
- Crisis detection and intervention
- Professional mental health resources

### 🚨 Crisis Detection System
- Advanced AI monitoring
- Real-time crisis detection
- Immediate crisis intervention
- Direct connection to crisis resources

### 📱 Mobile-Responsive Design
- Optimized for all devices
- Touch-friendly interface
- Progressive Web App features
- Offline capability

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand
- **Forms**: React Hook Form

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd haven-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
haven-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Landing page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   ├── ChatInterface.tsx   # AI chat component
│   │   └── CrisisDetection.tsx # Crisis detection UI
│   └── lib/                    # Utility functions
├── public/                     # Static assets
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── tsconfig.json              # TypeScript configuration
```

## Key Components

### ChatInterface
- Real-time AI conversation
- Crisis keyword detection
- Emotional intelligence responses
- Crisis resource integration

### CrisisDetection
- AI-powered monitoring
- Crisis resource directory
- Safety feature explanations
- Professional support connections

### Header & Footer
- Responsive navigation
- Brand consistency
- Mobile menu support
- Social media integration

## Crisis Resources

The application includes integration with:
- **National Suicide Prevention Lifeline**: 988
- **Crisis Text Line**: Text HOME to 741741
- **Emergency Services**: 911

## Color Scheme

The app uses a professional color palette:
- **Primary**: Haven Blue (#0ea5e9)
- **Secondary**: Orange (#f2750a)
- **Accent**: Purple (#d946ef)
- **Neutral**: Gray scale

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@haven.com or visit our documentation.

---

**Important**: This application is designed to provide emotional support and crisis detection. It is not a replacement for professional mental health care. In crisis situations, please contact emergency services or a mental health professional immediately.
