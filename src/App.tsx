import styled from "styled-components";
import { AccountSummary } from "./components/AccountSummary";
import { CreditCard } from "./components/CreditCard";

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
`;

function App() {
  return (
    <AppWrapper>
      <AccountSummary />
      <CreditCard />
    </AppWrapper>
  );
}

export default App;
