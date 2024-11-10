
export default function Role({forwardedRef}) {
  return (
    <section ref={forwardedRef} id="about" className="select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden nav-change" aria-label="">
      <div className="flex w-full items-center space-x-20">
        <h1 className="text-heading-1 font-medium text-secondary-400 leading-[1.25em] md:leading-[1.08em]">
        We create engaging educational programs that inspire children and help them develop skills in robotics. Through hands-on activities and a creative approach, we foster confidence and a passion for learning. Our school encourages the exploration of technology and scientific thinking, connecting education with optimism and curiosity for the future.
        </h1>
      </div>
    </section>
  );
}
