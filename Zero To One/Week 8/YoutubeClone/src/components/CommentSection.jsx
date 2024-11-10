import Comment from "./Comment";

function CommentSection() {
    return (
        <>
            <div className="grid grid-cols-12 mt-4">
                <div className="col-span-1">
                    <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEWGQaKLl1E7RB96mmtK6R52GylZx73Q8Rg&s" alt="Profile Image" />
                </div>
                <div className="col-span-11 -ml-11">
                    <input className="w-full bg-transparent border-b" type="text" placeholder="Add a comment..." />
                </div>
            </div>
            <div className="pb-8">
                <div>
                    <Comment avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEWGQaKLl1E7RB96mmtK6R52GylZx73Q8Rg&s" username="hypedpandaa" postDate="10 months ago" content="What a beautiful beach it is , such calm vibes without a doubt one of the prettiest I have ever seen" />
                </div>
                <div>
                    <Comment avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEWGQaKLl1E7RB96mmtK6R52GylZx73Q8Rg&s" username="hypedpandaa" postDate="10 months ago" content="What a beautiful beach it is , such calm vibes without a doubt one of the prettiest I have ever seen" />
                </div>
                <div>
                    <Comment avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEWGQaKLl1E7RB96mmtK6R52GylZx73Q8Rg&s" username="hypedpandaa" postDate="10 months ago" content="What a beautiful beach it is , such calm vibes without a doubt one of the prettiest I have ever seen" />
                </div>
                <div>
                    <Comment avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEWGQaKLl1E7RB96mmtK6R52GylZx73Q8Rg&s" username="hypedpandaa" postDate="10 months ago" content="What a beautiful beach it is , such calm vibes without a doubt one of the prettiest I have ever seen" />
                </div>
            </div>
        </>
    )
}

export default CommentSection;