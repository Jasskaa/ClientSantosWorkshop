/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-purple-500/30">
      <Navigation />
      <main>
        <Hero />
        <InfoSection />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
