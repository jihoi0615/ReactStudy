import Button from "@/components/Button";
import ModalContent from "@/components/Modal/ModalContent";
import { useModalStore } from "@/stores/useModalStore";

const OpenModalButton = () => {
  const { openModal, closeModal } = useModalStore();

  const handleClick = () => {
    openModal(
      <ModalContent title="모달 타이틀" message="이건 모달 내용입니다" onConfirm={closeModal} />
    );
  };

  return (
    <Button styleType="brand-solid" onClick={handleClick}>
      모달 열기
    </Button>
  );
};

export default OpenModalButton;
