import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/docspace/for-hosting-providers/usage-api/asc-apisystem",
    },
    {
      type: "category",
      label: "People",
      items: [
        {
          type: "doc",
          id: "openapi/docspace/for-hosting-providers/usage-api/find",
          label: "Find",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Portal",
      items: [
        {
          type: "doc",
          id: "openapi/docspace/for-hosting-providers/usage-api/register",
          label: "Register",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/docspace/for-hosting-providers/usage-api/remove",
          label: "Remove",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/docspace/for-hosting-providers/usage-api/change-status",
          label: "Status",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openapi/docspace/for-hosting-providers/usage-api/check-existing-name-portal",
          label: "Checks if portal exists",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/docspace/for-hosting-providers/usage-api/get-portals",
          label: "Gets a list of portals",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/docspace/for-hosting-providers/usage-api/sign-in-to-portal",
          label: "Signs in to portal",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Settings",
      items: [
        {
          type: "doc",
          id: "openapi/docspace/for-hosting-providers/usage-api/get-settings",
          label: "Gets settings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/docspace/for-hosting-providers/usage-api/save-settings",
          label: "Saves settings",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/docspace/for-hosting-providers/usage-api/check-domain",
          label: "Checks domain",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Tariff",
      items: [
        {
          type: "doc",
          id: "openapi/docspace/for-hosting-providers/usage-api/set-tariff",
          label: "Sets tariff",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openapi/docspace/for-hosting-providers/usage-api/get-tariff",
          label: "Gets tariff",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/docspace/for-hosting-providers/usage-api/get-tariffs",
          label: "Gets all tariffs",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
