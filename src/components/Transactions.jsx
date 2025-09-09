export const Transactions = () => {

    return (
        <div className="flex flex-col gap-6 px-4">
        <span className="text-lg font-semibold">Transactions | This Month</span>

        <div className="flex text-sm gap-4">
        <span className="bg-gray-300 rounded-full w-25 py-1.5 px-4 text-gray-500">Payouts(22)</span>
        <span className="bg-blue-500 rounded-full w-25 py-1.5 px-4 text-white">Refunds(6)</span>
        </div>
        </div>
    )
}