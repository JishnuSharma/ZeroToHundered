import CommentSection from "./CommentSection";
import SideVideoList from "./SideVideoList";

function VideoPlayer() {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-9 px-5 mt-5">
                <div>
                    <video src="../public/video.mp4" className="rounded-2xl" autoPlay controls loop></video>
                    <div>
                        <div className="text-white text-2xl mt-2">
                            The waves which make you feel like flowing
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex text-white items-center mt-2">
                                <div>
                                    <img src="https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Channel Avatar" className="h-10 w-10 object-cover rounded-full" />
                                </div>
                                <div className="ml-3">
                                    Channel Name
                                    <p>2.33M</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center text-white gap-5">
                                <div className="bg-gray-700 px-5 py-2 rounded-3xl flex items-center">
                                    <span className="pr-3 flex itmes-center justify-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                    </svg>
                                        Like</span>|<span className="pl-3 flex items-center justify-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                                        </svg>
                                        Dislike</span>
                                </div>
                                <div className="bg-gray-700 px-5 py-2 rounded-3xl flex gap-2">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                    </svg>
                                    </span>Share
                                </div>
                                <div className="bg-gray-700 px-5 py-2 rounded-3xl flex items-center gap-2">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
                                    </svg>
                                    </span>Clip
                                </div>
                                <div className="bg-gray-700 px-5 py-2 rounded-3xl flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                    Save
                                </div>
                                <div className="bg-gray-700 px-5 py-1 rounded-3xl">
                                    ...
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white bg-gray-700 p-4 mt-5 rounded-xl text-justify">
                        <b>41M views</b> <b>2 years ago</b> #thebeachvibes #thetruepeace #beach<br /><br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint saepe aperiam, eveniet aspernatur amet soluta temporibus itaque at culpa obcaecati natus minus architecto voluptatem pariatur repudiandae explicabo, debitis et perferendis molestiae officiis, illum nesciunt eaque iusto nulla! Obcaecati, possimus odit. Asperiores, est. Laboriosam rerum impedit omnis itaque animi, quae id illum ipsam reprehenderit aut at ab obcaecati tempora doloremque deserunt vero reiciendis totam optio voluptas facere perspiciatis dignissimos! Eaque iure dolor voluptatibus commodi ex quisquam ratione quos id est veniam nemo exercitationem dolores nihil facilis, vel quas debitis consequuntur distinctio perspiciatis odit rem consectetur sunt vitae! Sed reiciendis quisquam temporibus aliquid consequatur explicabo vero, ducimus, ad quaerat molestias quam? Assumenda optio nemo eligendi perferendis est a? Delectus quibusdam sit, dolore velit aut numquam. Maxime aspernatur odit itaque sed distinctio quae corrupti sequi, saepe ducimus, iste modi cum dolor delectus temporibus repellendus. Placeat repellat harum quae atque praesentium incidunt cumque obcaecati consectetur! Eaque, mollitia cum laborum quasi illo nesciunt velit. Exercitationem a eveniet perferendis tempore perspiciatis numquam eligendi fugit doloremque consequuntur. Tempore optio repellendus quae ullam illo facilis porro sunt distinctio ipsam a, dignissimos labore possimus quam consectetur, architecto debitis iste ex dolores, qui vero expedita delectus illum totam. Beatae, nesciunt.
                    </div>
                    <div className="text-white text-2xl mt-4">
                        21,020 Comments
                    </div>
                    <div>
                        <CommentSection />
                    </div>
                </div>
            </div>
            <div className="col-span-3 px-2">
                <SideVideoList />
            </div>
        </div>
    )
}

export default VideoPlayer;