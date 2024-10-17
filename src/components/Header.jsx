import { CodeXml as Logo } from "lucide-react";
import { Users as Sobre } from "lucide-react";
import { AppWindowMac as Projeto } from "lucide-react";
import { Send as Contato } from "lucide-react";

function Header() {
    return(
        <header className="z-50 pl-32 pr-32 flex sticky backdrop-blur-lg gap-96 p-8 bg-gray-200 bg-opacity-80 shadow-violet-300  shadow-lg w-screen justify-between">
            <div className="flex text-purple-500 gap-3 font-bold text-xl opacity-80 cursor-pointer transition-all hover:opacity-100">
                <Logo className="stroke-purple-500 scale-150"/>
                <p>João_</p>
            </div>
            <ul className="flex gap-8 right-0 text-purple-600 font-semibold">
                <li className="opacity-80 hover:opacity-100 transition-all flex gap-2">
                    <Sobre className="hover fill-purple-200"/>
                    <a href="#sobre">Sobre mim</a>
                </li>
                <li className="opacity-80 hover:opacity-100 flex gap-2">
                    <Projeto className="hover: fill-purple-200"/>
                    <a href="#projetos">Projetos</a>
                </li>
                <li className="opacity-80 hover:opacity-100 flex gap-2">
                    <Contato className="hover: fill-purple-200"/>
                    <a href="#contato">Contato</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;