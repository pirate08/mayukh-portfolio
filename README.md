This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Part cut from skills section -
{/_ --My Process-- _/}
<div className="mt-24 rounded-3xl bg-[#030617] p-8 md:p-16 border border-white/5">
<h3 className="text-2xl md:text-3xl font-bold text-white mb-16 text-center">
My <span className="text-primary">Process</span>
</h3>

          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 relative">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="flex-1 flex flex-col items-center text-center relative group w-full"
              >
                {/* Connecting Line (Desktop Only) */}
                {index !== processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-linear-to-r from-primary/50 to-transparent z-0" />
                )}

                {/* Number Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mb-6 shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-transform duration-300 group-hover:scale-110">
                  {step.id}
                </div>

                {/* Text Content */}
                <h4 className="text-white font-bold text-lg mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-400 text-sm md:text-base max-w-50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
