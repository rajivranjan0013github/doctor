import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import kidney from "../../assets/Blog_image/blog_kidney.png";
import Enlarged_Prostate from "../../assets/Blog_image/Enlarged_Prostate.jpg";
import food_kidney from "../../assets/Blog_image/food_kidney.jpg";
import prostate_blog from "../../assets/Blog_image/prostate_blog.jpg";
import typeStone from "../../assets/Blog_image/types-of-kidney-stone.webp";
import myths from "../../assets/Blog_image/myths.jpg";

const Blog = () => {
  window.scrollTo(0, 0);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const animationVariants = {
    hidden: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 2 } },
  };
  return (
    <div className=" pl-10  justify-center w-full flex">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "animate" : "hidden"}
        variants={animationVariants}
        className="md:w-[80%] py-[1rem]    "
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <BlogCard
            title={"Can Kidney Stones Be Removed Without Surgery"}
            img={kidney}
          />
          <BlogCard
            title={
              "Treating Enlarged Prostate With TURP Surgery: Benefits, Risks, And Recovery"
            }
            img={Enlarged_Prostate}
          />
        </div>

        <div className=" py-4 flex flex-col sm:flex-row gap-4">
          <BlogCard
            title={"Prostate Health: What Men Need to Know"}
            img={prostate_blog}
          />
          <BlogCard
            title={"Foods To Avoid If You Have Kidney Stone"}
            img={food_kidney}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <BlogCard
            title={"Understanding the Different Types of Kidney Stones"}
            img={typeStone}
          />
          <BlogCard
            title={"Urological Myths Debunked: Separating Fact from Fiction"}
            img={myths}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
