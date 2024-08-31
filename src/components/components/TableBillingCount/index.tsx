import TableBillingCountProps from "./types";

const TableBillingCount: React.FC<TableBillingCountProps> = ({ backgroundColor, children }) => {
  const divStyle = {
    backgroundColor: backgroundColor || 'transparent',
  };

  return (
    <div className="flex justify-center">
      <div 
        className="flex items-center justify-center text-black min-w-[25px] min-h-[25px] rounded-full"
        style={divStyle}
      >
        {children}
      </div>
    </div>
  );
}

export default TableBillingCount;
