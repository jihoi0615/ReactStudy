import Button from "@/components/Button";

const ModalContent = ({ title, message, onConfirm }) => {
  return (
    <>
      <header>{title}</header>
      <main>{message}</main>
      <footer>
        <Button
          styleType="brand"
          onClick={() => {
            onConfirm();
          }}
        >
          확인
        </Button>
      </footer>
    </>
  );
};

export default ModalContent;
