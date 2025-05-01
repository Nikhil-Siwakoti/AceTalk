import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6  max-w-lg">
          <h2>Get Interview-Ready With AI and get feedback in an Instant.</h2>
          <p className="text-lg">
            Practice on real interview question according to your prefrence.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="Robot Picture"
          width={400}
          height={400}
          className="max-sm::hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
         {dummyInterviews.map((interview)=>(
          <InterviewCard key={interview.id}{...interview}/>
         ))}
         {/* { <p>You haven&apos;t taken any interview yet.</p>} */}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
      <h2>Take an Interview</h2>
        <div className="interviews-section">
        {dummyInterviews.map((interview)=>(
          <InterviewCard key={interview.id}{...interview}/>
         ))}

        
        </div>
      </section>
    </>
  );
};

export default page;
