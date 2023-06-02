import { TbSearch } from "react-icons/tb";
import { TiHeartOutline } from "react-icons/ti";

import { TabBarWrapper, Tab, TabNavLink, ActiveBar } from "./style";

export const TabBar = () => {
  return (
    <>
      <TabBarWrapper>
        <Tab>
          <TabNavLink to="/">
            <ActiveBar />
            <TbSearch fontSize={20} color="white" />
          </TabNavLink>
        </Tab>
        <Tab>
          <TabNavLink to="/favorite">
            <ActiveBar />
            <TiHeartOutline fontSize={20} color="white" />
          </TabNavLink>
        </Tab>
      </TabBarWrapper>
    </>
  );
};
