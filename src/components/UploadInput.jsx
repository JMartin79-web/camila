
export default function UploadInput({ handleImgAdd }) {
    return (
        <label
            className={`flex flex-col items-center my-2 px-4 py-6 bg-white rounded-lg shadow-md 
            tracking-wide border border-dashed border-blue cursor-pointer hover:bg-green-500 hover:text-white`}
        >
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
            </svg>
            <span>Subir imágenes</span>
            <input type="file"
                className="hidden"
                multiple
                id="file-upload"
                accept=".jpg, .jpeg, .png, .webp"
                onChange={handleImgAdd}
            />
        </label>
    )
}
