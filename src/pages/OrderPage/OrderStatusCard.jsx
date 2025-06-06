import Button from "@/components/Button";
import Card from "@/components/Card";

const OrderStatusCard = ({ order }) => {
  const { status, name, id, orderDate } = order;

  return (
    <Card
      header={
        <>
          <strong> {status} </strong>
          <br />
          {name}
        </>
      }
      data={[
        { term: "주문일시", description: orderDate },
        { term: "주문번호", description: id },
      ]}
      footer={
        <>
          <Button>전화</Button>
          <Button>가게보기</Button>
        </>
      }
    />
  );
};

export default OrderStatusCard;
