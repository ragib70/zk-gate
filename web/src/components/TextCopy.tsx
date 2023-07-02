import { Box, Button, IconButton } from "@mui/material";
import { FC, useEffect, useMemo, useState } from "react";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import { useTheme } from "@emotion/react";
import { tokens } from "../contexts/theme";
import { toast } from "react-toastify";

interface TextCopyProps {
	text: string;
	title?: string;
	hidden?: boolean;
}

const TextCopy: FC<TextCopyProps> = (props) => {
	const theme: any = useTheme();
	const colors = useMemo(() => tokens(theme.palette.mode), [theme]);
	const [copied, setCopied] = useState(false);
	const [timer, setTimer] = useState<NodeJS.Timeout | undefined>(undefined);
	const [title, setTitle] = useState(props.title || "Copy text");
	useEffect(() => {
		if (timer) clearTimeout(timer);
		if (copied) {
			toast.info("Copied to clipboard.");
			setTimer(
				setTimeout(() => {
					setCopied(false);
				}, 5000)
			);
		} else {
			setTimer(undefined);
		}
	}, [copied]);
    const placeholder = <Box display={'inline-flex'} sx={{height: '15px', width: '15px'}}></Box>;
	return !props.hidden ? (
		<IconButton
			title={title}
			onClick={() => {
				navigator.clipboard.writeText(props.text);
				setCopied(true);
				setTitle("Copied");
			}}
			size="small"
			sx={{ "&:hover": { backgroundColor: colors.primary[400] } }}
		>
			{copied ? (
				<AssignmentTurnedInOutlinedIcon sx={{ fontSize: "10px" }} />
			) : (
				<ContentPasteOutlinedIcon sx={{ fontSize: "10px" }} />
			)}
		</IconButton>
	) : placeholder;
};

export default TextCopy;
