import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Story } from '@/components/Story'
import { Compare } from '@/components/Compare'
import { Farms } from '@/components/Farms'
import { Invest } from '@/components/Invest'
import { Sustainability } from '@/components/Sustainability'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  head: () => {
    const title = 'Dairyfy — Pure Milk. No Middlemen.'

    const description =
      'Fresh ethical dairy delivered directly from our farms to your home. No preservatives. No middlemen. Just milk, the way it was meant to be.'

    const url = 'https://www.dairyfy.me/'

    const image = 'https://www.dairyfy.me/og-image.jpeg'

    return {
      meta: [
        // Primary SEO
        {
          title,
        },

        {
          name: 'description',
          content: description,
        },

        {
          name: 'keywords',
          content:
            'Dairyfy, pure milk, farm fresh milk, dairy delivery, organic milk, ethical dairy, milk delivery India',
        },

        {
          name: 'robots',
          content: 'index, follow',
        },

        {
          name: 'author',
          content: 'Dairyfy',
        },

        {
          name: 'theme-color',
          content: '#000000',
        },

        // Open Graph
        {
          property: 'og:type',
          content: 'website',
        },

        {
          property: 'og:url',
          content: url,
        },

        {
          property: 'og:title',
          content: title,
        },

        {
          property: 'og:description',
          content:
            'Premium farm-to-home dairy. Transparent. Ethical. Scientifically farmed since 2016.',
        },

        {
          property: 'og:image',
          content: image,
        },

        {
          property: 'og:site_name',
          content: 'Dairyfy',
        },

        {
          property: 'og:locale',
          content: 'en_IN',
        },

        // Twitter SEO
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },

        {
          name: 'twitter:title',
          content: title,
        },

        {
          name: 'twitter:description',
          content: description,
        },

        {
          name: 'twitter:image',
          content: image,
        },

        // Mobile SEO
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],

      links: [
        {
          rel: 'canonical',
          href: url,
        },
      ],

      scripts: [
        // Meta Pixel
        {
          children: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', 'YOUR_META_PIXEL_ID');
            fbq('track', 'PageView');
          `,
        },

        // Structured Data SEO
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Dairyfy',
            url,
            logo: image,
            description,
          }),
        },
      ],
    }
  },

  component: Home,
})

function Home() {
  return (
    <main className="">
      <Nav />
      <Hero />
      <Story />
      <Compare />
      <Farms />
      <Invest />
      <Sustainability />
      <Footer />

      {/* Meta Pixel NoScript */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=YOUR_META_PIXEL_ID&ev=PageView&noscript=1"
        />
      </noscript>
    </main>
  )
}
