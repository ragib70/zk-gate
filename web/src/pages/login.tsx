import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import { FC, useContext, useEffect, useMemo } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AppNavBar from "../components/AppNavBar/AppNavBar";
import { AuthContext } from "../contexts/auth";
import { NetworkContext } from "../contexts/network";
import { tokens } from "../contexts/theme";

const LoginPage: FC = () => {
	const theme: any = useTheme();
	const colors = useMemo(() => tokens(theme.palette.mode), [theme]);
	const { account, setAccount, ethLogin } = useContext(AuthContext);
	const navigate = useNavigate();
	const { fuel } = useContext(NetworkContext);

	useEffect(() => {
		if (account?.code) {
			navigate("/app");
		}
	}, [account]);

	return (
		<main className="" style={{ height: "100%" }}>
			<AppNavBar />
			<Box
				display="flex"
				height="75%"
				alignItems="center"
				justifyContent="center"
				padding={"150px 0 0 0"}
			>
				<Box>
					<Box
						display="flex"
						justifyContent="center"
						padding="10px 20px 10px 20px"
						marginBottom={3}
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/logo2.png`}
							height="60px"
							width="60px"
						/>
						<Typography
							variant="h1"
							color={colors.grey[100]}
							padding="5px 0 0 10px"
						>
							zk-GATE
						</Typography>
					</Box>
					<Box
						padding={3}
						sx={{
							backgroundColor: colors.primary[800],
							borderRadius: "20px",
							width: "30rem",
						}}
					>
						<Box display="flex" justifyContent={"center"}>
							<Typography
								variant="h2"
								color={colors.grey[100]}
								paddingLeft={1}
							>
								Connect a Wallet
							</Typography>
						</Box>
						<Button
							fullWidth
							sx={{
								"&:hover": {
									backgroundColor: colors.blueAccent[800],
								},
								display: "flex",
								alignItems: "center",
								margin: "40px 0 0 0",
								padding: "10px 20px 10px 20px",
								borderRadius: "10px",
							}}
							onClick={() => ethLogin()}
						>
							<img
								src={`${process.env.PUBLIC_URL}/assets/metamask_icon.svg`}
								height="40px"
								width="50px"
							/>
							<Typography color={colors.grey[100]}>
								Metamask
							</Typography>
						</Button>

						{/* <Button
							fullWidth
							sx={{
								"&:hover": {
									backgroundColor: colors.blueAccent[800],
								},
								display: "flex",
								alignItems: "center",
								margin: "40px 0 0 0",
								padding: "10px 20px 10px 20px",
								borderRadius: "10px",
							}}
							onClick={() => ethLogin("fuel")}
							disabled={!fuel}
						>
							<img
								src={`${process.env.PUBLIC_URL}/assets/fuel_icon.svg`}
								height="40px"
								width="40px"
							/>
							<Typography color={colors.grey[100]}>
								Fuel
							</Typography>
							{!fuel && (
								<Typography color='red' fontSize={8} marginLeft={2}>
									fuel wallet not connected
								</Typography>
							)}
						</Button> */}
					</Box>
				</Box>
			</Box>
		</main>
	);
};

export default LoginPage;
