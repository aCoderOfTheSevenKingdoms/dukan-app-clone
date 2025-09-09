import { TableTop } from "./TableTop";
import { orderData } from "./data";

export const Table = () => {

    return (
        <div className="flex flex-col gap-4 p-3">
            <TableTop></TableTop>

            <div className="overflow-x-auto">
            <table className="w-full text-left text-sm rtl:text-right text-zinc-700">
                <thead className="font-medium rounded">
                    <tr>
                        <th scope="col" className="py-3 px-6 font-medium">ORDER ID</th>
                        <th scope="col" className="py-3 px-6 font-medium">STATUS</th>
                        <th scope="col" className="py-3 px-6 font-medium">TRANSACTION ID</th>
                        <th scope="col" className="py-3 px-6 font-medium">REFUND DATE</th>
                        <th scope="col" className="py-3 px-6 text-right font-medium">ORDER AMOUNT</th>
                    </tr>
                </thead>

                    {orderData.map((order) => {

                        return (
                            <tbody>
                            <tr className="border-b border-gray-200">
                            <th className="text-blue-500 px-6 py-4 font-medium whitesapce-nowrap">#{order.id}</th>
                            <td className="flex gap-2 px-6 py-4 items-center text-black">
                                { (order.status == "Successful") && <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div> }
                                { (order.status == "Processing") && <div className="h-2.5 w-2.5 rounded-full bg-gray-300"></div> }
                                { (order.status == "Failed") && <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div> }
                                {order.status}
                            </td>
                            <td className="px-6 py-4 text-black">{order.transactionID}</td>
                            <td className="px-6 py-4 text-black">{order.refundDate}</td>
                            <td className="px-6 py-4 text-right text-black">{order.amount}</td>
                            </tr>
                            </tbody>
                        )
                    })}
            </table>
            </div>
        </div>
    )
}