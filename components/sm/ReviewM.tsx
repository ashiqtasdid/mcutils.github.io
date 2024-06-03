import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const ReviewM = () => {
  return (
    <div className="py-20 h-screen mx-2">
      <div className="w-[400px] space-y-8">
        <div className="my-auto items-center align-middle">
          <h1 className=" font-black text-5xl">
            See what our users have to say
          </h1>
        </div>
        <div className="">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            deserunt ipsum repellendus vero dolore error ipsam autem adipisci
            porro harum! Labore id non officia pariatur ea recusandae
            praesentium dolorum alias.
          </p>
        </div>
      </div>
      <div>
        <Carousel className="w-full py-10">
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold">We</h1>
                    <h2>--{">"}</h2>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold">Forgot</h1>
                    <h2>--{">"}</h2>

                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold">To</h1>
                    <h2>--{">"}</h2>

                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold">Take</h1>
                    <h2>--{">"}</h2>

                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold">Reviews</h1>
                    <h2>--{">"}</h2>

                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold">From</h1>
                    <h2>--{">"}</h2>

                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold">Our</h1>
                    <h2>--{">"}</h2>

                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold">Users</h1>
                    <h2>--{">"}</h2>

                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold">
                      Feel free to drop a review on our <span>Discord</span> or{" "}
                      <span>Twitter</span> Handle
                    </h1>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewM;
