export default function VideoSection() {
  return (
    <section>
      <div className="relative" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src="https://player.vimeo.com/video/1138836981?control=0&autoplay=1&muted=1&background=1&loop=1"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          title="Video"
        />
      </div>
    </section>
  );
}

