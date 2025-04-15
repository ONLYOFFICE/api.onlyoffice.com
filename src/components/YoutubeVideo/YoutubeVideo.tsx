import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import styles from "./styles.module.css";

type Props = {
  videoId: string;
};

const YoutubeVideo = ({ videoId }: Props) => {
  return (
    <div className={styles.LiteYouTubeEmbedWrapper}>
      <LiteYouTubeEmbed id={videoId} params="autoplay=1&autohide=1&showinfo=0&rel=0" title="video" poster="maxresdefault" webp />
    </div>
  );
};

export default YoutubeVideo;
