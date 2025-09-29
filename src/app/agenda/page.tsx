import { getEvents } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default async function AgendaPage() {
    const events = await getEvents();

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Agenda Taurina</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Consulta los próximos festejos, ferias y corridas de la temporada.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                {events.map(event => (
                    <Card key={event.id} className="w-full">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                             <CardTitle className="text-lg font-medium">{event.arena}, {event.city}</CardTitle>
                             <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="mr-2 h-4 w-4" />
                                {event.date}
                             </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-md text-foreground">{event.details}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
