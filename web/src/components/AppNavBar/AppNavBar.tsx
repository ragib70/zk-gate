import { useTheme } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import { FC, useContext, useMemo } from "react";
import { ColorModeContext, tokens } from "../../contexts/theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import UserDropdown from "../UserDropdown/UserDropdown";
import { PageContext } from "../../contexts/page";

const AppNavBar: FC<{ search?: boolean; profile?: boolean }> = (props) => {
	const theme: any = useTheme();
	const colors = useMemo(() => tokens(theme.palette.mode), [theme]);
	const colorMode = useContext(ColorModeContext);
	const { setSearchText, searchText } = useContext(PageContext);

	return (
		<Box display="flex" p={2} position='sticky' top={0} sx={{backgroundColor: colors.primary[400]}} zIndex={11} boxShadow={1}>
			{props.search && (
				<Box
					display="flex"
					borderRadius="3px"
					sx={{ backgroundColor: colors.primary[900] }}
				>
					<InputBase
						sx={{ ml: 2, flex: 1 }}
						placeholder="Search"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					/>
					<IconButton type="button" sx={{ p: 1 }}>
						<SearchIcon />
					</IconButton>
				</Box>
			)}
			<Box display="flex" marginLeft={"auto"}>
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === "dark" ? (
						<DarkModeOutlinedIcon />
					) : (
						<LightModeOutlinedIcon />
					)}
				</IconButton>
				{/* <IconButton>
					<NotificationsOutlinedIcon />
				</IconButton> */}
				{/* <IconButton>
					<SettingsOutlinedIcon />
				</IconButton> */}
				{props.profile && (
					// <IconButton>
					// 	<PersonOutlinedIcon />
					// </IconButton>
					<UserDropdown />
				)}
			</Box>
		</Box>
	);
};

export default AppNavBar;
