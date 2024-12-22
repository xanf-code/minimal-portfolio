import Link from "next/link";
import Image from "next/image";

import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const socials = [
  {
    name: "Github",
    link: "https://github.com/xanf-code",
    icon: <FaGithub className="size-4" />,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/darshanaswath",
    icon: <FaLinkedin className="size-4" />,
  },
  {
    name: "X (Twitter)",
    link: "https://x.com/darshanaswath__",
    icon: <FaXTwitter className="size-4" />,
  },
];

export const Profile = () => {
  return (
    <Card className="shadow-none border-none">
      <CardContent className="pt-6">
        <div className="flex flex-col items-start gap-2 ">
          <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
            <Image
              width={150}
              height={150}
              quality={100}
              src="/me.webp"
              alt="Profile Picture"
              className="rounded-full size-12 md:w-full h-auto object-cover border-2"
            />
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-bold md:mt-4 text-xl md:text-2xl">
                Darshan Aswathappa
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Software Developer
              </p>
            </div>
          </div>
          <p className="mt-2 text-start text-sm text-muted-foreground">
            I'm a huge cloud tech enthusiast who loves solving complex puzzles
            in the software world. Currently pursuing my Master's in Software
            Engineering Systems at Northeastern University.
          </p>
          <Button className="mt-4 w-full" asChild>
            <Link target="_blank" href="/resume.pdf" className="font-semibold">
              MY RESUME
            </Link>
          </Button>
          <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
            {socials.map((s, i) => {
              const parts = s.link.split("/");
              const username = parts[parts.length - 1];
              return (
                <Link
                  key={i}
                  href={s.link}
                  target="_blank"
                  aria-label={`${s.name} Logo`}
                  className="cursor-pointer flex items-center gap-2 group"
                >
                  {s.icon}
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                    /{username}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
