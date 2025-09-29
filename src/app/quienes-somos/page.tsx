import Image from "next/image";
import { getImageById } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BullIcon } from "@/components/icons/BullIcon";

const teamMembers = [
    {
        name: "Javier Pérez",
        role: "Director y Fundador",
        imageId: "quienes-somos-1",
        bio: "Periodista de vocación y aficionado de cuna. Fundó TauroPress con la misión de ofrecer una visión honesta y apasionada de la fiesta. Su pluma es conocida por su rigor y su capacidad para transmitir la emoción del ruedo."
    },
    {
        name: "Ana Martínez",
        role: "Fotógrafa Jefa",
        imageId: "quienes-somos-2",
        bio: "La mirada de TauroPress. Ana captura con su objetivo la belleza plástica, la tensión y el drama de la corrida. Sus fotografías han sido galardonadas en múltiples ocasiones y publicadas en medios internacionales."
    },
    {
        name: "Carlos Crivell",
        role: "Editor y Cronista Senior",
        imageId: "quienes-somos-3",
        bio: "La voz de la experiencia. Con más de 30 años cubriendo la actualidad taurina, Carlos aporta la perspectiva y el análisis profundo que caracterizan a nuestras crónicas. Un referente para aficionados y profesionales."
    }
]


export default function QuienesSomosPage() {

  return (
    <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Quiénes Somos</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Un equipo de profesionales apasionados por el mundo del toro, comprometidos con la información veraz, el análisis riguroso y la defensa de la cultura taurina.
            </p>
        </div>
        
        <div className="bg-card/50 rounded-lg p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8">
            <BullIcon className="h-24 w-24 text-primary flex-shrink-0" />
            <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Nuestra Misión</h2>
                <p className="text-muted-foreground text-lg">
                    En TauroPress, creemos en una Tauromaquia íntegra, emocionante y llena de arte. Nuestra misión es ser el puente entre la riqueza de la fiesta y una afición global y exigente. Buscamos informar con objetividad, fomentar el debate constructivo y poner en valor la dimensión cultural, ecológica y humana del toreo.
                </p>
            </div>
        </div>

        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-primary mb-4">Nuestro Equipo</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map(member => {
                const image = getImageById(member.imageId);
                return (
                    <Card key={member.name} className="flex flex-col text-center">
                        <CardHeader className="items-center">
                            {image && (
                                <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                                    <Image 
                                        src={image.imageUrl}
                                        alt={`Retrato de ${member.name}`}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={image.imageHint}
                                    />
                                </div>
                            )}
                            <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                            <p className="text-sm font-semibold text-primary">{member.role}</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">{member.bio}</p>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    </div>
  );
}
