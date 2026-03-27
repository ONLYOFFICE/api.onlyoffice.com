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
          This <Link to="/samples/docs/plugin-and-macros/custom-ai-tools/spreadsheet-editor/insertPivotTable/">AI tool</Link> inserts a pivot table into the specified range or the currently selected range. This tool can be used to summarize, group, or aggregate data by rows and values.
        </>
      ),
      seeSamples: [
        {
          name: "AI tools",
          link: "/samples/docs/plugin-and-macros/custom-ai-tools/#spreadsheet-editor",
        },
      ],
    },
    {
      title: 'Working with comments',
      description: (
        <>
          Collects all the <Link to="/samples/docs/docs-api/external-access-to-the-document-editing/working-with-comments/">comments</Link> from the document and displays them in the custom interface.
        </>
      ),
      seeSamples: [
        {
          name: "Automation API",
          link: "/samples/docs/docs-api/external-access-to-the-document-editing/",
        },
      ],
    },
  ]
}

export const BlogArticles: BlogArticles = {
  items: [
    {
      title: 'How to write an ONLYOFFICE plugin with AI: the OData Import plugin case',
      link: "https://www.onlyoffice.com/blog/2026/03/how-to-write-an-onlyoffice-plugin-with-ai-odata-import",
      imgHref: "/img/homepage-blog/odata-import-plugin-768x393.png",
    },
    {
      title: 'Manipulate PDF content with new ONLYOFFICE PDF Editor API',
      link: "https://www.onlyoffice.com/blog/2026/03/manipulate-pdf-content-with-new-onlyoffice-pdf-editor-api",
      imgHref: "/img/homepage-blog/manipulate-pdf-768x390.png",
    },
    {
      title: 'How to handle async API calls inside ONLYOFFICE custom functions',
      link: "https://www.onlyoffice.com/blog/2025/07/how-to-handle-async-api-calls-inside-onlyoffice-custom-functions",
      imgHref: "/img/homepage-blog/async-api-768x388.png",
    },
  ]
}