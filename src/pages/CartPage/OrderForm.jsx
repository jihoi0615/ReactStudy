import FormControl from "@/components/FormControl";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("결제 정보가 제출되었습니다.");
};

const OrderForm = () => {
  return (
    <form className="OrderForm" id="order-form" onSubmit={handleSubmit}>
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
      <FormControl label="연락처" htmlFor="phoneNumber" required>
        <input
          pattern="^\d{2,3}-\d{3,4}-\d{4}$"
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="연락처를 입력하세요"
          required
          autoFocus
        />
      </FormControl>
      <FormControl label="결제수단" htmlFor="paymentOption" required>
        <select>
          type="text" name="paymentOption" id="paymentOption" placeholder="마이페이" required
          autoFocus
          <option>마이페이</option>
          <option></option>
        </select>
      </FormControl>
      <FormControl label="가게 사장님께" htmlFor="storeMessage">
        <textarea name="storeMessage" id="storeMessage" autoFocus />
      </FormControl>
      <FormControl label="라이더님께" htmlFor="riderMessage">
        <textarea name="riderMessage" id="riderMessage" autoFocus />
      </FormControl>
    </form>
  );
};

export default OrderForm;
