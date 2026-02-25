declare module "onlyoffice-react-ui-kit/advent-announce" {
  import React from "react";

  interface IAdventAnnounce {
    locale?: string;
  }

  export const OOAdventAnnounce: React.FC<IAdventAnnounce>;
}
