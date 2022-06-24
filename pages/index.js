import MainContainer from "../components/MainContainer";
import PaymentForm from "../components/PaymentForm";

const Index = () => {
  return (
    <MainContainer keywords={"main page"}>
      <h1 className="title">Payment Page</h1>
      <PaymentForm />
    </MainContainer>
  );
};

export default Index;
