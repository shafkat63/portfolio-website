"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

const Contact = () => {
	const { ref } = useSectionInView("Experience");

	return (
		<motion.section
			id="contact"
			ref={ref}
			className=" scroll-mt-28 mb-28 sm:mb-28 w-[min(100%,38rem)] "
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>Contact Me</SectionHeading>
			<p className="text-gray-700 text-center -mt-4 dark:text-white/80 ">
				Please contect me directly at{" "}
				<a href="mailto:msm.shafkat@gmail.com ">msm.shafkat@gmail.com</a> or
				through this form.
			</p>
			<form
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);
					if (error) {
						toast.error(error);
						return;
					}
					toast.success("Email sent successfully!");
				}}
				className="mt-10 flex flex-col dark:text-black "
			>
				<input
					name="senderEmail"
					type="email"
					required
					maxLength={500}
					className="px-4 h-14 rounded-lg borderBlack 
							dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 
								transition-all dark:outline-none"
					placeholder="Your Email..."
				/>
				<textarea
					name="message"
					required
					maxLength={5000}
					className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white 
								dark:bg-opacity-80 dark:focus:bg-opacity-100 
								transition-all dark:outline-none"
					placeholder="Your Message..."
				></textarea>
				<SubmitBtn />
			</form>
		</motion.section>
	);
};

export default Contact;
