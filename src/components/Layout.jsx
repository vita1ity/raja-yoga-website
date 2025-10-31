import React, { useEffect } from "react";

export default function Layout({ children, currentPageName }) {
  useEffect(() => {
    // Set meta tags dynamically
    document.title = "Raja Yoga - Курс Королівської Йоги | Духовний Розвиток та Медитація";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Автентичний онлайн курс Раджа Йоги на 8 тижнів. Навчіться медитації, асанам, пранаямам та духовним практикам. Покрокове навчання від досвідченого інструктора на Тенеріфе. 88€");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Автентичний онлайн курс Раджа Йоги на 8 тижнів. Навчіться медитації, асанам, пранаямам та духовним практикам. Покрокове навчання від досвідченого інструктора на Тенеріфе. 88€";
      document.head.appendChild(meta);
    }
    
    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "раджа йога, королівська йога, курс йоги, медитація, пранаяма, асани, духовний розвиток, онлайн йога, йога навчання, йога курс україна");
    } else {
      const meta = document.createElement('meta');
      meta.name = "keywords";
      meta.content = "раджа йога, королівська йога, курс йоги, медитація, пранаяма, асани, духовний розвиток, онлайн йога, йога навчання, йога курс україна";
      document.head.appendChild(meta);
    }
    
    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Raja Yoga - Курс Королівської Йоги");
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute("property", "og:title");
      meta.content = "Raja Yoga - Курс Королівської Йоги";
      document.head.appendChild(meta);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Автентичний онлайн курс Раджа Йоги на 8 тижнів. Навчіться медитації, асанам, пранаямам та духовним практикам.");
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute("property", "og:description");
      meta.content = "Автентичний онлайн курс Раджа Йоги на 8 тижнів. Навчіться медитації, асанам, пранаямам та духовним практикам.";
      document.head.appendChild(meta);
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute("content", "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ff94128c7b01ef8df60cce/20e3577cc_logo.png");
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute("property", "og:image");
      meta.content = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ff94128c7b01ef8df60cce/20e3577cc_logo.png";
      document.head.appendChild(meta);
    }
    
    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute("content", "website");
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute("property", "og:type");
      meta.content = "website";
      document.head.appendChild(meta);
    }
    
    // Twitter Card tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (twitterCard) {
      twitterCard.setAttribute("content", "summary_large_image");
    } else {
      const meta = document.createElement('meta');
      meta.name = "twitter:card";
      meta.content = "summary_large_image";
      document.head.appendChild(meta);
    }
    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", "Raja Yoga - Курс Королівської Йоги");
    } else {
      const meta = document.createElement('meta');
      meta.name = "twitter:title";
      meta.content = "Raja Yoga - Курс Королівської Йоги";
      document.head.appendChild(meta);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", "Автентичний онлайн курс Раджа Йоги на 8 тижнів. Навчіться медитації, асанам, пранаямам та духовним практикам.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "twitter:description";
      meta.content = "Автентичний онлайн курс Раджа Йоги на 8 тижнів. Навчіться медитації, асанам, пранаямам та духовним практикам.";
      document.head.appendChild(meta);
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute("content", "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ff94128c7b01ef8df60cce/20e3577cc_logo.png");
    } else {
      const meta = document.createElement('meta');
      meta.name = "twitter:image";
      meta.content = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ff94128c7b01ef8df60cce/20e3577cc_logo.png";
      document.head.appendChild(meta);
    }
    
    // Language
    document.documentElement.lang = "uk";
    
    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Raja Yoga - Курс Королівської Йоги",
      "description": "Автентичний онлайн курс Раджа Йоги на 8 тижнів. Вивчіть медитацію, асани, пранаями та духовні практики за автентичними методами древньої Індії.",
      "provider": {
        "@type": "Person",
        "name": "Віталій Олексів",
        "description": "Інструктор йоги та медитації з багаторічним досвідом практики"
      },
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ff94128c7b01ef8df60cce/20e3577cc_logo.png",
      "offers": {
        "@type": "Offer",
        "price": "88",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "category": "Онлайн курс"
      },
      "courseMode": "Online",
      "educationalLevel": "Beginner to Advanced",
      "timeRequired": "P8W",
      "numberOfLessons": 8,
      "inLanguage": "uk",
      "teaches": [
        "Медитація",
        "Асани",
        "Пранаями",
        "Філософія йоги",
        "Духовний розвиток"
      ]
    };
    
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(structuredData);
    } else {
      scriptTag = document.createElement('script');
      scriptTag.type = "application/ld+json";
      scriptTag.textContent = JSON.stringify(structuredData);
      document.head.appendChild(scriptTag);
    }

    // Load WeStudy script
    const westudyScript = document.createElement('script');
    westudyScript.src = "https://api.avalon.westudy.ua/button_enroll.js";
    westudyScript.async = true;
    document.body.appendChild(westudyScript);

    return () => {
      if (westudyScript.parentNode) {
        westudyScript.parentNode.removeChild(westudyScript);
      }
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @font-face {
          font-family: 'Higuen Elegant Serif';
          src: url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.eot');
          src: url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.eot?#iefix') format('embedded-opentype'),
               url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.woff2') format('woff2'),
               url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.woff') format('woff'),
               url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.ttf') format('truetype');
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Higuen Elegant Serif';
          src: url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.eot');
          src: url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.eot?#iefix') format('embedded-opentype'),
               url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.woff2') format('woff2'),
               url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.woff') format('woff'),
               url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.ttf') format('truetype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Higuen Elegant Serif';
          src: url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.eot');
          src: url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.eot?#iefix') format('embedded-opentype'),
               url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.woff2') format('woff2'),
               url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.woff') format('woff'),
               url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.ttf') format('truetype');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Higuen Elegant Serif';
          src: url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.eot');
          src: url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.eot?#iefix') format('embedded-opentype'),
               url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.woff2') format('woff2'),
               url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.woff') format('woff'),
               url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.ttf') format('truetype');
          font-weight: 600;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Higuen Elegant Serif';
          src: url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.eot');
          src: url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.eot?#iefix') format('embedded-opentype'),
               url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.woff2') format('woff2'),
               url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.woff') format('woff'),
               url('https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/higuen-font/Higuen-Regular.ttf') format('truetype');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        
        * {
          font-family: 'Georgia', 'Palatino', 'Times New Roman', serif !important;
        }
        
        body {
          font-family: 'Georgia', 'Palatino', 'Times New Roman', serif !important;
        }
        
        h2, h3, h4, h5, h6 {
          font-family: 'Georgia', 'Palatino', 'Times New Roman', serif !important;
        }
        
        .hero-title {
          font-family: 'Higuen Elegant Serif', 'Cormorant Garamond', serif !important;
        }
        
        button, input, textarea, select {
          font-family: 'Georgia', 'Palatino', 'Times New Roman', serif !important;
        }
        
        @media (min-width: 768px) {
          .about-image-wrapper {
            shape-outside: circle(50%);
            clip-path: circle(50%);
          }
        }
      `}} />
      <div className="min-h-screen">
        {children}
      </div>
    </>
  );
}