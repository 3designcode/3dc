import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-extrabold">Coming Soon</h1>
        <p>We are designing and branding a new website.</p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button as="a" 
                  href="mailto:yourworkemail@example.com?subject=Work with Us Inquiry"
                  className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                    Work With Us
          </Button>
        </div>
      </main>
      
    </div>
  );
}
