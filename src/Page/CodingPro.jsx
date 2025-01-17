import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CodingPro() {
  return (
    <div className="">
      <div className="w-full my-5">
        <h1 className="text-white font-bold text-3xl my-10 text-center">
          Coding Profiles
          <hr className="w-20 h-1 mx-auto my-4 border-0 rounded md:my-3 bg-blue-500"/>
        </h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="flex">
            <CarouselItem className="basis-1/4">
              <div className="p-2">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <div className="card image-full sm:max-w-sm">
                      <figure>
                        <a href="https://leetcode.com/u/b421008/"><img
                          src="/images/leetcode.png"
                          alt="Profile 1"
                        /></a>
                      </figure>
                     
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className="p-2">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <div className="card image-full sm:max-w-sm">
                      <figure>
                        <a href="https://www.geeksforgeeks.org/user/anuradhacuvk/"><img
                          src="/images/gfg.png"
                          alt="Profile 2"
                        /></a>
                      </figure>
                    
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className="p-2">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <div className="card image-full sm:max-w-sm">
                      <figure>
                        <a href=""><img
                          src="/images/codingNinja.png"
                          alt="Profile 3"
                        /></a>
                      </figure>
                      
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className="p-2">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <div className="card image-full sm:max-w-sm">
                      <figure>
                        <a href="https://www.hackerrank.com/dashboard"><img
                          src="/images/hackerrank.png"
                        
                          alt="Profile 3"
                        /></a>
                      </figure>
                      
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className="p-2">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <div className="card image-full sm:max-w-sm">
                      <figure>
                        <a href="https://github.com/lenkaanuradha"><img
                          src="/images/git.png"
                          alt="Profile 3"
                        />
                        </a>
                      </figure>
                      
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
