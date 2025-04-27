# Tiercel Education Consulting Website

[![Tiercel Consulting Logo](src/assets/logo.png)]() <!-- Optional: Add a path to your logo if you have one -->

This repository contains the source code for the official website of Tiercel Education Consulting. Tiercel Consulting helps students navigate the journey of studying abroad, offering guidance for admission to top universities in the UK, USA, Canada, Ireland, Australia, and Europe.

## ✨ Features

*   **Informative Pages:** Detailed sections covering Services ([src/pages/Services.tsx](src/pages/Services.tsx)), Destinations ([src/pages/Destinations.tsx](src/pages/Destinations.tsx)), About Us ([src/pages/AboutUs.tsx](src/pages/AboutUs.tsx)), IELTS ([src/pages/IELTS.tsx](src/pages/IELTS.tsx)), and PTE ([src/pages/PTE.tsx](src/pages/PTE.tsx)).
*   **Blog Section:** Articles on relevant topics like Top Universities ([src/pages/blog/TopUniversities.tsx](src/pages/blog/TopUniversities.tsx)) and Scholarship Opportunities ([src/pages/blog/ScholarshipOpportunities.tsx](src/pages/blog/ScholarshipOpportunities.tsx)).
*   **Consultation Booking:** An easy-to-use form ([src/pages/Consultation.tsx](src/pages/Consultation.tsx)) for prospective students to request a consultation.
*   **Responsive Design:** Adapts to various screen sizes using Tailwind CSS and a custom hook ([src/hooks/use-mobile.tsx](src/hooks/use-mobile.tsx)).
*   **Interactive Components:** Engaging UI elements like testimonials ([src/components/landing/Progress.tsx](src/components/landing/Progress.tsx)) and service highlights ([src/components/landing/Services.tsx](src/components/landing/Services.tsx)).

## 🚀 Tech Stack

*   **Frontend Framework:** React ([https://react.dev/](https://react.dev/))
*   **Language:** TypeScript ([https://www.typescriptlang.org/](https://www.typescriptlang.org/))
*   **Build Tool:** Vite ([https://vitejs.dev/](https://vitejs.dev/))
*   **Styling:** Tailwind CSS ([https://tailwindcss.com/](https://tailwindcss.com/))
*   **UI Components:** Shadcn/ui ([https://ui.shadcn.com/](https://ui.shadcn.com/)) (based on `components.json`)
*   **Linting/Formatting:** ESLint ([https://eslint.org/](https://eslint.org/))

## 🛠️ Getting Started

### Prerequisites

*   Node.js (v18 or later recommended)
*   Bun ([https://bun.sh/](https://bun.sh/)) or npm/yarn

### Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd tiercel-journey
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    # or
    # npm install
    ```

3.  **Run the development server:**
    ```bash
    bun dev
    # or
    # npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Building for Production

```bash
bun run build
# or
# npm run build
```
This command generates a `dist` folder with the optimized production build.

## 📞 Contact Tiercel Consulting

*   **Website:** [https://www.tierceledconsulting.com](https://www.tierceledconsulting.com) (Update with actual URL when live)
*   **Email:** info@tierceledconsulting.com ([src/components/landing/Footer.tsx](src/components/landing/Footer.tsx))
*   **Phone:** +92 321 052 8888 ([src/components/landing/Footer.tsx](src/components/landing/Footer.tsx))
*   **Address:** 237/1-FF CCA, Phase 4 DHA, Lahore, Pakistan ([src/components/landing/Footer.tsx](src/components/landing/Footer.tsx))

---

Powered by [ProcessJunction Pvt. Ltd](https://www.processjunction.com) ([src/components/landing/Footer.tsx](src/components/landing/Footer.tsx))