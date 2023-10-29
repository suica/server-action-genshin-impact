import { Button } from "@/components/ui/button";
import { GenshinImpactManager } from "@/lib/genshin-impact";

export default function Component() {
  return (
    <div className="w-screen h-screen bg-blue-100 flex justify-center items-center">
      <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg py-4 px-6">
        <form className="grid gap-4">
          <Button
            className="text-gray-700 dark:text-white border-gray-300 dark:border-gray-600 w-full h-300"
            variant="outline"
            formAction={async () => {
              "use server";
              const genshin = new GenshinImpactManager();
              await genshin.start();
              return;
            }}
          >
            <div className="flex flex-col justify-center">
              <div className="text-lg text-bold">原神，启动！</div>
              <div className="text-lg">Genshin, Start!</div>
            </div>
          </Button>
        </form>
      </div>
    </div>
  );
}
