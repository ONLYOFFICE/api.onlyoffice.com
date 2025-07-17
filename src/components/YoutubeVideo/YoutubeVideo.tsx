import React, { useEffect, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import styles from "./styles.module.css";

type Props = {
  videoId: string;
  start?: number;
  posterType: string;
};

const YoutubeVideo = ({ videoId, start, posterType }: Props) => {
  const startParam = start ? `&start=${start}` : "";
  const [posterParam, setPosterParam] = posterType ? useState<"maxresdefault" | "hqdefault">("hqdefault") : useState<"maxresdefault" | "hqdefault">("maxresdefault");
  const params = `autoplay=1&autohide=1&showinfo=0&rel=0${startParam}`;

  return (
    <div className={styles.LiteYouTubeEmbedWrapper}>
      <LiteYouTubeEmbed
        id={videoId}
        title="video"
        params={params}
        poster={posterParam}
        cookie={true}
      />
    </div>
  );
};

export default YoutubeVideo;