import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "workspace/for-hosting-providers/usage-api/hosted-solutions",
    },
    {
      type: "category",
      label: "Portal",
      items: [
        {
          type: "doc",
          id: "workspace/for-hosting-providers/usage-api/list-portals",
          label: "List portals",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workspace/for-hosting-providers/usage-api/register-a-new-portal",
          label: "Register a new portal",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workspace/for-hosting-providers/usage-api/delete-a-portal",
          label: "Delete a portal",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "workspace/for-hosting-providers/usage-api/change-portal-activation-status",
          label: "Change portal activation status",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "workspace/for-hosting-providers/usage-api/validate-portal-name",
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
          id: "workspace/for-hosting-providers/usage-api/get-tariff",
          label: "Get tariff",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workspace/for-hosting-providers/usage-api/set-tariff",
          label: "Set tariff",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
