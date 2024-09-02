import './styles.css';

const Spinner: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-5 justify-center items-center mt-5">
      <div className="spinner"></div>
      <p className="text-[24px]" aria-label="Carregando">
        Carregando...
      </p>
    </div>
  );
};

export default Spinner;
