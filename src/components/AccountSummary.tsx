import styled from "styled-components";
import { AccountItem } from "./AccountItem";

const AccountWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  border-radius: 99px;
  padding-bottom: 20px; ;
`;

const Title = styled.h1`
  color: #33558b;
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 30px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AccountSummary = () => {
  const mockData = [
    {
      title: "Starbucks Coffe",
      date: "2:30PM, 17-08-2017",
      backgroundColor: "#FFA726",
    },
    {
      title: "H&M",
      date: "1:00PM, 17-08-2017",
      backgroundColor: "#894AD6",
    },
    {
      title: "Eye Doctor",
      date: "6:00PM, 17-08-2017",
      backgroundColor: "#FF4967",
    },
  ];
  return (
    <AccountWrapper>
      <Title>Your account summary</Title>
      <ItemsWrapper>
        {mockData.map(({ title, date, backgroundColor }) => (
          <AccountItem
            title={title}
            date={date}
            backgroundColor={backgroundColor}
            key={title}
          />
        ))}
      </ItemsWrapper>
    </AccountWrapper>
  );
};
