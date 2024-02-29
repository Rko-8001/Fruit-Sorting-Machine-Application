export default function StatSkelton() {

    return (
        <div className="bg-white w-full dark:bg-gray-900 animate-pulse">
            <div className="container px-6 py-8 mx-auto">
                <h1 className="h-10 w-100 text-2xl font-semibold text-center text-gray-800 capitalize bg-gray-400 lg:text-3xl dark:text-white"></h1>

                <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
                </p>

                <div className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3 xl:mt-12">
                    <div className="flex h-15 items-center justify-between px-8 py-4 border cursor-pointer rounded-xl bg-gray-500 dark:border-gray-700">
                    </div>
                    <div className="flex h-15 items-center justify-between px-8 py-4 border cursor-pointer rounded-xl bg-gray-500 dark:border-gray-700">
                    </div>
                    <div className="flex h-15 items-center justify-between px-8 py-4 border cursor-pointer rounded-xl bg-gray-500 dark:border-gray-700">
                    </div>
                </div>
            </div>

            {/* <div className="p-8 mt-8 space-y-8 bg-gray-100 dark:bg-gray-800 rounded-xl">

                {otherStats && otherStats.map((stat, index) => (
                    <div key={stat.id} className="flex items-center justify-between px-3 mr-10 text-gray-800 ">
                        <p className="text-2xl flex flex-row">
                            {giveNumberIcon(index)}
                            <p className='mx-2'></p>
                        </p>
                        <p className="text-3xl "></p>
                    </div>
                ))}
            </div>


            <div className="flex justify-center mt-8">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        sessionStorage.removeItem('sessionStat');
                        navigate('/home');
                    }}
                    className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                    Go to Home Page
                </button>
            </div> */}
        </div>
    )
}
