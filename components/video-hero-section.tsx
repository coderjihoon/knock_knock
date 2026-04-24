export function VideoHeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-dark-olive">
      <div className="relative min-h-[100svh]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video/4K 5.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,42,38,0.18)_0%,rgba(43,42,38,0.38)_46%,rgba(43,42,38,0.58)_100%)]" />

        <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-8 py-16 text-center">
          <div className="max-w-[18rem] space-y-5 text-card-white">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-card-white/70">
              Knock Knock
            </p>
            <h1 className="font-title text-[2.55rem] leading-[1.2] tracking-[-0.05em] text-card-white">
              결국 남는 건,
              <br />
              어떤 사람과
              <br />
              함께 읽었는가
            </h1>
            <p className="text-[0.98rem] leading-7 tracking-[-0.02em] text-card-white/82">
              서로의 삶을 오래 듣고 싶은 사람들과, 한 권의 책을 사이에 두고
              천천히 가까워지는 시간입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
