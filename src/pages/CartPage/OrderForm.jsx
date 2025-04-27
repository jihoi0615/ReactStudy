import FormControl from "@/components/FormControl";

const OrderForm = () => {
  return (
    <form className="OrderForm">
      <FormControl label="주소" htmlFor="deliveryAddress" required>
        <input
          type="text"
          name="deliveryAddress"
          id="deliveryAddress"
          placeholder="배달받을 주소를 입력하세요"
          required
          autoFocus
        />
      </FormControl>
    </form>
  );
};

export default OrderForm;
