import React from "react";

interface Props {
  src: string;
  dark?: boolean;
}

export default function Video({src, dark}: Props) {
  return (
    <>
      <video
        className={dark ? "light-video" : undefined}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={`${src}.webm`} type="video/webm" />
      </video>
      {dark && (
        <video
          className="dark-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={`${src}.dark.webm`} type="video/webm" />
        </video>
      )}
    </>
  );
}
