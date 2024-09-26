

export default function Hashtag({className, title}) {
    return (
        <div className="flex -ml-2">
            <a href="" className={`px-2 py-1 hover:bg-gray-300 rounded-md transition duration-150 ${className}`}>#{title}</a>
        </div>
    )
}