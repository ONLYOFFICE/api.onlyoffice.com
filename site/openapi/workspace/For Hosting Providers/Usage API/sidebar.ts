import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/workspace/For Hosting Providers/Usage API/hosted-solutions",
    },
    {
      type: "category",
      label: "Portal",
      items: [
        {
          type: "doc",
          id: "openapi/workspace/For Hosting Providers/Usage API/list-portals",
          label: "List portals",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/workspace/For Hosting Providers/Usage API/register-a-new-portal",
          label: "Register a new portal",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/workspace/For Hosting Providers/Usage API/delete-a-portal",
          label: "Delete a portal",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/workspace/For Hosting Providers/Usage API/change-portal-activation-status",
          label: "Change portal activation status",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openapi/workspace/For Hosting Providers/Usage API/validate-portal-name",
          label: "Validate portal name",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Billing",
      items: [
        {
          type: "doc",
          id: "openapi/workspace/For Hosting Providers/Usage API/get-tariff",
          label: "Get tariff",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/workspace/For Hosting Providers/Usage API/set-tariff",
          label: "Set tariff",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
