import React from 'react';

import { CallToAction } from '../components/layout/CallToAction';
import { DemoSection } from '../components/home/Demo';
import { FAQSection } from '../components/home/FAQ';
import { FeatureArbitration } from '../components/home/FeatureArbitration';
import { FeatureCrypto } from '../components/home/FeatureCrypto';
import { FeatureEscrow } from '../components/home/FeatureEscrow';
import { FeatureInvoice } from '../components/home/FeatureInvoice';
import { HeroSection } from '../components/home/Hero';
import { Layout } from '../components/layout/Layout';
import { StoryOverviewSection } from '../components/home/StoryOverview';
import { Testimonials } from '../components/home/Testimonials';
import { HomeMeta } from '../components/layout/Head';

export default function Home() {
  return (
    <Layout title="Smart Invoice | Crypto Invoicing & Escrow Software" metatags={<HomeMeta/>}>
      <HeroSection maxWidth={1400} />
      <FeatureCrypto maxWidth={1400} />
      <FeatureInvoice maxWidth={1400} />
      <FeatureEscrow maxWidth={1400} />
      <FeatureArbitration maxWidth={1400} />
      <Testimonials maxWidth={1400} />
      <DemoSection maxWidth={1400} />
      <StoryOverviewSection maxWidth={1400} />
      <FAQSection maxWidth={1400} />
      <CallToAction maxWidth={1400} />
    </Layout>
  );
}
