import { useTheme } from "@emotion/react";
import { FC, useMemo } from "react";
import { tokens } from "../contexts/theme";

const InfoBadge: FC<{text: string; color: "primary" | 'warning' | 'success'}> = (props) => {
    const theme: any = useTheme();
	const colors = useMemo(() => tokens(theme.palette.mode), [theme]);
    return (
        <span style={{backgroundColor: colors.greenAccent[400], margin: '0 0 0 10px', fontSize: 10, padding: '1px 5px 1px 5px', borderRadius: '5px'}}>{props.text}</span>
    )
} 

export default InfoBadge;