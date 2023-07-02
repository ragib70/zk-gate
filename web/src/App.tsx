import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
	useNavigate,
	useParams,
} from "react-router-dom";
import "./App.css";
import AppNavBar from "./components/AppNavBar/AppNavBar";
import AppSideBar from "./components/AppSideBar/AppSideBar";
import AuthProvider, { AuthContext } from "./contexts/auth";
import { ColorModeContext, useMode } from "./contexts/theme";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import NetworkProvider, { NetworkContext } from "./contexts/network";
import { useContext, useEffect, useState } from "react";
import PageContextProvider, { PageContext } from "./contexts/page";
import OverlayLoader from "./components/OverlayLoader";
import { ToastContainer, toast } from "react-toastify";
import { Amplify } from "aws-amplify";

const vKey = require("./verification_key.json");

Amplify.configure({
  Auth: {
    userPoolId: 'ap-south-1_J3VvKKDEN',
    identityPoolId: 'ap-south-1:a349a6c9-154f-43f5-8f88-66a1e1fdccf5',
    region: "ap-south-1",
  },
	Storage: {
		AWSS3: {
			bucket: "general-blockchain", //REQUIRED -  Amazon S3 bucket name
			region: "ap-south-1", //OPTIONAL -  Amazon service region,
		},
	},
});

function App2() {
	const [genProof, setGenProof] = useState<any>();
	const [verification, setVerification] = useState(false);
	const generate = async () => {
		const { proof, publicSignals } = await (
			window as any
		).snarkjs.groth16.fullProve(
			{ a: 1, b: 2 },
			`${process.env.PUBLIC_URL}/assets/circuit.wasm`,
			`${process.env.PUBLIC_URL}/assets/circuit_final.zkey`
		);

		setGenProof(proof);
		const res = await (window as any).snarkjs.groth16.verify(
			vKey,
			publicSignals,
			proof
		);

		if (res === true) {
			setVerification(true);
		} else {
			console.log("Invalid proof");
		}
	};
	return (
		<div className="App">
			<button onClick={() => generate()}>Generate</button>

			<div>{JSON.stringify(genProof, null, 1)}</div>
			<div>isVerified: {verification ? "YES" : "NO"}</div>
		</div>
	);
}

function App() {
	const { theme, toggleColorMode } = useMode();
	return (
		<ColorModeContext.Provider value={{ toggleColorMode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ProSidebarProvider>
					<NetworkProvider>
						<AuthProvider>
							<PageContextProvider>
								<BrowserRouter>
									<Routes>
										<Route
											path="/login"
											element={<LoginPage />}
										/>
										<Route
											path="/:path1/*"
											element={
												<div className="app">
													<AppSideBar />
													<Main />
												</div>
											}
										/>
										<Route
											path="*"
											element={<Navigate to="/login" />}
										/>
									</Routes>
								</BrowserRouter>
								<OverlayLoader />
							</PageContextProvider>
						</AuthProvider>
					</NetworkProvider>
				</ProSidebarProvider>
				<ToastContainer theme={theme.palette.mode} />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

const Main = () => {
	const { account } = useContext(AuthContext);
	const { setContract, setWallet } = useContext(NetworkContext);
	const navigate = useNavigate();
	const { path1 } = useParams();
	const { setUserDataQuery } = useContext(PageContext);

	useEffect(() => {
		if (!account?.code) {
			setContract(undefined);
			setWallet(undefined);
			navigate("/login");
			return;
		}
	}, [account]);

	const onUserDataCallFailure = (error: any) => {
		setUserDataQuery({ loading: false });
	};

	return (
		<main className="content">
			<AppNavBar search profile />
			{
				<>
					{path1 === "app" ? (
						<HomePage />
					) : path1 === "in" ? (
						<Navigate to="/app" />
					) : path1 === "" ? (
						<Navigate to="/app" />
					) : (
						<Navigate to="/notfound" />
					)}
					{/* <PushChatSupport /> */}
				</>
			}
		</main>
	);
};

export default App;
