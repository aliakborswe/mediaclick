# MediaClick - Digital Agency Platform

MediaClick is a modern, high-performance digital agency platform built with Next.js 16, React 19, and Tailwind CSS. It features a sophisticated design with interactive animations, a dynamic portfolio, and comprehensive service offerings.

## 🚀 Built With

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Motion (Framer Motion)](https://motion.dev/) & [Animate.css](https://animate.style/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## ✨ Key Features

- **Interactive UI**: Fluid animations and transitions powered by Motion.
- **Dynamic Content**: Services, portfolios, and blogs driven by local JSON data.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Theme Support**: Dark and light mode integration via `next-themes`.
- **Advanced Layouts**: Custom sections for Hero, Stats, Services, Why Us, Work Process, Portfolio, Testimonials, and Insights.
- **Case Studies**: Detailed portfolio pages with gallery and client testimonials.
- **Career & Internships**: Dedicated sections for joining the team.

## 📁 Project Structure

```text
├── app/              # Next.js App Router (pages and layouts)
├── assets/           # Static assets (images, svgs)
├── components/       # Reusable React components
│   ├── home/         # Home page specific sections
│   ├── shared/       # Shared UI patterns (AnimatedSection, HeroContent, etc.)
│   ├── ui/           # Basic UI components (button, badge, card, etc.)
│   └── layout/       # Global Layout components (Navbar, Footer)
├── lib/              # Data fetching utilities and helper functions
├── public/           # Static files and JSON data sources
├── types/            # TypeScript declarations
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20 or later
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd mediaclick
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Data Management

The project uses local JSON files in the `public/` directory for managing content, making it easy to update without touching the code:

- `services.json`: Service offerings and details.
- `projects.json`: Portfolio items and case studies.
- `blogs.json`: Blog posts and insights.

## 📜 Available Scripts

- `pnpm dev`: Runs the app in development mode.
- `pnpm build`: Builds the app for production.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs ESLint for code quality checks.

## 📝 License

This project is private and for internal use.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
