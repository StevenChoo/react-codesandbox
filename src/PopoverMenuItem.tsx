import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  icon: ReactElement;
  title: string;
  onClick: () => void;
  className?: string;
}

const Item = styled.li`
  display: grid;
  width: 16rem;
  grid-template-columns: 3.6rem 1.2rem 1fr;
  grid-template-rows: 3.6rem;
  align-items: center;

  &:hover {
    background: rgb(239, 244, 248);
  }
`;

const Icon = styled.div`
  display: flex;
  grid-column: 1/1;
  grid-row: 1/1;
  width: 3.6rem;
  height: 3.6rem;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
`;

const Title = styled.div`
  display: inline-block;
  grid-column: 3/3;
  grid-row: 1/1;
  width: auto;
  font-family: "PT Sans", sans-serif;
  font-size: 1.8rem;
`;

export const PopoverMenuItemComponent: React.FC<Props> = ({
  icon,
  title,
  onClick,
  className
}) => {
  return (
    <Item className={className} onClick={onClick}>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
    </Item>
  );
};

export const PopoverMenuItem = PopoverMenuItemComponent;
PopoverMenuItem.displayName = "PopoverMenuItem";
