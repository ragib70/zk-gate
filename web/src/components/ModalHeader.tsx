import { useTheme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { tokens } from "../contexts/theme";
import CloseIcon from "@mui/icons-material/Close";

export const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "30rem",
	borderRadius: 3,
	boxShadow: 24,
};

const ModalHeader: FC<{
	title: string;
	subtitle: string;
	onCancel: () => void;
}> = ({ title, subtitle, onCancel }) => {
	const theme: any = useTheme();
	const colors = useMemo(() => tokens(theme.palette.mode), [theme]);
	return (
		<Box
			display="flex"
			alignItems="start"
			padding={"15px 0 15px 0"}
			sx={{
				borderWidth: "0 0 3px 0",
				borderStyle: "solid",
				borderColor: colors.grey[800],
				px: 4,
			}}
		>
			<Box>
				<Typography
					variant="h3"
					color={colors.grey[100]}
					paddingLeft={1}
				>
					{title}
				</Typography>
				<Typography
					variant="h6"
					color={colors.grey[100]}
					paddingLeft={1}
				>
					{subtitle}
				</Typography>
			</Box>
			<IconButton onClick={onCancel} sx={{ marginLeft: "auto" }}>
				<CloseIcon />
			</IconButton>
		</Box>
	);
};

export default ModalHeader;