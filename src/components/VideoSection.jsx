import React from "react";

const VideoSection = ({
  src,
  poster,
  title = "Video",
  sectionClass = "py-5",
  containerClass = "container-fluid px-0",
  ratio = "ratio ratio-16x9",
  backgroundClass = "bg-black",
  minHeightClass = "",
  objectFit = "contain",
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  paddingPercent,
}) => {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        {paddingPercent ? (
          <div
            className={`${backgroundClass} ${minHeightClass}`.trim()}
            style={{ position: "relative", paddingTop: `${paddingPercent}%` }}
          >
            <video
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ objectFit: objectFit }}
              controls={controls}
              preload="metadata"
              playsInline
              autoPlay={autoPlay}
              muted={muted}
              loop={loop}
              poster={poster}
              aria-label={title}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div className={`${ratio} ${backgroundClass} ${minHeightClass}`.trim()}>
            <video
              className="w-100 h-[100px]"
              style={{ objectFit: objectFit }}
              controls={controls}
              preload="metadata"
              playsInline
              autoPlay={autoPlay}
              muted={muted}
              loop={loop}
              poster={poster}
              aria-label={title}
              
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;


