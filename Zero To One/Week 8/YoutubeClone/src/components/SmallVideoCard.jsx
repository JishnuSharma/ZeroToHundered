function SmallVideoCard(props) {
    return (
        <div className="grid grid-cols-12 gap-4 mt-5">
            <div className="col-span-4">
                <img className="h-19 w-40 object-cover rounded-xl" src={props.thumbnail} alt="Video Thumbnail" />
            </div>
            <div className="pl-3 col-span-8">
                <div className="truncate text-white">
                    {props.title}
                </div>
                <div className="text-gray-400">
                    {props.channelName}
                </div>
                <div className="text-gray-400 flex gap-2">
                    <div>
                        {props.views}
                    </div>.
                    <div>
                        {props.releaseDate}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmallVideoCard;
