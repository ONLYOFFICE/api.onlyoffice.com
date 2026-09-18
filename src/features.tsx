import type { ReactNode } from "react";
import SdkIcon from "@site/static/icons/javascript-sdk-icon.svg";
import PluginIcon from "@site/static/icons/plugins-icon.svg";
import DocsApiIcon from "@site/static/icons/docs-api-icon.svg";
import DocSpaceApiIcon from "@site/static/icons/docspace-api-icon.svg";
import OfficeApiIcon from "@site/static/icons/office-api-icon.svg";
import HostingIcon from "@site/static/icons/self-hosted-icon.svg";
import MacrosIcon from "@site/static/icons/code-icon.svg";
import AiIcon from "@site/static/icons/ai-icon.svg";
import { FeaturesGrid } from "@site/src/components/FeaturesGrid";
import DocumentBuilderIcon from "@site/static/icons/document-builder-icon.svg";
import DesktopEditorIcon from "@site/static/icons/desktop-editors-icon.svg";
import MCPServerIcon from "@site/static/icons/mcp-server-icon.svg";
import {
  docsSections,
  docspaceSections,
  workspaceSections,
  type SectionGroup,
  type SectionId,
} from "@site/src/sections";

export type Features = {
  linkPrefix: string
  items: FeaturesGrid.Item[]
  button?: FeaturesGrid.Button
};

/** The card icon of every section. Add a section to `sections.ts` and this stops compiling. */
const icons: Record<SectionId, ReactNode> = {
  'docs-api': <DocsApiIcon/>,
  'office-api': <OfficeApiIcon/>,
  'plugins': <PluginIcon/>,
  'macros': <MacrosIcon/>,
  'ai': <AiIcon/>,
  'document-builder': <DocumentBuilderIcon/>,
  'desktop-editors': <DesktopEditorIcon/>,
  'docspace-api': <DocSpaceApiIcon/>,
  'embed-sdk': <SdkIcon/>,
  'plugins-sdk': <PluginIcon/>,
  'mcp-server': <MCPServerIcon/>,
  'workspace-api': <DocSpaceApiIcon/>,
  'workspace-hosting': <HostingIcon/>,
};

/** The cards of one group: names and descriptions come from `sections.ts`, icons from here. */
function toFeatures<Id extends SectionId>(
  group: SectionGroup<Id>,
  button?: FeaturesGrid.Button,
): Features {
  return {
    linkPrefix: group.linkPrefix,
    button,
    items: group.items.map(({ id, name, link, description }) => ({
      title: name,
      link,
      description,
      icon: icons[id],
    })),
  };
}

export const DocsFeatures: Features = toFeatures(docsSections, {
  text: "Try Docs Playground",
  href: "/playground/?script=config",
});

export const DocSpaceFeatures: Features = toFeatures(docspaceSections, {
  text: "Try DocSpace Playground",
  href: "/docspace-playground/",
});

export const WorkspaceFeatures: Features = toFeatures(workspaceSections);

export const SamplesFeatures: Features = {
  linkPrefix: 'samples',
  items: []
}
