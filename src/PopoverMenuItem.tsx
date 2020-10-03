import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  onClick: () => void;
  className?: string;
}

const Item = styled.li``;

const Title = styled.div``;

const Icon = styled.div``;

export const PopoverMenuItemComponent: React.FC<Props> = ({
  title,
  onClick,
  className
}) => {
  return (
    <Item className={className} onClick={onClick}>
      <Icon>Icon</Icon>
      <Title>{title}</Title>
    </Item>
  );
};

export const PopoverMenuItem = PopoverMenuItemComponent;
PopoverMenuItem.displayName = "PopoverMenuItem";
