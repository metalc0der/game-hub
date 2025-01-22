import { Platform } from "@/hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from "react-icons";
import { ReactElement, ReactNode } from "react";

interface Props {
    platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: {[key: string]: ReactNode} = {
        pc: <FaWindows />,
        playstation: <FaPlaystation />,
        xbox: <FaXbox />,
        ios: <MdPhoneIphone />,
        mac: <FaApple />,
        linux: <FaLinux />,
        nintendo: <SiNintendo />,
        web: <BsGlobe />,
        android: <FaAndroid />
    };

  return (
    <HStack marginY={1}>
        {platforms.map(( platform ) => (
            <Icon key={platform.id} >
                {iconMap[platform.slug]}
            </Icon>
        ))}
    </HStack>
  )
}

export default PlatformIconList