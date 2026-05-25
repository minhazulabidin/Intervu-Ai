import { SignIn } from '@clerk/nextjs'
import { GalleryVerticalEnd } from "lucide-react"
import Link from 'next/link'
import mockImg from "../../../../public/mock.jpg";
import Image from 'next/image';

export default function Page() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.08),transparent_30%)]">
      <div className="flex flex-col gap-4 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Intervu AI
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="">
            <SignIn />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={mockImg}
          alt="Image"
          width={1000}
          height={1000}
          className="w-full h-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
