import { SamplesGrid } from "@site/src/components/SamplesGrid";
import { BlogGrid } from "@site/src/components/BlogGrid";
import Link from '@docusaurus/Link';

export type Samples = {
  items: SamplesGrid.Item[]
};

export type BlogArticles = {
  items: BlogGrid.Item[]
};


export const Samples: Samples = {
  items: [
    {
      title: 'Creating advanced form',
      description: (
        <>
          Creates advanced form with table structure.
        </>
      ),
      seeSamples: [
        {
          name: "C++",
          link: "https://github.com/ONLYOFFICE/document-builder-samples/blob/master/cpp/creating_advanced_form/main.cpp",
        },
        {
          name: ".Net",
          link: "https://github.com/ONLYOFFICE/document-builder-samples/blob/master/cs/creating_advanced_form/Program.cs",
        },
      ],
    },
    {
      title: 'Creating commercial offer',
      description: (
        <>
          Generates a personalized commercial offer in DOCX format with client-specific products, services, and timelines.
        </>
      ),
      seeSamples: [
        {
          name: "C++",
          link: "https://github.com/ONLYOFFICE/document-builder-samples/blob/master/cpp/creating_commercial_offer/main.cpp",
        },
        {
          name: ".Net",
          link: "https://github.com/ONLYOFFICE/document-builder-samples/blob/master/cs/creating_commercial_offer/Program.cs",
        },
        {
          name: "Python",
          link: "https://github.com/ONLYOFFICE/document-builder-samples/blob/master/python/creating_commercial_offer/main.py",
        },
        {
          name: "Java",
          link: "https://github.com/ONLYOFFICE/document-builder-samples/blob/master/java/creating_commercial_offer/Program.java",
        },
      ],
    },
    {
      title: 'Highlight code',
      description: (
        <>
          Connects the <Link to="https://highlightjs.org/">highlight.js library</Link> for highlighting code syntax with the necessary language, style, and background color.
        </>
      ),
    },
  ]
}

export const BlogArticles: BlogArticles = {
  items: [
    {
      title: 'API roundup for developers: ONLYOFFICE Docs 9.1 & DocSpace 3.5',
      link: "https://www.onlyoffice.com/blog/2025/10/api-roundup-onlyoffice-docs-9-1-docspace-3-5",
      imgHref: "/img/homepage-blog/api-9.1-768x392.png",
    },
    {
      title: 'A developer’s guide to ONLYOFFICE style and color APIs',
      link: "https://www.onlyoffice.com/blog/2025/11/a-developer-s-guide-to-onlyoffice-style-and-color-apis",
      imgHref: "/img/homepage-blog/styling-article-768x395.png",
    },
    {
      title: 'How to handle async API calls inside ONLYOFFICE custom functions',
      link: "https://www.onlyoffice.com/blog/2025/07/how-to-handle-async-api-calls-inside-onlyoffice-custom-functions",
      imgHref: "/img/homepage-blog/async-api-768x388.png",
    },
  ]
}