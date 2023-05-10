import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const index = () => {
  // useEffect(() => {
  //   Aos.init();
  // }, []);
  return (
    <main>
      {/* BACKGROUND NURSE */}
      <Image
        src={"/bg-nurse.png"}
        width={590}
        height={847}
        alt="bg-nurse"
        className="absolute -z-10 right-10"
      />

      {/* NAVBAR */}
      <section className="py-12">
        <div className="container mx-auto px-8" data-aos="fade-down">
          <div className="flex items-center justify-between">
            <div className="w-3/8">
              <Image src={"/logo.svg"} width={200} height={24} alt="logo" />
            </div>

            <div className="w-5/12">
              <div className="flex gap-[40px] items-center justify-start">
                <Link href={"#"}>
                  <h3 className="font-semibold text-nd text-[#101C45]">Home</h3>
                </Link>
                <Link href={"#"}>
                  <h3 className="font-normal text-nd text-[#0000000]">
                    Features
                  </h3>
                </Link>
                <Link href={"#"}>
                  <h3 className="font-normal text-nd text-[#0000000]">Blog</h3>
                </Link>
                <Link href={"#"}>
                  <h3 className="font-normal text-nd text-[#0000000]">
                    About Us
                  </h3>
                </Link>
              </div>
            </div>
            <div className="w-4/12">
              <div className="flex gap-[20px] justify-start">
                <button className="border-0 bg-transparent text-[#101C45] font-semibold px-5 py-2">
                  Login
                </button>
                <button className="border-2 border-solid border-[#101C45] bg-transparent text-[#101C45] font-semibold px-5 py-2">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="file gap-5 items-center flex">
            <div className="w-5/12 justify-start">
              <h1
                className="font-mono text-5xl font-medium text-[#101C4] mb-4"
                data-aos="fade-right"
              >
                Get the healthcare you need, when you need it.
              </h1>
              <p
                className="font-mono text-lg font-normal text-[#101C4] mb-10"
                data-aos="fade-left"
              >
                Manage all of your healthcare needs in one convenient place -
                from booking appointments to tracking your healt history
              </p>
              <button
                className="bg-[#203271] text-white font-normal px-9 py-4 text-lg mb-10"
                data-aos="flip-right"
              >
                Book An Appointment
              </button>
            </div>

            <div
              className="w-5/12 justify-center flex relative pr-12 pt-0"
              data-aos="flip-left"
            >
              <div className="p-5 bg-white rounded-lg max-w-[292px] pt-3 shadow-quote">
                <div className="flex justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={"/user-review.png"}
                      width={90}
                      height={90}
                      alt="user-review"
                    />
                  </div>
                  <Image
                    src={"/ic-quote.png"}
                    width={24}
                    height={24}
                    alt="icon-quote"
                    className="justify-end pt-0"
                  />
                </div>
                <p className="text-[#101c45] font-normal text-xs leading-5">
                  “The doctor appointment app has been great for me. Scheduling
                  appointments and getting medication reminders is much easier,
                  and I love the option for virtual consultations. I`d recommend
                  this app to others.”
                </p>
              </div>
            </div>
            <Image
              src={"/user-nurse.png"}
              width={530}
              height={794}
              alt="nurse"
              className="absolute -z-10- right-10 mt-11"
              data-aos="fade-up"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-[#203271] py-12 bottom-0 mt-40 mx-20 backdrop-brightness-50">
        <div className="container mx-auto px-8" data-aos="fade-up">
          <div className="grid grid-cols-3 gap-8">
            <div className="flex items-start gap-6">
              <Image
                src={"/ic-calendar.png"}
                width={40}
                height={40}
                alt="icon-calendar"
              />
              <div>
                <h4 className="font-mono text-lg font-bold text-white">
                  Online appointment Scheduling
                </h4>
                <h6 className="font-mono text-lg font-light text-[#FFFFFFCC]">
                  Allows users to schedule appointments with their healthcare
                  provider through the app.
                </h6>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <Image
                src={"/ic-alarm.png"}
                width={40}
                height={40}
                alt="icon-calendar"
              />
              <div>
                <h4 className="font-mono text-lg font-bold text-white">
                  Medication Reminders
                </h4>
                <h6 className="font-mono text-lg font-light text-[#FFFFFFCC]">
                  Allows users to schedule appointments with their healthcare
                  provider through the app.
                </h6>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <Image
                src={"/ic-cam.png"}
                width={40}
                height={40}
                alt="icon-alarm"
              />
              <div>
                <h4 className="font-mono text-lg font-bold text-white">
                  Virtual consultations
                </h4>
                <h6 className="font-mono text-lg font-light text-[#FFFFFFCC]">
                  Allows users to schedule appointments with their healthcare
                  provider through the app.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default index;
