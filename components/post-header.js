import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <Avatar name={author.name} picture={author.picture} />
        <div className="mb-6 text-lg">
          📅 <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
