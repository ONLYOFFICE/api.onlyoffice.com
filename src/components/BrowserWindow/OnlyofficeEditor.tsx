import React, { useEffect } from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode} from '@docusaurus/theme-common';
import { code } from "@site/src/components/Modal/TryNowCodeModal/CodeBlock/types";

interface OnlyOfficeEditorProps {
  fileType: string; // e.g., "docx", "xlsx", "pptx", "pdf"
  code: string;
  height?: string;
  templateUrl?: string;
  zoom?: number;
  config?: code;
  isDemo?: boolean;
  isForm?: boolean;
  externalScript?: {
    beforeDocumentReady: string;
    onDocumentReady: string;
    otherFunctional: string;
  };
}

async function createJWT(json: object, secret: string): Promise<string | null> {
  if (!secret) return null;

  // Define the JWT header
  const header = {
      typ: "JWT",
      alg: "HS256"
  };

  // Helper function to encode strings in URL-safe Base64
  const base64EncodeURL = (str: string): string => {
      return btoa(str)
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '');
  };

  // Encode the header and payload
  const encodedHeader = base64EncodeURL(JSON.stringify(header));
  const encodedPayload = base64EncodeURL(JSON.stringify(json));

  // Create the HMAC-SHA256 signature
  const encoder = new TextEncoder();
  const algorithm = { name: "HMAC", hash: "SHA-256" };
  const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      algorithm,
      false,
      ["sign", "verify"]
  );

  const dataToSign = encoder.encode(`${encodedHeader}.${encodedPayload}`);
  const signature = await crypto.subtle.sign(algorithm.name, key, dataToSign);

  // Convert the signature to a URL-safe Base64 string
  const signatureArray = new Uint8Array(signature);
  const encodedSignature = base64EncodeURL(String.fromCharCode(...signatureArray));

  // Return the complete JWT
  return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
}

const getDocumentType = (fileType: string): string => {
  switch (fileType) {
    case "xlsx":
    case "xls":
    case "ods":
    case "csv":
      return "cell";
    case "pptx":
    case "ppsx":
    case "ppt":
    case "odp":
      return "slide";
    case "pdf":
      return "pdf";
    case "docx":
    default:
      return "word"; // Default to "word" for unknown file types
  }
};

const getDocumentName = (fileType: string, isDemo: boolean = false, isForm: boolean = false): string => {
  if (isDemo) {
    return isForm ? "demo-invoice" : "demo";
  }
  return (fileType === "pdf") ? "blank" : "new";
};

const createDocumentConfig = (fileType: string, templateUrl: string, title?: string, isDemo: boolean = false, isForm: boolean = false): object => {
  return {
    fileType,
    key: `doc-${Date.now()}`,
    title: title || `Example Document.${fileType}`,
    url: templateUrl ? templateUrl : `https://static.onlyoffice.com/assets/docs/samples/${getDocumentName(fileType, isDemo, isForm)}.${fileType}`
  };
};

function deepMerge<T extends object>(target: T, ...sources: Partial<T>[]): T {
  const result = { ...target } as T;

  for (const source of sources) {
    for (const key in source) {
      const targetVal = result[key];
      const sourceVal = source[key];

      if (sourceVal && typeof sourceVal === "object" && !Array.isArray(sourceVal)) {
        result[key] = deepMerge(
          (targetVal && typeof targetVal === "object" ? targetVal : {}) as any,
          sourceVal as any
        );
      } else {
        result[key] = sourceVal as any;
      }
    }
  }

  return result;
}

const scriptId: string = "editorScript";

const addScript = async (secret: string, fileType: string, code: string, theme: string, templateUrl: string, zoom: number,
                         externalConfig?: code, externalScript?: OnlyOfficeEditorProps["externalScript"], isDemo: boolean = false, isForm: boolean = false): Promise<void> => {
  const scriptConfig = document.createElement("script");
  scriptConfig.id = scriptId;
  scriptConfig.type = "text/javascript";

  const documentConfig = createDocumentConfig(fileType, templateUrl, externalConfig?.document?.title, isDemo, isForm);

  if (externalConfig?.editorConfig?.customization?.logo?.image) {
    externalConfig.editorConfig.customization.logo.image = new URL("/assets/images/try-docs/example-logo.png", window.location.origin).href;
  }

  if (externalConfig?.editorConfig?.customization?.customer?.logo) {
    externalConfig.editorConfig.customization.customer.logo = new URL("/assets/images/try-docs/example-logo-big.png", window.location.origin).href;
  }

  const config = deepMerge<code>(
    externalConfig || {},
    {
      document: documentConfig,
      documentType: getDocumentType(fileType),
      editorConfig: {
        callbackUrl: "",
        customization: {
          anonymous: { request: false },
          uiTheme: theme === "dark" ? "default-dark" : "default-light",
          features: { featuresTips: false },
          zoom: zoom,
        },
      },
    },
  );

  const token = await createJWT(config, secret);

  scriptConfig.innerHTML = `
    if (window.docEditor) {
      window.docEditor.destroyEditor();
      window.docEditor = null;
    }

    (() => {
      ${externalScript?.beforeDocumentReady}
      window.onDocumentReady = function() {
        window.connector = docEditor.createConnector();
        connector.callCommand(() => {
          ${code}
        }, () => {
        });
        ${externalScript?.onDocumentReady}
      };

      const config = ${JSON.stringify(config)};
      config.token = "${token}";
      config.events = {
        onDocumentReady: window.onDocumentReady,
      };

      window.docEditor = new DocsAPI.DocEditor("placeholder", config);
      ${externalScript?.otherFunctional}
    })();
  `;

  document.body.appendChild(scriptConfig);
};

const OnlyOfficeEditor: React.FC<OnlyOfficeEditorProps> = ({
  fileType,
  code,
  height = "700px",
  templateUrl,
  zoom,
  config,
  isDemo = false,
  isForm = false,
  externalScript = { 
    beforeDocumentReady:"",
    onDocumentReady:"",
    otherFunctional:"" 
  }
}) => {
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();

  const {colorMode} = useColorMode();
  const documentServer = customFields.documentServer as string;
  const documentServerSecret = customFields.documentServerSecret as string;

  useEffect(() => {
    if ("1" !== document.documentElement.getAttribute("data-script-api-state")) {
      if ("2" !== document.documentElement.getAttribute("data-script-api-state")) {
        const apiUrl = new URL('/web-apps/apps/api/documents/api.js', documentServer);

        const scriptApi = document.createElement("script");
        scriptApi.type = "text/javascript";
        scriptApi.src = apiUrl.toString();
        scriptApi.onerror = () => {
          console.error("Failed to load OnlyOffice API script.");
        };
        scriptApi.onload = () => {
          document.documentElement.setAttribute("data-script-api-state", "2");
          addScript(documentServerSecret, fileType, code, colorMode, templateUrl, zoom, config, externalScript, isDemo, isForm);
        };

        document.documentElement.setAttribute("data-script-api-state", "1");
        document.body.appendChild(scriptApi);
      } else {
        addScript(documentServerSecret, fileType, code, colorMode, templateUrl, zoom, config, externalScript, isDemo, isForm);
      }
    }

    return () => {
      document.getElementById(scriptId).remove();
    };
  }, []);

  return (
    <div style={{ height }}>
      <div id="placeholder"></div>
    </div>
  );
};

export default OnlyOfficeEditor;