import styles from "./FeaturedVideo.module.css";

export const FeaturedVideo = ({ videoData }) => {
  return (
    <div className={styles.featuredVideo}>
      {!videoData.isVideoPlaying ? (
        <div
          className={styles.coverImage}
          style={{
            backgroundImage: `url(/src/assets/images/${videoData?.CoverImage})`,
            backgroundSize: videoData.Title !== "The Irishman" && "contain",
            backgroundPosition: videoData.Title !== "The Irishman" && "center",
          }}
        >
          <div className={styles.videoInfo}>
            <p className={styles.category}>{videoData.Category}</p>
            <img
              src={`/src/assets/images/${videoData?.TitleImage}`}
              alt={videoData.Title}
              className={styles.titleImage}
            />
            <p className={styles.movieDetails}>
              {videoData.ReleaseYear} | {videoData.MpaRating} |{" "}
              {Math.floor(videoData.Duration / 3600)}h{" "}
              {Math.floor((videoData.Duration % 3600) / 60)}m
            </p>
            <p className={styles.description}>{videoData.Description}</p>
            <div className={styles.buttons}>
              <button className={styles.playButton}>Play</button>
              <button className={styles.infoButton}>More Info</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.videoContainer}>
          <video className={styles.videoBackground} autoPlay muted loop>
            <source
              // videourl doesn't work
              // src={videoData.VideoUrl}
              src="https://file-examples.com/storage/feb05093336710053a32bc1/2017/04/file_example_MP4_480_1_5MG.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}
    </div>
  );
};
