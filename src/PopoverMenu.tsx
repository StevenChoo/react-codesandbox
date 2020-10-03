import React, {
  cloneElement,
  ReactElement,
  useState,
  useEffect,
  useRef
} from "react";
import styled from "styled-components";

interface Props {
  target: JSX.Element;
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
  top: 0;
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
  const [menuHeight, setMenuHeight] = useState(0);
  const menuElementRef = useRef(null);

  const toggle = (): void => {
    setIsOpened(!isOpen);
  };

  useEffect(() => {
    setMenuHeight(menuElementRef.current.clientHeight);
    console.log(menuHeight);
  }, [menuHeight]);

  return (
    <Menu className={className} ref={menuElementRef}>
      {cloneElement(target, { onClick: toggle })}
      {isOpen && (
        <Popover menuHeight={menuHeight}>
          <MenuItemList>{children}</MenuItemList>
        </Popover>
      )}
    </Menu>
  );
};
export const PopoverMenu = PopoverMenuComponent;
PopoverMenu.displayName = "PopoverMenu";
