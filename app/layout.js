import { Outfit,Ovo} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  
  subsets: ["latin"],weight:["400","500","600","700"]
});
const ovo = Ovo({
  
  subsets: ["latin"],weight:["400"]
});



export const metadata = {
  title: "Thaung Htike Htoo",
  description: "Portfiolio",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" className="scroll-smooth"> 
      <body
        className={`antialiased leading-8 overflow-x-hidden 
                   
                ${outfit.className} ${ovo.className}`}
      >
        {children}
      </body>
    </html>
  );
}
// dark:bg-darkTheme dark:text-white 