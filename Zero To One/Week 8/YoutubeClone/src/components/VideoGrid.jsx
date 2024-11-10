import YouTubeCard from "./YoutubeCard";

const youtubeData = [
    {
        thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelAvatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "How to Learn JavaScript in 30 Days",
        channelName: "TechMaster",
        views: "1.2M views",
        releaseTime: "2 days ago",
    },
    {
        thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelAvatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "React vs Vue: Which Framework to Choose?",
        channelName: "WebDev Simplified",
        views: "500K views",
        releaseTime: "5 days ago",
    },
    {
        thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelAvatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "CSS Grid Tutorial for Beginners",
        channelName: "CSS Tricks",
        views: "800K views",
        releaseTime: "1 week ago",
    },
    {
        thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelAvatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Mastering Python in 60 Minutes",
        channelName: "Code Academy",
        views: "2M views",
        releaseTime: "3 days ago",
    },
    {
        thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelAvatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Introduction to Data Structures",
        channelName: "Learn with Me",
        views: "300K views",
        releaseTime: "1 month ago",
    },
    {
        thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelAvatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Advanced JavaScript Techniques",
        channelName: "JS Guru",
        views: "1.5M views",
        releaseTime: "2 weeks ago",
    },
    {
        thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelAvatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Building Real-World Projects with React",
        channelName: "DevMasters",
        views: "1.8M views",
        releaseTime: "3 days ago",
    },
    {
        thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelAvatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Understanding Algorithms and Big-O Notation",
        channelName: "Tech Savvy",
        views: "600K views",
        releaseTime: "4 days ago",
    },
    {
        thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelAvatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "React vs Vue: Which Framework to Choose?",
        channelName: "WebDev Simplified",
        views: "500K views",
        releaseTime: "5 days ago",
    },
    {
        thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelAvatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "CSS Grid Tutorial for Beginners",
        channelName: "CSS Tricks",
        views: "800K views",
        releaseTime: "1 week ago",
    },
    {
        thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelAvatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Mastering Python in 60 Minutes",
        channelName: "Code Academy",
        views: "2M views",
        releaseTime: "3 days ago",
    },
    {
        thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelAvatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Introduction to Data Structures",
        channelName: "Learn with Me",
        views: "300K views",
        releaseTime: "1 month ago",
    },
    {
        thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelAvatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Advanced JavaScript Techniques",
        channelName: "JS Guru",
        views: "1.5M views",
        releaseTime: "2 weeks ago",
    },
    {
        thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelAvatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Building Real-World Projects with React",
        channelName: "DevMasters",
        views: "1.8M views",
        releaseTime: "3 days ago",
    },
    {
        thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelAvatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Understanding Algorithms and Big-O Notation",
        channelName: "Tech Savvy",
        views: "600K views",
        releaseTime: "4 days ago",
    }
];

function VideoGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 px-5">
            {youtubeData.map((vid, index) => (
                <YouTubeCard
                    key={index}
                    thumbnail={vid.thumbnail}
                    channelAvatar={vid.channelAvatar}
                    title={vid.title}
                    channelName={vid.channelName}
                    views={vid.views}
                    releaseTime={vid.releaseTime}
                />
            ))}
        </div>
    );
}

export default VideoGrid;
