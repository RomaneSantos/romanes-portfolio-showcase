
import { Code, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-darkblue text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code className="h-5 w-5 text-tech-lightblue" />
            <span className="text-xl font-bold">RômaneDev</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-tech-lightgray">
              © {currentYear} Rômane Santos. Todos os direitos reservados.
            </p>
            <p className="text-sm text-tech-lightgray mt-1 flex items-center justify-center md:justify-end">
              Feito com <Heart className="h-4 w-4 text-red-500 mx-1" /> em Curitiba, PR
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
