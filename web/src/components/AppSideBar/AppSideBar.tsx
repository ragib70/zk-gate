import {
	createContext,
	FC,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import {
	Sidebar,
	Menu,
	MenuItem,
	SubMenu,
	useProSidebar,
	sidebarClasses,
} from "react-pro-sidebar";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../contexts/theme";
import { NetworkContext } from "../../contexts/network";
import { networks } from "../../constants/network";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { PageContext } from "../../contexts/page";

const AppSideBarContext = createContext<{
	selected: string;
	setSelected: React.Dispatch<React.SetStateAction<string>>;
}>({ selected: "", setSelected: () => {} });

const Item: FC<{
	title: string;
	to: string;
	icon: any;
}> = ({ title, to, icon }) => {
	const navigate = useNavigate();
	const { selected, setSelected } = useContext(AppSideBarContext);
	const { navigationOff } = useContext(PageContext);
	const theme: any = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<MenuItem
			disabled={!!navigationOff}
			active={to.startsWith(`/${selected}`)}
			style={{
				color: colors.grey[100],
			}}
			onClick={() => navigate(to)}
			icon={icon}
			// href={to}
		>
			<Typography>{title}</Typography>
			{/* <Link to={to} /> */}
		</MenuItem>
	);
};

const AppSideBar: FC = () => {
	const theme: any = useTheme();
	const colors = useMemo(() => tokens(theme.palette.mode), [theme]);
	const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
		useProSidebar();
	const { path1 } = useParams();

	const [selected, setSelected] = useState(path1 || "");
	const { selectedNetworkId, setNetworkOption } = useContext(NetworkContext);

	useEffect(() => {
		setSelected(path1 || "");
	}, [path1]);

	return (
		<AppSideBarContext.Provider value={{ selected, setSelected }}>
			{/* <Box
				sx={{
					"& .ps-sidebar-root": {
						background: `${colors.primary[400]} !important`,
					},
					"& .pro-icon-wrapper": {
						backgroundColor: "transparent !important",
					},
					"& .pro-inner-item": {
						padding: "5px 35px 5px 20px !important",
					},
					"& .pro-inner-item:hover": {
						color: "#868dfb !important",
					},
					"& .pro-menu-item.active": {
						color: "#6870fa !important",
					},
				}}
			>
				
			</Box> */}
			{/* <Box position='sticky' top={0} zIndex={12} height={`${height}px`} border='1px solid red'> */}
			<Sidebar
				rootStyles={{
					[`.${sidebarClasses.container}`]: {
						backgroundColor: colors.primary[400],
					},
					borderColor: colors.primary[900],
					height: "100vh",
					position: "sticky",
					top: 0,
					left: 0,
					zIndex: 12,
				}}
			>
				<Menu
					menuItemStyles={{
						root: {
							"& .ps-active": {
								color: "#6870fa !important",
							},
						},
						button: {
							// [`&.${menuClasses.disabled}`]: {
							// 	color: themes[theme].menu.disabled.color,
							// },
							"&:hover": {
								backgroundColor: colors.blueAccent[800],
								color: "#868dfb !important",
							},
							"&": {
								margin: "0 10px 0 10px",
								padding: "0 10px 0 10px",
								borderRadius: "10px",
							},
						},
					}}
				>
					<MenuItem
						onClick={() => collapseSidebar(!collapsed)}
						icon={collapsed ? <MenuOutlinedIcon /> : undefined}
					>
						{!collapsed && (
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								ml="15px"
							>
								<Box
									display="flex"
									alignItems="center"
									sx={{
										backgroundColor: colors.blueAccent[800],
										px: 1,
										borderRadius: 2,
									}}
								>
									<img
										src={`${process.env.PUBLIC_URL}/assets/logo2.png`}
										height="20px"
										width="20px"
									/>
									<Typography
										variant="h3"
										color={colors.grey[100]}
										paddingLeft={1}
									>
										zk-GATE
									</Typography>
								</Box>

								<IconButton
									onClick={() => collapseSidebar(!collapsed)}
									style={{
										color: colors.grey[100],
									}}
								>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>
					<Box>
						<Item
							title="Home"
							to="/app"
							icon={<TimelineOutlinedIcon />}
						/>

						{/* <Typography
							variant="h6"
							color={colors.grey[300]}
							sx={{
								m: `15px 0 5px ${collapsed ? "15px" : "25px"}`,
							}}
						>
							Personal
						</Typography> */}
						{/* <Item
							title="My courses"
							to="/mycourses"
							icon={<MenuBookOutlinedIcon />}
						/> */}

						{/* <Item
							title="Tokens"
							to="/tokens"
							icon={<GridViewOutlinedIcon />}
						/> */}

						<Box
							marginTop={"auto"}
							padding={2}
							display="flex"
							flexWrap={"wrap"}
							alignItems="center"
						>
							{/* {!collapsed && (
								<Typography>Connected to network:</Typography>
							)} */}
							<Typography
								fontWeight={645}
								color={colors.greenAccent[400]}
								marginRight={1}
								// className='text-cut'
							>
								{selectedNetworkId
									? networks[selectedNetworkId].label
									: "-"}
							</Typography>
							<IconButton
								title="Change network"
								sx={{
									marginLeft: "auto",
									marginRight: "5px",
									backgroundColor: colors.primary[900],
								}}
								onClick={() => setNetworkOption(true)}
							>
								<ToggleOnIcon />
							</IconButton>
						</Box>
					</Box>
				</Menu>
			</Sidebar>
			{/* </Box> */}
		</AppSideBarContext.Provider>
	);
};

export default AppSideBar;
