import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <Card className="mb-6 shadow-none">
      <CardHeader>
        <CardTitle className="text-3xl">About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          To make a long and boring story shorter: Now I work on backend
          software development and my work output is finally catching up to my
          moral principles and aesthetic ideals. Oh, and on the flip side, I
          grapple with jujitsu on the side!. I enjoy expressing myself through
          designs and code that's why I created .
        </p>
      </CardContent>
    </Card>
  );
};
