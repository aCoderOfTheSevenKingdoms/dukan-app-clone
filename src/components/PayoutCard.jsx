export const PayoutCard = () => {
    return <div className="overflow-hidden rounded-md w-85 h-35 flex flex-col">
        <div className="bg-sky-700 flex-grow hover:bg-blue-600 p-2">
            <div className="flex px-3 pt-3">
               <div className="text-sm text-white">Next Payout</div>
               <div className="text-white pl-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
               </div>
            </div>

            <div className="flex justify-between p-3">
                <div className="text-3xl font-semibold text-white">$2321.23</div>
                <div className="flex items-center">
                    <div className="text-white text-sm">23 orders</div>
                    <div className="text-white text-sm p-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-2 px-4 bg-blue-900 flex justify-between">
            <div className="text-sm text-white">Next Payout Date:</div>
            <div className="text-sm text-white">Today, 4:00 PM</div>
        </div>
    </div>
}