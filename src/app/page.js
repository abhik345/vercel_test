import AllComponent from "@/page/Allcomponent";
import Script from "next/script";

export async function generateMetadata() {
  return {
    title: "Pramod Maloo - Teamwork Makes The Dreamwork",
    description: "Pramod Maloo, CEO and founder of Kreative Machinez, is a serial entrepreneur, speaker, and digital marketing leader with an MBA in marketing. A visionary branding consultant and online strategist.",
    robots: "index, follow",
    openGraph: {
      type: "website",
      title: "Pramod Maloo - Teamwork Makes The Dreamwork",
      description: "Pramod Maloo, a serial entrepreneur and marketing expert, is the founder of Kreative Machinez. With an MBA in marketing, he excels as a speaker, visionary digital thinker, and branding consultant.",
      images: [
        {
          url: "https://api.pramodmaloo.com/wp-content/uploads/2024/09/image.png",
          width: 1200,
          height: 630,
          alt: "PDF document thumbnail",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Pramod Maloo - Teamwork Makes The Dreamwork",
      description: "Pramod Maloo, a serial entrepreneur and marketing expert, is the founder of Kreative Machinez. With an MBA in marketing, he excels as a speaker, visionary digital thinker, and branding consultant.",
      images: ["https://api.pramodmaloo.com/wp-content/uploads/2024/09/image.png"],
    },
    verification: {
      google: "u72ox-h-JJHNQvzRwwng0Lno_tTR8-4sHc2GGvJlrXw",
    },
  };
}

export default function Home() {
  return (
    <>
      <AllComponent />
      <Script
        id="gtm"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-55WJHQ4V');
          `,
        }}
      />
    </>
  );
}
