function TransactionHistory({ transaction }) {
  return (
    <div key={transaction.id} className="border-b py-2">
      <h3 className="font-bold">{transaction.type}</h3>
      <p className="text-sm text-gray-500">Amount: ₹{transaction.amount}</p>
      <p className="text-sm text-gray-500">Date: {transaction.date}</p>
    </div>
  );
}

export default TransactionHistory;
