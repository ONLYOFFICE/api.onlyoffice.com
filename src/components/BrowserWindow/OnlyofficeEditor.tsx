import React, { useEffect } from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface OnlyOfficeEditorProps {
  fileType: string; // e.g., "docx", "xlsx", "pptx", "pdf"
  code: string;
  height?: string;
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
      return "cell";
    case "pptx":
      return "slide";
    case "pdf":
      return "pdf";
    case "docx":
    default:
      return "word"; // Default to "word" for unknown file types
  }
};

const createDocumentConfig = (fileType: string): object => {
  return {
    fileType,
    key: `doc-${Date.now()}`,
    title: `Example Document.${fileType}`,
    url: `https://static.onlyoffice.com/assets/docs/samples/new.${fileType}`,
  };
};

const addScript = async (secret: string, fileType: string, code: string): Promise<void> => {
  const scriptConfig = document.createElement("script");
  scriptConfig.type = "text/javascript";

  const documentConfig = createDocumentConfig(fileType);

  const config = {
    document: documentConfig,
    documentType: getDocumentType(fileType),
    editorConfig: { callbackUrl: "" }
  };

  const token = await createJWT(config, secret);

  scriptConfig.innerHTML = `
    if (window.docEditor) {
      window.docEditor.destroyEditor();
      window.docEditor = null;
    }

    window.onDocumentReady = function() {
      window.connector = docEditor.createConnector();
      connector.callCommand(() => {
        ${code}
      }, () => {
      });
    };

    var config = ${JSON.stringify(config)};
    config.token = "${token}";
    config.events = {
      onDocumentReady: window.onDocumentReady,
    };

    window.docEditor = new DocsAPI.DocEditor("placeholder", config);
  `;

  document.body.appendChild(scriptConfig);
};

const OnlyOfficeEditor: React.FC<OnlyOfficeEditorProps> = ({
  fileType,
  code,
  height = "700px",
}) => {
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();

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
          addScript(documentServerSecret, fileType, code);
        };
  
        document.documentElement.setAttribute("data-script-api-state", "1");
        document.body.appendChild(scriptApi);
      } else {
        addScript(documentServerSecret, fileType, code);
      }
    }

    return () => {
    };
  }, []);

  return (
    <div style={{ height }}>
      <div id="placeholder"></div>
    </div>
  );
};

export default OnlyOfficeEditor;