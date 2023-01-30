import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #7a56fc;
  border-radius: 30px;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

const Title = styled.h2`
  color: #ffffff;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
`;

const NumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumberItem = styled.div`
  font-size: 22px;
  color: #ffffff;
`;

const Name = styled.p`
  color: #ffffff;
  font-size: 20px;
`;

export const CreditCard = () => {
  return (
    <Card>
      <Title>American express</Title>
      <NumberWrapper>
        <NumberItem>1234</NumberItem>
        <NumberItem>5678</NumberItem>
        <NumberItem>9012</NumberItem>
        <NumberItem>1456</NumberItem>
      </NumberWrapper>
      <Name>John Doe</Name>
    </Card>
  );
};
