import { useModalStore } from "@/stores/useModalStore";
import ReactDOM from "react-dom";

const Backdrop = ({ children, onClick }) => (
  <div className="Backdrop" onClick={onClick}>
    {children}
  </div>
);

const Modal = () => {
  const { modal, closeModal } = useModalStore();

  if (!modal) return null;

  return ReactDOM.createPortal(
    <Backdrop onClick={closeModal}>
      <div className="Dialog" onClick={(e) => e.stopPropagation()}>
        {/* event가 일어나는 컴포넌트에서만 실행되게 */}
        {modal}
      </div>
    </Backdrop>,
    document.body
  );
};

export default Modal;
