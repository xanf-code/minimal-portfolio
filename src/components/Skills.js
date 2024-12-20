"use client";

import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import fetchResume from "@/network/fetchResume";

export const Skills = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await fetchResume("skills"),
    queryKey: ["skills"],
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <Card className="mt-6 shadow-none">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {data.items.map((s) => (
            <Badge key={s.id} variant="secondary">
              {s.skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
