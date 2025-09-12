import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl text-amber-300">Hello, GSAP</h1>
      </div>
  );
}
