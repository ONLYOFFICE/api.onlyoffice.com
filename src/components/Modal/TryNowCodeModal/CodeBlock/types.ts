export type code = {
  document: {
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
    autosave?: boolean;
    customer?: {
      address: string;
      info: string;
      logo: string;
      mail: string;
      name: string;
      www: string;
    };
    logo?: {
      image?: string;
      url: string;
    };
  };
  user?: {
    id: string;
    name: string;
  };
};
