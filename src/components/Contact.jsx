import { UserIcon as Nome } from "lucide-react"
import { Mail as Email } from "lucide-react"
import { Phone as Telefone } from "lucide-react"
import { MessageCircle as Mensagem } from "lucide-react"
import { MapPin as Pin } from "lucide-react"
import TextArea from "./TextArea"
import Input from "./Input"
import Button from "./Button"

function Contact() {
    return (
        <div id="contato" className="flex p-48 gap-1 justify-between overflow-hidden">
            <div className="flex flex-col">
                <h1 className="container text-8xl text-purple-600 font-bold">Contate-me!</h1>
                <h1 className="text-2xl text-purple-400 font-semibold p-2">Entre em contato comigo por email!</h1>
            </div>
            <div className="flex flex-col gap-2" >
                <main className="flex gap-2">
                    <div className="flex flex-col gap-2">
                        <Input img={<Nome className="stroke-purple-500" />} placeholder="Nome" />
                        <Input img={<Email className="stroke-purple-500" />} placeholder="E-mail" />
                        <Input img={<Telefone className="stroke-purple-500" />} placeholder="Telefone" />
                        <Input img={<Pin className="stroke-purple-500" />} placeholder="Cidade" />
                        <Input img={<Pin className="stroke-purple-500" />} placeholder="Rua" />
                        <Input img={<Pin className="stroke-purple-500" />} placeholder="Cep" />
                    </div>
                    <div>
                        <TextArea placeholder="Mensagem" img={<Mensagem className="stroke-purple-500 self-start" />} />
                    </div>
                </main>
                <Button content="Enviar!" />
            </div >
        </div >
    )
}

export default Contact