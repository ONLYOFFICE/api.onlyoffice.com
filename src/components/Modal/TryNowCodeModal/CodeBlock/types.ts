export type code = {
  document?: {
    fileType?: string;
    key?: string;
    title?: string;
    url?: string;
    permissions?: {
      edit?: boolean;
      modifyFilter?: boolean;
      fillForms?: boolean;
      review?: boolean;
      reviewGroups?: string[];
      modifyContentControl?: boolean;
      comment?: boolean;
      commentGroups?: {
        edit: string[];
        remove: string[];
        view: string;
      };
    };
  };
  documentType?: string;
  editorConfig?: editorConfig;
  height?: string;
  width?: string;
  type?: string;
};

export type editorConfig = {
  callbackUrl?: string;
  mode?: string;
  customization?: {
    anonymous?: { request: boolean };
    autosave?: boolean;
    compactToolbar?: boolean;
    customer?: {
      address: string;
      info: string;
      logo: string;
      mail: string;
      name: string;
      www: string;
    };
    features?: { featuresTips: boolean };
    logo?: {
      image?: string;
      url: string;
    };
    uiTheme?: string;
    zoom?: number;
  };
  user?: {
    id: string;
    name: string;
  };
};
