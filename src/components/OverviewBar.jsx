import { PayoutCard } from "./PayoutCard"
import { AmountCard } from "./AmountCard"

export const OverviewBar = () => {

    return <div className="grid gap-6 px-4">
        <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">Overview</div>
            <div className="flex border border-gray-300 p-3">
                <div>This Month</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <PayoutCard></PayoutCard>
            <AmountCard amountType={"Amount Pending"} amount={"$92,312.20"}></AmountCard>
            <AmountCard amountType={"Amount Processed"} amount={"$23,92,312.19"}></AmountCard>
        </div>
    </div>
}