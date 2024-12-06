import {
    table,
    tableHead,
    tableHeadData,
    tableBody,
    tableData,
} from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
    return (
        <table className={table}>
            <thead className={tableHead}>
                <tr>
                    <th className={tableHeadData}>Type</th>
                    <th className={tableHeadData}>Amount</th>
                    <th className={tableHeadData}>Currency</th>
                </tr>
            </thead>
            <tbody className={tableBody}>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td className={tableData}>{type}</td>
                        <td className={tableData}>{amount}</td>
                        <td className={tableData}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TransactionHistory;
