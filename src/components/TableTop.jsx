export const TableTop = () => {

    return (
        <div className="flex items-center justify-between">
               <div className="flex p-1 flex-start items-center w-96 bg-white rounded-md border border-gray-300">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
           
           <input type="text" className="py-0.5 px-2.5 border-none outline-none" placeholder="Order ID or TransactionID"></input>
        </div>

        <div className="flex items-center gap-4">
            <div className="flex items-center p-1.5 gap-1 bg-white border border-gray-300 rounded-md">
                <span className="text-md">Sort</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
            </div>

            <div className="p-1.5 bg-white border border-gray-300 rounded-md">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
               </svg>
            </div>
        </div>
        </div>
    )
}