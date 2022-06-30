import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  player: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "32px",
    fontWeight: 700,
    textTransform: "uppercase",
    width: "85px",
    height: "85px",
    margin: "20px",
    border: "2px solid gold",
    borderRadius: "50%",
    userSelect: "none"
  }
});
