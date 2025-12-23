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
      title: 'Inserting Pivot Table',
      description: (
        <>
          This <Link to="https://api.onlyoffice.com/samples/docs/plugin-and-macros/custom-ai-functions-samples/spreadsheet-editor/insertPivotTable/">AI function</Link> inserts a pivot table into the specified range or the currently selected range. This function can be used to summarize, group, or aggregate data by rows and values.
        </>
      ),
      seeSamples: [
        {
          name: "AI functions",
          link: "https://api.onlyoffice.com/samples/docs/plugin-and-macros/custom-ai-functions-samples/#spreadsheet-editor",
        },
      ],
    },
    {
      title: 'Working with comments',
      description: (
        <>
          Collects all the <Link to="https://api.onlyoffice.com/samples/docs/docs-api/external-access-to-the-document-editing/working-with-comments/ ">comments</Link> from the document and displays them in the custom interface.
        </>
      ),
      seeSamples: [
        {
          name: "Automation API",
          link: "https://api.onlyoffice.com/samples/docs/docs-api/external-access-to-the-document-editing/ p",
        },
      ],
    },
  ]
}

export const BlogArticles: BlogArticles = {
  items: [
    {
      title: 'ONLYOFFICE API updates: What’s new in December 2025',
      link: "https://www.onlyoffice.com/blog/2025/12/api-updates-december-2025",
      imgHref: "/img/homepage-blog/api-december-2025-768x388.png",
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