// ** MUI Imports
import Zoom from "@mui/material/Zoom";
import { styled } from "@mui/material/styles";
import { FC, useContext, useEffect, useMemo, useState } from "react";
import { Fab } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from "@emotion/react";
import { tokens } from "../contexts/theme";
import { PageContext } from "../contexts/page";

const OverlayLoaderStyled = styled("div")(({ theme }) => ({
	zIndex: 11,
	position: "fixed",
	left: "50%",
	top: theme.spacing(9),
}));

const OverlayLoader: FC = () => {
    const theme: any = useTheme();
	const colors = useMemo(() => tokens(theme.palette.mode), [theme]);
  const {userDataQuery: {loading}} = useContext(PageContext);
	// const [timer, setTimer] = useState<NodeJS.Timeout>();
	//   useEffect(() => {
	//     if (globalState.loading) {
	//       if (timer) {
	//         clearTimeout(timer)
	//       }
	//       setTimer(
	//         setTimeout(() => {
	//           dispatch({
	//             type: SET_LOADING,
	//             payload: {
	//               loading: false
	//             }
	//           })
	//         }, 5000)
	//       )
	//     }
	//   }, [globalState])

	// ** Props
	return (
		<Zoom in={loading}>
			<OverlayLoaderStyled role="presentation" >
				<Fab size="small" aria-label="overlay refresh">
					<CircularProgress sx={{padding: 1}}/>
				</Fab>
			</OverlayLoaderStyled>
		</Zoom>
	);
};

export default OverlayLoader;
