"use client"
//components
import Blub from "@/components/Blub";
import Circles from "@/components/Circles";
import ServiceSlider from "@/components/ServiceSlider";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variant";

//translation
import "@/utils/i18n";
import { Trans } from "react-i18next";
const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      {/* <Circles /> */}
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text  */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <Trans i18nKey="services_title">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>

            </Trans>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 "
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus explicabo amet vel molestiae inventore veniam,
              deserunt accusantium ea atque beatae!
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {/* slider  */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Blub />
    </div>
  );
};

export default Services;
