import type { SamplesGrid } from '@site/src/components/SamplesGrid';
import docsSamplesData from '@site/src/data/docs-samples.json';
import docsOfficeApiData from '@site/src/data/docs-office-api-samples.json';
import docsPluginsData from '@site/src/data/docs-plugins-samples.json';
import docsMacrosData from '@site/src/data/docs-macros-samples.json';
import docsBuilderData from '@site/src/data/docs-builder-samples.json';
import docsConnectorsData from '@site/src/data/docs-connectors-samples.json';
import docspaceSamplesData from '@site/src/data/docspace-samples.json';
import docspaceJsSdkData from '@site/src/data/docspace-jssdk-samples.json';
import docspacePluginsData from '@site/src/data/docspace-plugins-samples.json';
import docsAiSamplesData from '@site/src/data/docs-ai-samples.json';
import docspaceAiSamplesData from '@site/src/data/docspace-ai-samples.json';

function sortByTitle(items: SamplesGrid.Item[]): SamplesGrid.Item[] {
  const keys = new Map(items.map((item) => [item, item.title.replace(/^[^a-zA-Z]+/, '')]));
  return items.sort((a, b) => keys.get(a)!.localeCompare(keys.get(b)!));
}

function toItems(data: typeof docsSamplesData, category: string, defaultTags?: SamplesGrid.Tag[]): SamplesGrid.Item[] {
  return data.map((doc) => {
    const tagVariants: Record<string, SamplesGrid.Tag['variant']> = {
      'Docs': 'blue',
      'Documents': 'purple',
      'Spreadsheets': 'green',
      'Presentations': 'purple',
      'PDF': 'pink',
      'Macros': 'blue',
      'Plugins': 'blue',
      'DocSpace': 'blue',
      'Basic': 'green',
      'Advanced': 'purple',
      'Ready-to-use': 'pink',
      'Embed SDK': 'green',
      'Integration': 'purple',
      'External access': 'green',
      'Automation API': 'blue',
      'Office API': 'blue',
      'Builder': 'blue',
      'REST API': 'green',
      'MCP Server': 'green',
      'AI': 'pink',
      'AI Tools': 'pink',
      'React': 'pink',
    };
    const docTags: SamplesGrid.Tag[] = (doc as any).tags?.map((t: string) => ({ label: t, variant: tagVariants[t] ?? 'default' })) ?? [];
    return {
      title: doc.title,
      description: doc.description,
      viewLink: doc.path,
      tags: [...(defaultTags ?? []), ...docTags],
      category,
    };
  });
}

export function getDocsSamples(category: string): SamplesGrid.Item[] {
  return sortByTitle([
    ...toItems(docsSamplesData, category),
    ...toItems(docsOfficeApiData, category),
    ...toItems(docsPluginsData, category),
    ...toItems(docsMacrosData, category),
    ...toItems(docsBuilderData, category),
    ...toItems(docsConnectorsData, category),
  ]);
}

export function getDocspaceSamples(category: string): SamplesGrid.Item[] {
  return sortByTitle([
    ...toItems(docspaceSamplesData, category),
    ...toItems(docspaceJsSdkData, category),
    ...toItems(docspacePluginsData, category),
    ...toItems(docspaceAiSamplesData, category),
  ]);
}

export function getAiSamples(category: string): SamplesGrid.Item[] {
  return sortByTitle([
    ...toItems(docsAiSamplesData, category),
    ...toItems(docspaceAiSamplesData, category),
  ]);
}
