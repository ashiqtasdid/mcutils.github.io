import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";

export const runtime = "edge";
const interBold = fetch(
  new URL("../../../assets/fonts/GeistMono-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await interBold;
    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");

    if (!title) {
      return new Response("No title found", { status: 500 });
    }

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div tw="flex relative flex-col p-12 w-full h-full items-start text-black bg-white">
          <div tw="flex items-center">
            <p tw="ml-2 font-bold text-2xl">Minecraft Utilities</p>
          </div>
          <div tw="flex flex-col flex-1 py-10">
            <div tw="flex text-[80px] font-bold text-[50px]">{heading}</div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl">https://mcutils.github.io</div>
            <div tw="flex items-center text-xl">
              <div tw="flex ml-2">
                Copyright © 2024, Minecraft Utilities - All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
