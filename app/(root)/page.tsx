import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>AI面試，讓你即刻就做好面試的萬全準備</h2>
          <p className="text-lg">與AI進行演練，擬真的面試問題與取得回饋</p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">開始面試演練</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robot-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>你的面試</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>您尚未進行過面試</p> */}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>開始一場面試</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>
          沒有可供進行的面試
        </p> */}
        </div>
      </section>
    </>
  );
}
