import { 
  Table, 
  TableTr,
  TableTh } from './TransactionHistory.styled'

function TransactionHistory({ transactions }) {

  return (
    <Table>
  <thead>
    <TableTr>
      <TableTh>Type</TableTh>
      <TableTh>Amount</TableTh>
      <TableTh>Currency</TableTh>
    </TableTr>
  </thead>

  <tbody>
    {transactions.map((transaction) => (
      <TableTr key={transaction.id}>
        <TableTh>{transaction.type}</TableTh>
        <TableTh>{transaction.amount}</TableTh>
        <TableTh>{transaction.currency}</TableTh>
      </TableTr>
    ))}
  </tbody>
</Table>
)}

export default TransactionHistory