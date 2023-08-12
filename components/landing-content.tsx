"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = [
  {
    name: "Sahil",
    avatar: "S",
    title: "Web Developer",
    description: "This is the best Website i've used!",
  },
  {
    name: "Sameer Sheikh",
    avatar: "SS",
    title: "Content Manager",
    description:
      "This app literally have a lot of potential. It helped me alot in writing scripts for me contents and i highly recommend all to use this and make your own contents or anything you want.",
  },
  {
    name: "Kriti Pathak",
    avatar: "KP",
    title: "Product Manager",
    description:
      "Damn! This is really awesome and worth every buck.I literally can do everything using this app",
  },
  {
    name: "Abhishek kapoor",
    avatar: "AK",
    title: "Student",
    description:
      "I highly recommend you'all this app. it helped me do my projects and even write some game codes for me and damn i m impressed by this app.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarFallback className="bg-gray-400 text-white">
                    {item.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
