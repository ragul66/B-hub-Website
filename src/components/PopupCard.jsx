const Popupcard = ({ togglePopup, showPopup, selectedCard }) => {
    return (
        <div className="relative">
            {showPopup && selectedCard && (
                <div className="fixed inset-0 flex items-center justify-center bg-background-0 bg-opacity-50">
                    <div className="flex flex-col rounded-lg bg-textcolor-0 text-background-0 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                        <img
                            className="grayscale hover:grayscale-0 h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={selectedCard.img} // Use selected card image
                            alt=""
                        />
                        <div className="flex flex-col justify-start p-6">
                            <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                {selectedCard.name} {/* Display selected card name */}
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                {/* Display additional details */}
                            </p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-300">
                                Last updated 3 mins ago
                            </p>
                            <button
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                onClick={togglePopup}
                            >
                                Close Popup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Popupcard;