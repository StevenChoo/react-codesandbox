import React from "react";
import styled from "styled-components";

import { FaEllipsisH } from "react-icons/fa";
import { PopoverMenu } from "./PopoverMenu";
import { PopoverMenuItem } from "./PopoverMenuItem";

const Menu = styled.div`
  display: grid;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 3.2rem;
  border-bottom: 1px solid black;
  grid-template-columns: 1.2rem 1fr 4.8rem 1.2rem;
  grid-template-rows: 0.4rem 1fr 0.4rem;
  align-items: center;
`;

const Title = styled.div`
  display: block;
  grid-column: 2/2;
  grid-row: 2/2;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
`;

const MenuButton = styled(PopoverMenu)`
  display: flex;
  grid-column: 3/3;
  grid-row: 2/2;
  align-self: center;
  justify-self: end;
`;

const MoreIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  height: 1em;

  &:hover {
    color: rgba(1, 1, 1, 0.7);
  }
  &:active {
    color: rgba(1, 1, 1, 0.2);
  }
`;

const MenuItem = styled(PopoverMenuItem)``;

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Menu>
          <Title>Hello world</Title>
          <MenuButton
            target={
              <MoreIcon>
                <FaEllipsisH />
              </MoreIcon>
            }
          >
            <div>Test</div>
            <div>Test</div>
          </MenuButton>
        </Menu>
      </div>
    </>
  );
};

export default App;
