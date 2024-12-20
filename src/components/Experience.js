"use client";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import fetchResume from "@/network/fetchResume";

export const Experience = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await fetchResume("experiences"),
    queryKey: ["experiences"],
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Sorry There was an Error</div>;
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {data.items.map((j) => (
              <li
                key={j.id}
                className="border-b last:border-b-0 pb-8 last:pb-0"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={
                      `https://minimal-portfolio-darshan.pockethost.io/api/files/pbc_1928539396/${j.id}/` +
                      j.logo
                    }
                    alt={j.company}
                    width={40}
                    height={40}
                    className="rounded-md border object-cover shadow-none"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <p className="text-sm mt-2">{j.description}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
