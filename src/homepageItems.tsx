import { SamplesGrid } from "@site/src/components/SamplesGrid";
import Link from '@docusaurus/Link';

export type Features = {
  items: SamplesGrid.Item[]
};

export const Samples: Features = {
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