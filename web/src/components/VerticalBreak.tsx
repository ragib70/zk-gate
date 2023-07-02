import { useTheme } from "@emotion/react";
import { FC, useMemo } from "react";
import { tokens } from "../contexts/theme";

const VerticalBreak: FC = () => {
	const theme: any = useTheme();
	const colors = useMemo(() => tokens(theme.palette.mode), [theme]);
	return (
		<span
			style={{
				width: "2px",
				margin: "0 5px 0 5px",
                backgroundColor: colors.primary[900],
                boxShadow: '2'
			}}
		>
			{" "}
		</span>
	);
};

export default VerticalBreak;
