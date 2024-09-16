import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import {motion} from "framer-motion"
import Logo from "./logo";
const Footer = () => {
    return (
        <div className="mb-8 mt-20">
            <div className="flex items-center justify-center">
                <motion.h2
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.5}} >
                    <Logo/>
                </motion.h2>
            </div>
            <br/>
            <div className="flex items-center justify-center gap-8">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <motion.a 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:0.2,delay: index*0.5}}
                        
                    key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                    </motion.a>
                ))}
            </div>
            <br/>
            <p className="text-center text-sm tracking-wide text-gray-400">
                © 2024 Ch Huzaifa. All rights reserved.
            </p>
        </div>
    );
}

export default Footer;
