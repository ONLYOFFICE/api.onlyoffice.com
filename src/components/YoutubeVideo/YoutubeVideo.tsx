import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import styles from "./styles.module.css";

type Props = {
  videoId: string;
  start?: number;
};

const YoutubeVideo = ({ videoId, start }: Props) => {
  const startParam = start ? `&start=${start}` : "";
  const params = `autoplay=1&autohide=1&showinfo=0&rel=0${startParam}`;

  return (
    <div className={styles.LiteYouTubeEmbedWrapper}>
      <LiteYouTubeEmbed
        id={videoId}
        title="video"
        params={params}
        poster="maxresdefault"
        webp
      />
    </div>
  );
};

export default YoutubeVideo;