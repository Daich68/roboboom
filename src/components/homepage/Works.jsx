import line from "/src/assets/images/line.jpg";
import robotarm from "/src/assets/images/robotarm.jpg";
import acc from "/src/assets/images/11.jpg";
import mathewschwartz from "/src/assets/images/mathew-schwartz.jpg";
import sunnyside from "/src/assets/images/21.jpg";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className="col-span-1 md:col-span-12">
          <Projects
            link="https://www.youtube.com/watch?v=QoNkpnpvEqc"
            img={line}
            alt="Line Follower Robot mockup"
            name="Line Follower Robot"
            type="Electronics • Programming"
            year="2024"
            tools="Arduino • C++ • Infrared Sensors • Breadboard"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://www.youtube.com/watch?v=uYN8eAXprm0"
            img={robotarm}
            alt="Robot Arm Project mockup"
            name="Robot Arm with Gripper"
            type="Mechanical Design • Electronics"
            year="2024"
            tools="Arduino • Servo Motors • 3D Printing • C++"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://www.youtube.com/watch?v=uYN8eAXprm0"
            img={acc}
            alt="Smart Parking System mockup"
            name="Smart Parking System"
            type="Programming • Sensors"
            year="2024"
            tools="Arduino • Ultrasonic Sensors • LCD Display • C++"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://www.youtube.com/watch?v=mS-L2fpV1Is"
            img={mathewschwartz}
            alt="Sumo Robot mockup"
            name="Sumo Wrestling Robot"
            type="Mechanical Design • Competition"
            year="2024"
            tools="Arduino • Motors • 3D Printing • Sensors"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
          <Projects
            link="https://www.youtube.com/watch?v=uYN8eAXprm0"
            img={sunnyside}
            alt="Obstacle Avoiding Robot mockup"
            name="Obstacle Avoiding Robot"
            type="Sensors • Programming"
            year="2023"
            tools="Arduino • Ultrasonic Sensors • Motors • C++"
          />
        </div>
      </div>
    </section>
  );
}
