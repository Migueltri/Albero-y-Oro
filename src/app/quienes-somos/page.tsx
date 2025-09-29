import Image from "next/image";
import { getImageById } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BullIcon } from "@/components/icons/BullIcon";

export default function QuienesSomosPage() {

  return (
    <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Quiénes Somos</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                portal taurino basado en la actualidad taurina
            </div>
        </div>

        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-primary mb-4">Nuestro Equipo</h2>
        </div>
        
  );
}
