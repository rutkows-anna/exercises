import styled, { css } from "styled-components";
import { ArrowIcon } from "./ArrowIcon";

const AccountCard = styled.div<{ backgroundColor: string }>(
  ({ backgroundColor }) => css`
    background-color: ${backgroundColor};
    border-radius: 99px;
    padding: 30px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
);

const TextWrapper = styled.div``;

const Title = styled.h2`
  color: #ffffff;
  font-size: 18px;
`;

const DateText = styled.h3`
  color: #ffffffb3;
  font-size: 14px;
  font-weight: 400;
`;

interface AccountItemProps {
  title: string;
  date: string;
  backgroundColor: string;
}

export const AccountItem = ({
  title,
  date,
  backgroundColor,
}: AccountItemProps) => {
  return (
    <AccountCard backgroundColor={backgroundColor}>
      <TextWrapper>
        <Title>{title}</Title>
        <DateText>{date}</DateText>
      </TextWrapper>
      <ArrowIcon size="40" color="#ffffffb3" />
    </AccountCard>
  );
};
