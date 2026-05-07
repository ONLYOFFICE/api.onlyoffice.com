import { SamplesGrid } from "@site/src/components/SamplesGrid";
import { BlogGrid } from "@site/src/components/BlogGrid";
import ClockIcon from "@site/static/icons/clock-icon.svg";
import CodeIcon from "@site/static/icons/code-icon.svg";
import ChatIcon from "@site/static/icons/chat-icon.svg";

export type Samples = {
  items: SamplesGrid.Item[]
};

export type BlogArticles = {
  items: BlogGrid.Item[]
};

export const Samples: Samples = {
  items: [
    // ── Favorite ──
    {
      icon: <ClockIcon />,
      title: 'Creating advanced form',
      category: 'favorites',
      description: (
        <>
          Creates advanced form with table structure using Document Builder.
        </>
      ),
      features: [
        'Table-based form layout',
        'Input fields and checkboxes',
        'Cross-platform generation',
      ],
      viewLink:'https://github.com/ONLYOFFICE/document-builder-samples/blob/master/cpp/creating_advanced_form/main.cpp',
      tags: [
        { label: 'Docs', variant: 'blue' },
        { label: 'Builder', variant: 'blue' },
        { label: 'PDF', variant: 'pink' },
        { label: 'C++', variant: 'purple' },
      ],
    },
    {
      icon: <CodeIcon />,
      title: 'Inserting Pivot Table',
      category: 'favorites',
      description: (
        <>
          This AI tool inserts a pivot table into the specified range.
        </>
      ),
      features: [
        'Summarize and group data',
        'Custom range selection',
        'AI-powered automation',
      ],
      viewLink:'/docs/ai/samples/custom-ai-tools/spreadsheet-editor/insert-pivot-table/',
      tags: [
        { label: 'Docs', variant: 'blue' },
        { label: 'Plugins', variant: 'blue' },
        { label: 'AI Tools', variant: 'pink' },
        { label: 'Spreadsheets', variant: 'green' },
      ],
    },
    {
      icon: <ChatIcon />,
      title: 'Working with comments',
      category: 'favorites',
      description: (
        <>
          Collects all the comments from the document and displays them in a custom interface.
        </>
      ),
      features: [
        'External document access',
        'Custom comment UI',
        'Real-time collaboration',
      ],
      viewLink:'/docs/docs-api/samples/automation-api/working-with-comments/',
      tags: [
        { label: 'Docs', variant: 'blue' },
        { label: 'Integration', variant: 'purple' },
        { label: 'External access', variant: 'green' },
        { label: 'Automation API', variant: 'blue' },
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
