import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./TimeStamp";
import Messages from "./Messages";
import Actions from "./Actions";

export default function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Messages message={props.tweet.message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}
