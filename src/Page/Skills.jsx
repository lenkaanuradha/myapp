import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Skills() {
  return (
    <div className="mt=0">
      <div>
      <h1 class="text-3xl font-bold text-white text-center  tracking-wide">Skills <hr className="w-8 h-1 mx-auto my-5 border-0 rounded md:my-3 bg-blue-500"/></h1>

        <div className="grid grid-cols-4 gap-6 mt-6">
          {/* Row 1 */}
          <Card className=" bg-gray-800 text-blue-500">
            <CardHeader className="shadow-lg">
              <CardTitle>HTML</CardTitle>
            </CardHeader>
          </Card>
          <Card className=" bg-gray-800 text-blue-500">
            <CardHeader className="shadow-lg">
              <CardTitle>CSS</CardTitle>
            </CardHeader>
          </Card>
          <Card className=" bg-gray-800 text-blue-500">
            <CardHeader>
              <CardTitle>JavaScript</CardTitle>
            </CardHeader>
          </Card>
          <Card className=" bg-gray-800 text-blue-500">
            <CardHeader className="shadow-lg">
              <CardTitle>React</CardTitle>
            </CardHeader>
          </Card>

          {/* Row 2 */}
          <Card className=" bg-gray-800 text-blue-500">
            <CardHeader className="shadow-lg">
              <CardTitle>Node</CardTitle>
            </CardHeader>
          </Card>
          <Card className=" bg-gray-800 text-blue-500">
            <CardHeader className="shadow-lg">
              <CardTitle>Express</CardTitle>
            </CardHeader>
          </Card>
          <Card className=" bg-gray-800 text-blue-500">
            <CardHeader className="shadow-lg">
              <CardTitle>MongoDb</CardTitle>
            </CardHeader>
          </Card>
          <Card className=" bg-gray-800 text-blue-500">
            <CardHeader className="shadow-lg">
              <CardTitle>Computer Network</CardTitle>
            </CardHeader>
          </Card>

          {/* Row 3 */}
          <Card className=" bg-gray-800 text-blue-500">
            <CardHeader className="shadow-lg">
              <CardTitle>Operating Systems</CardTitle>
            </CardHeader>
          </Card>
          <Card className=" bg-gray-800 text-blue-500">
            <CardHeader className="shadow-lg">
              <CardTitle>Computer Networks</CardTitle>
            </CardHeader>
          </Card>
          <Card className=" bg-gray-800 text-blue-500">
            <CardHeader className="shadow-lg">
              <CardTitle>C++</CardTitle>
            </CardHeader>
          </Card>
          <Card className=" bg-gray-800 text-blue-500">
            <CardHeader className="shadow-lg">
              <CardTitle>Socket.io</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
