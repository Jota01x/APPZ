import { Navbar, Hero } from "./components/MainSections.tsx";
import { Pricing, Features } from "./components/FeaturesAndPricing.tsx";
import { Footer, ProcessSteps, FAQ } from "./components/ExtraSections.tsx";
import { Comparison } from "./components/Comparison.tsx";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Comparison />
        <ProcessSteps />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
