function YouTubeCard(props) {
    return (
        <div className="p-5 rounded-xl bg-zinc-950 cursor-pointer">
            <div>
                <img className="rounded-xl" src={props.thumbnail} alt="This is the video thumbnail" />
            </div>
            <div className=" mt-3 grid grid-cols-12">
                <div className="col-span-1 sm:col-span-1">
                    <img className="rounded-full w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 object-cover" src={props.channelAvatar} alt="This is the channel photo" />
                </div>
                <div className="col-span-10 pl-5">
                    <h4 className="text-lg font-bold text-white">{props.title}</h4>
                    <div className="text-gray-400">
                        {props.channelName}
                    </div>
                    <div className="text-gray-400 flex gap-2 items-center ">
                        <div className="text-sm">
                            {props.views}
                        </div>
                        <div className="flex items-center">
                            .
                        </div>
                        <div className="text-sm">
                            {props.releaseTime}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YouTubeCard;