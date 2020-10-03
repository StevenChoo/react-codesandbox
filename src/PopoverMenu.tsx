import React, { cloneElement, ReactElement, useState } from "react";
import styled from "styled-components";

interface Props {
  target: ReactElement;
  defaultOpen?: boolean;
  className?: string;
}

const Menu = styled.div`
  display: inline-block;
  position: relative;
`;

const Popover = styled.div`
  position: absolute;
  z-index: 100;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  top: 10rem;
  right: 0;
`;

const MenuItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  color: black;
`;

export const PopoverMenuComponent: React.FC<Props> = ({
  target,
  defaultOpen = false,
  className,
  children
}) => {
  const [isOpen, setIsOpened] = useState(!!defaultOpen);

  const toggle = (): void => {
    setIsOpened(!isOpen);
  };

  return (
    <Menu className={className}>
      {cloneElement(target, { onClick: toggle })}
      {isOpen && (
        <Popover>
          <MenuItemList>{children}</MenuItemList>
        </Popover>
      )}
    </Menu>
  );
};
export const PopoverMenu = PopoverMenuComponent;
PopoverMenu.displayName = "PopoverMenu";
