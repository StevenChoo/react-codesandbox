import React, {
  cloneElement,
  ReactElement,
  useState,
  useEffect,
  useRef
} from "react";
import styled from "styled-components";
import useOnClickOutside from "use-onclickoutside";

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
  background: FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 31, 75, 0.4);
  top: ${(props) => props.menuHeight}px;
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
  const popoverRef = useRef(null);
  const toggle = (): void => {
    setIsOpened(!isOpen);
  };

  const close = (): void => {
    console.log("Click");
    setIsOpened(false);
  };

  const handleClick = (event, onClick): void => {
    close();
    onClick(event);
  };

  useOnClickOutside(popoverRef, close);

  useEffect(() => {
    setMenuHeight(menuElementRef.current.clientHeight);
    console.log(menuHeight);
  }, [menuHeight]);

  const menuItems = React.Children.map(children, (menuItem) => {
    if (
      menuItem?.type?.displayName !== "PopoverMenuItem" &&
      menuItem?.type?.displayName !== "Styled(PopoverMenuItem)"
    ) {
      throw new Error();
    }
    return React.cloneElement(menuItem, {
      onClick: (event) => handleClick(event, menuItem.props.onClick)
    });
  });

  return (
    <Menu className={className} ref={menuElementRef}>
      {cloneElement(target, { onClick: toggle })}
      {isOpen && (
        <Popover menuHeight={menuHeight} ref={popoverRef}>
          <MenuItemList>{menuItems}</MenuItemList>
        </Popover>
      )}
    </Menu>
  );
};
export const PopoverMenu = PopoverMenuComponent;
PopoverMenu.displayName = "PopoverMenu";
