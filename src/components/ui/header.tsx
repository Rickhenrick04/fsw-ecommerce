import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentCircleIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-3">
            <Button
              variant="outline"
              className="w-full justify-start text-left gap-3">
              <LogInIcon />
                Fazer login
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start text-left gap-3">
              <HomeIcon />
                Início
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start text-left gap-3">
              <PercentCircleIcon />
                Ofertas
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start text-left gap-3">
              <ListOrderedIcon />
                Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold ">
        <span className="text-primary">FSW</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
