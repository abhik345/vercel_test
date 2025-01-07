"use client";
import { motion } from "framer-motion";
import Coachcta from "../../components/Coachcta";
import CoachingBanner from "../../components/CoachingBanner";
import DiscoverCoaching from "../../components/DiscoverCoaching";
import HowtoWork from "../../components/HowtoWork";
import InfluentialPart from "../../components/InfluentialPart";
import InspirePart from "../../components/InspirePart";
import Pricing from "../../components/Pricing";
import Question from "../../components/Question";
import SuccessfullCoach from "../../components/SuccessfullCoach";
import TrendingPart from "../../components/TrendingPart";
import UnlockPower from "../../components/UnlockPower";
import WhatWillDoPart from "../../components/WhatWillDoPart";
import Newsletter from "@/components/Newsletter";
import {
  CoachingBannerAnimation,
  CtaAnimation,
  SlideTopAnimation,
  EaseinOutAnimation,
  HowtoworkAnimation,
  QuestionAnimation,
  SuccessfullCoachAnimation,
  TreadingAnimation,
} from "@/components/slideAnimation";

const Page = () => {
  return (
    <>
      <motion.div {...CoachingBannerAnimation}>
        <CoachingBanner />
      </motion.div>

      <motion.div {...SuccessfullCoachAnimation}>
        <SuccessfullCoach />
      </motion.div>

      <motion.div {...TreadingAnimation}>
        <TrendingPart />
      </motion.div>

      <motion.div {...EaseinOutAnimation}>
        <UnlockPower />
      </motion.div>

      <motion.div {...SlideTopAnimation}>
        <DiscoverCoaching />
      </motion.div>

      <motion.div {...QuestionAnimation}>
        <WhatWillDoPart />
      </motion.div>

      <motion.div {...CtaAnimation}>
        <Coachcta />
      </motion.div>

      <motion.div {...HowtoworkAnimation}>
        <HowtoWork />
      </motion.div>

      <motion.div {...CtaAnimation}>
        <InfluentialPart />
      </motion.div>

      <motion.div {...EaseinOutAnimation}>
        <Pricing />
      </motion.div>

      <motion.div {...QuestionAnimation}>
        <Question />
      </motion.div>

      <motion.div {...CtaAnimation}>
        <InspirePart />
      </motion.div>

      <motion.div {...SlideTopAnimation}>
        <Newsletter />
      </motion.div>
    </>
  );
};

export default Page;
