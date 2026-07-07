/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { SocialSection } from './components/SocialSection';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieConsent } from './components/CookieConsent';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-purple-500/30">
      <Navigation />
      <main>
        <Hero />
        <InfoSection />
        <Services />
        <Gallery />
        <SocialSection />
        <Reviews />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
}
