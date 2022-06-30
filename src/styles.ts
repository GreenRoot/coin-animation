import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    maxWidth: "768px",
    margin: "20px auto",
    padding: "0 15px"
  },
  bank: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    width: "200px",
    height: "50px",
    border: "1px solid white",
    borderRadius: "10px"
  },
  bank__emount: {
    fontSize: "24px",
    color: "gold",
    fontWeight: 700
  },
  bank__title: {
    fontSize: "24px",
    textTransform: "uppercase",
    color: "white",
    fontWeight: 700
  },
  coin: {
    width: "20px",
    height: "20px"
  },
  btn: {
    border: "1px solid white",
    borderRadius: "10px",
    padding: "10px 15px",
    margin: "10px 0",
    width: "min-content",
    whiteSpace: "nowrap",
    cursor: "pointer",
    userSelect: "none",
    transition: "0.2s",
    " &:hover": {
      color: "black",
      backgroundColor: "white"
    },
    " &:active": {
      color: "black",
      backgroundColor: "#bbb"
    }
  },
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
