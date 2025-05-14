import { useState, useRef } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setPlaying(true);
    }
  };

  return (
    <div className="mt-8 flex justify-center">
      <div className="relative w-full max-w-4xl mx-4 md:mx-0 cursor-pointer">
        {/* Thumbnail personalizado antes de reproducir */}
        {!playing && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black rounded-lg cursor-pointer"
            onClick={handlePlay}
            style={{
              backgroundImage: `url('/assets/images/video-thumbnail.png')`, // Imagen de thumbnail
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative flex items-center justify-center w-20 h-20 bg-white rounded-full border-4 border-gray-300 shadow-lg hover:scale-110 transition-transform">
              <PlayIcon className="w-10 h-10 text-black" />
            </div>
          </div>
        )}

        {/* Video */}
        <video
          ref={videoRef}
          width="100%"
          height="auto"
          controls
          className="rounded-lg shadow-lg"
          onPlay={() => setPlaying(true)}
        >
          <source src="/assets/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
