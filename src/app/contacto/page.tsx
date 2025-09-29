import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Pin } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Contacto</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Estamos a tu disposición. Rellena el formulario o utiliza nuestros datos de contacto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Enviar un mensaje</CardTitle>
            <CardDescription>Nuestro equipo de redacción te responderá lo antes posible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" placeholder="Asunto del mensaje" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={5} />
              </div>
              <Button type="submit" className="w-full">Enviar Mensaje</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8 pt-8">
             <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0">
                    <Pin className="h-6 w-6"/>
                </div>
                <div>
                    <h3 className="text-lg font-semibold font-headline">Ubicación</h3>
                    <p className="text-muted-foreground">Calle de Alcalá, 237, 28028 Madrid, España</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6"/>
                </div>
                <div>
                    <h3 className="text-lg font-semibold font-headline">Email</h3>
                    <p className="text-muted-foreground">General: <a href="mailto:redaccion@tauropress.com" className="text-primary hover:underline">redaccion@tauropress.com</a></p>
                    <p className="text-muted-foreground">Publicidad: <a href="mailto:publicidad@tauropress.com" className="text-primary hover:underline">publicidad@tauropress.com</a></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
