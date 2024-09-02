import laptopAlert from "../../../assets/laptop-alert.png";

const NoItems = () => {
  return (
    <div className="flex w-full flex-col gap-5 justify-center text-center">
      <div className="flex justify-center mr-4">
        <img
          src={laptopAlert}
          width={70}
          height={70}
          alt="Nenhum item disponível"
        />
      </div>
      <p className="text-[24px]">
        Sem Itens...
      </p>
    </div>
  )
}
export default NoItems;