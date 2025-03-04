"use client";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { fetchDataWithCache } from "@/lib/fetch-data-server";

export const Experience = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await fetchDataWithCache("get-jobs"),
    queryKey: ["experiences"],
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Sorry There was an Error</div>;
  return (
    <>
      <h2 className="text-xl font-bold py-4">🏢 Work Experience</h2>
      <Card className="shadow-none border-none">
        <CardContent className="pt-4 pl-0">
          <ul className="space-y-8">
            {data.jobs.map((j) => (
              <li
                key={j._id}
                className="border-b last:border-b-0 pb-8 last:pb-0 border-gray-800"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className="rounded-md border-0 object-cover shadow-none bg-white"
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
                <p className="text-sm mt-2 text-gray-300">{j.description}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
