import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <>
      <h2 className="text-xl font-bold mt-6">🚀 About me</h2>
      <Card className="mb-2 shadow-none border-none">
        <CardContent className="pl-0">
          <p className="text-muted-foreground pt-6">
            To make a long and boring story shorter: Now I work on backend
            software development and my work output is finally catching up to my
            moral principles and aesthetic ideals. Oh, and on the flip side, I
            grapple with jujitsu on the side!. I enjoy expressing myself through
            designs and code that's why I created .
          </p>
        </CardContent>
      </Card>
    </>
  );
};
