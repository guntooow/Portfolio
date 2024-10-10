import { CodeXml as Logo } from "lucide-react";

function Header() {
    return(
        <header className="flex fixed backdrop-blur-md gap-96 p-8 bg-zinc-900 bg-opacity-80 shadow-green-700 shadow-lg w-screen justify-between">
            <div className="flex text-green-600 gap-3 font-bold text-xl">
                <Logo className="stroke-green-600 scale-150"/>
                <p>João_</p>
            </div>
            <ul className="flex gap-8 right-0 text-green-600 font-semibold">
                <li> <a href="#sobre">Sobre mim</a> </li>
                <li> <a href="#projetos">Projetos</a> </li>
                <li> <a href="#contato">Contato</a> </li>
            </ul>
        </header>
    );
};

export default Header;