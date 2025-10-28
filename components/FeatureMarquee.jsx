import React from "react";
import { Marquee } from "./ui/marquee";
import { ButtonHover } from "./Pages/SaasTech";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import InfiniteCarousel from "./hero/InfiniteCarousel";

const FeatureMarquee = ({ features }) => {
  return <InfiniteCarousel items={features} autoscroll={false} />;
};

export default FeatureMarquee;
